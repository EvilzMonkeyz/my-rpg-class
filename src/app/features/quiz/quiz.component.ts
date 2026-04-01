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
    <div class="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <app-language-toggle></app-language-toggle>

      <div class="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-2xl p-6 border border-gray-700">
        
        <!-- Progress Bar -->
        <div class="mb-8">
          <div class="flex justify-between text-gray-400 text-sm mb-2 font-medium">
            <span>{{ state.activeLanguage() === 'en' ? 'Question' : 'คำถามที่' }} {{ state.currentQuestionIndex() + 1 }}</span>
            <span>{{ state.currentQuestionIndex() + 1 }} / {{ totalQuestions }}</span>
          </div>
          <div class="w-full bg-gray-700 rounded-full h-3">
            <div 
              class="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500 ease-out" 
              [style.width.%]="progress()">
            </div>
          </div>
        </div>

        @if (currentQuestion()) {
          <!-- Question Text -->
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-8 text-center drop-shadow-sm">
            {{ currentQuestion()!.text[state.activeLanguage()] }}
          </h2>

          <!-- Choices -->
          <div class="space-y-4">
            @for (choice of currentQuestion()!.choices; track $index) {
              <button 
                (click)="onChoiceSelected(choice)"
                class="w-full text-left bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-blue-400 text-gray-100 p-4 rounded-xl shadow-sm transition hover:scale-[1.02] active:scale-95 text-lg"
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
    this.state.answerQuestion(choice);

    if (this.state.isQuizComplete()) {
      // Generate encoded string and navigate
      const payload = this.shareDecoder.encode(this.state.stats());
      const lang = this.state.activeLanguage();
      this.router.navigate(['/result'], { queryParams: { p: payload, lang }});
    }
  }
}
