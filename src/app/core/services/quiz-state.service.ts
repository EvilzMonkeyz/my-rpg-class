import { Injectable, signal, computed, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Language, Choice, RPGStat } from '../models/quiz.model';
import { QUESTIONS } from '../../data/questions';
import { CLASSES } from '../../data/classes';

@Injectable({
  providedIn: 'root'
})
export class QuizStateService {
  private document = inject(DOCUMENT);

  // Core State
  activeLanguage = signal<Language>('en');
  activeTheme = signal<'dark' | 'light'>('dark');
  currentQuestionIndex = signal<number>(0);
  
  // Track stats dynamically
  stats = signal<Record<RPGStat, number>>({
    STR: 0,
    INT: 0,
    AGI: 0,
    WIS: 0,
    DEX: 0,
    CHA: 0
  });

  // Computed Values
  isQuizComplete = computed(() => this.currentQuestionIndex() >= QUESTIONS.length);
  
  highestStat = computed<RPGStat>(() => {
    const currentStats = this.stats();
    let highest: RPGStat = 'STR';
    let maxVal = currentStats['STR'];

    for (const [stat, val] of Object.entries(currentStats)) {
      if (val > maxVal) {
        maxVal = val as number;
        highest = stat as RPGStat;
      }
    }
    return highest;
  });

  assignedClass = computed(() => {
    const mainStat = this.highestStat();
    return CLASSES.find(c => c.primaryStat === mainStat)!;
  });

  // Actions
  toggleLanguage() {
    this.activeLanguage.update(lang => lang === 'en' ? 'th' : 'en');
  }

  toggleTheme() {
    this.activeTheme.update(theme => {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      if (newTheme === 'dark') {
        this.document.documentElement.classList.add('dark');
      } else {
        this.document.documentElement.classList.remove('dark');
      }
      return newTheme;
    });
  }

  initTheme() {
    // Force set initial theme to DOM
    if (this.activeTheme() === 'dark') {
      this.document.documentElement.classList.add('dark');
    }
  }

  answerQuestion(choice: Choice) {
    // Increase stat
    this.stats.update(s => ({
      ...s,
      [choice.stat]: s[choice.stat] + 1
    }));
    // Next question
    this.currentQuestionIndex.update(idx => idx + 1);
  }

  resetQuiz() {
    this.currentQuestionIndex.set(0);
    this.stats.set({
      STR: 0,
      INT: 0,
      AGI: 0,
      WIS: 0,
      DEX: 0,
      CHA: 0
    });
  }
}
