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
    <div class="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <app-language-toggle></app-language-toggle>
      
      <div class="text-center max-w-2xl bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700">
        <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 drop-shadow-md">
          {{ state.activeLanguage() === 'en' ? 'My RPG Class' : 'คลาส RPG ของคุณ' }}
        </h1>
        
        <p class="text-gray-300 text-lg mb-8 leading-relaxed">
          {{ state.activeLanguage() === 'en' 
            ? 'Answer 12 carefully crafted questions to discover your true RPG starting class! Are you a brave Knight, a wise Cleric, or something entirely different?' 
            : 'ตอบคำถาม 12 ข้อที่คัดสรรมาอย่างดีเพื่อค้นหาคลาส RPG ที่แท้จริงของคุณ! คุณจะเป็นอัศวินผู้กล้าหาญ นักบวชผู้ชาญฉลาด หรือสิ่งอื่นที่แตกต่างไปเลย?' }}
        </p>
        
        <button 
          (click)="startQuiz()"
          class="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg transform transition-transform hover:scale-105 active:scale-95 text-xl"
        >
          {{ state.activeLanguage() === 'en' ? 'Start Adventure' : 'เริ่มการผจญภัย' }}
        </button>
      </div>
    </div>
  `
})
export class HomeComponent {
  state = inject(QuizStateService);
  private router = inject(Router);

  startQuiz() {
    this.state.resetQuiz();
    this.router.navigate(['/quiz']);
  }
}
