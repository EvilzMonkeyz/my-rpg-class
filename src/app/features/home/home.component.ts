import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuizStateService } from '../../core/services/quiz-state.service';
import { LanguageToggleComponent } from '../../shared/components/language-toggle/language-toggle.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LanguageToggleComponent],
  template: `
    <div
      class="min-h-screen bg-slate-50 dark:bg-gray-900 flex flex-col items-center justify-center p-4 pt-24 md:p-8 transition-colors duration-500 relative"
    >
      <app-language-toggle></app-language-toggle>

      <div
        class="text-center max-w-2xl bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl dark:shadow-purple-900/20 shadow-indigo-100 border border-gray-100 dark:border-gray-700 transition-all duration-500"
      >
        <h1
          class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-600 dark:from-purple-400 dark:to-pink-600 mb-6 drop-shadow-sm"
        >
          {{
            state.activeLanguage() === 'en'
              ? 'Discover your true adventurer career'
              : 'ค้นหาอาชีพ นักผจญภัย ที่แท้จริงของคุณ'
          }}
        </h1>

        <p
          class="text-slate-600 dark:text-gray-300 text-lg md:text-xl mb-10 leading-relaxed font-medium"
        >
          {{
            state.activeLanguage() === 'en'
              ? 'If this world were an online game, what kind of status would you have? It only takes 3 minutes to find out!'
              : 'ถ้าโลกใบนี้คือเกมออนไลน์ คุณจะมีสเตตัสแบบไหน? ใช้เวลาแค่ 3 นาทีเพื่อค้นหาคำตอบ!'
          }}
        </p>

        <button
          (click)="startQuiz()"
          class="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-indigo-500 dark:to-purple-600 hover:from-blue-700 hover:to-indigo-700 dark:hover:from-indigo-600 dark:hover:to-purple-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl shadow-indigo-500/30 dark:shadow-purple-500/30 transform transition-all hover:-translate-y-1 hover:scale-105 active:scale-95 text-xl tracking-wide flex items-center justify-center mx-auto gap-2"
        >
          <span>⚔️</span>
          {{ state.activeLanguage() === 'en' ? 'Start Adventure' : 'เริ่มการผจญภัย' }}
        </button>
      </div>
    </div>
  `,
})
export class HomeComponent {
  state = inject(QuizStateService);
  private router = inject(Router);

  startQuiz() {
    this.state.resetQuiz();
    this.router.navigate(['/quiz']);
  }
}
