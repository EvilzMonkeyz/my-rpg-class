import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizStateService } from '../../../core/services/quiz-state.service';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="state.toggleLanguage()"
      class="fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full font-bold shadow-lg hover:bg-gray-700 transition"
    >
      {{ state.activeLanguage() === 'en' ? 'EN / TH' : 'TH / EN' }}
    </button>
  `,
})
export class LanguageToggleComponent {
  state = inject(QuizStateService);
}
