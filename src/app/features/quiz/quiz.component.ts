import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuizStateService } from '../../core/services/quiz-state.service';
import { ShareDecoderService } from '../../core/services/share-decoder.service';
import { QUESTIONS } from '../../data/questions';
import { Choice } from '../../core/models/quiz.model';
import { LanguageToggleComponent } from '../../shared/components/language-toggle/language-toggle.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, LanguageToggleComponent],
  template: `
    <div class="min-h-screen bg-slate-50 dark:bg-gray-900 flex flex-col items-center justify-center p-4 pt-24 lg:p-8 transition-colors duration-500 relative">
      <app-language-toggle></app-language-toggle>

      <div class="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl dark:shadow-purple-900/20 shadow-indigo-100 p-8 border border-gray-100 dark:border-gray-700 transition-all duration-500">
        
        <!-- Progress Bar -->
        <div class="mb-10">
          <div class="flex justify-between text-slate-500 dark:text-gray-400 text-sm mb-3 font-bold uppercase tracking-wider">
            <span>{{ state.activeLanguage() === 'en' ? 'Question' : 'คำถามที่' }} {{ state.currentQuestionIndex() + 1 }}</span>
            <span>{{ state.currentQuestionIndex() + 1 }} / {{ totalQuestions }}</span>
          </div>
          <div class="w-full bg-slate-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner">
            <div 
              class="bg-gradient-to-r from-teal-400 to-blue-500 dark:from-green-400 dark:to-blue-500 h-full rounded-full transition-all duration-700 ease-out shadow-md" 
              [style.width.%]="progress()">
            </div>
          </div>
        </div>

        @if (currentQuestion()) {
          <!-- Question Text -->
          <h2 class="text-xl md:text-2xl font-extrabold text-slate-800 dark:text-white mb-10 text-center leading-snug drop-shadow-sm transition-colors duration-500">
            {{ currentQuestion()!.text[state.activeLanguage()] }}
          </h2>

          <!-- Choices -->
          <div class="space-y-4">
            @for (choice of currentQuestion()!.choices; track $index) {
              <button 
                (click)="onChoiceSelected(choice)"
                class="w-full text-left bg-slate-100 hover:bg-white dark:bg-gray-700 dark:hover:bg-gray-600 border-2 border-slate-200 hover:border-blue-400 dark:border-gray-600 dark:hover:border-blue-400 text-slate-700 dark:text-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 active:scale-95 text-lg font-medium leading-relaxed"
              >
                {{ choice.text[state.activeLanguage()] }}
              </button>
            }
          </div>
        }
      </div>
    </div>
  `
})
export class QuizComponent {
  state = inject(QuizStateService);
  private router = inject(Router);
  private shareDecoder = inject(ShareDecoderService);

  totalQuestions = QUESTIONS.length;
  currentQuestion = computed(() => {
    const idx = this.state.currentQuestionIndex();
    return idx < this.totalQuestions ? QUESTIONS[idx] : null;
  });

  progress = computed(() => ((this.state.currentQuestionIndex()) / this.totalQuestions) * 100);

  onChoiceSelected(choice: Choice) {
    // scroll smooth to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.state.answerQuestion(choice);

    if (this.state.isQuizComplete()) {
      // Generate encoded string and navigate
      const payload = this.shareDecoder.encode(this.state.stats());
      const lang = this.state.activeLanguage();
      this.router.navigate(['/result'], { queryParams: { p: payload, lang } });
    }
  }
}
