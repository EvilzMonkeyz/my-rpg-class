import { Component, OnInit, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType, ChartOptions, Chart } from 'chart.js';
import { RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip } from 'chart.js';

import { ShareDecoderService } from '../../core/services/share-decoder.service';
import { QuizStateService } from '../../core/services/quiz-state.service';
import { CLASSES } from '../../data/classes';
import { Language, RPGClass, RPGStat } from '../../core/models/quiz.model';
import { LanguageToggleComponent } from '../../shared/components/language-toggle/language-toggle.component';

Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, BaseChartDirective, LanguageToggleComponent],
  template: `
    <div class="min-h-screen bg-slate-50 dark:bg-gray-900 text-slate-800 dark:text-gray-100 p-4 pt-24 md:p-8 flex flex-col items-center transition-colors duration-500 relative">
      <app-language-toggle></app-language-toggle>

      @if (determinedClass && stats) {
        <div class="max-w-4xl w-full flex flex-col items-center space-y-8 animate-fade-in-up mt-8 md:mt-12">
          
          <!-- Header info -->
          <div class="text-center w-full bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl dark:shadow-purple-900/20 shadow-indigo-100 border border-slate-100 dark:border-gray-700 transition-all duration-500 relative overflow-hidden">
            <!-- Decorative background blob -->
            <div class="absolute -top-16 -right-16 w-32 h-32 bg-indigo-50 dark:bg-gray-700/50 rounded-full blur-2xl -z-10"></div>
            
            <h1 class="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-rose-500 dark:from-yellow-400 dark:to-red-500 uppercase drop-shadow-sm mb-6">
              {{ determinedClass.name[lang] }}
            </h1>
            <p class="text-xl md:text-2xl text-slate-600 dark:text-gray-300 italic mb-8 font-serif">
              "{{ determinedClass.description[lang] }}"
            </p>

            <button
              (click)="shareResult()"
              class="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl font-bold shadow-lg shadow-indigo-500/30 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center mx-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              {{ lang === 'en' ? 'Share Your Class' : 'แชร์คลาสของคุณ' }}
            </button>
            @if(copySuccess) {
              <p class="text-emerald-500 font-bold mt-4 animate-pulse">{{ lang === 'en' ? 'Link Copied!' : 'คัดลอกลิงก์แล้ว!' }}</p>
            }
          </div>

          <!-- Radar Chart Section -->
          <div class="w-full md:w-2/3 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-gray-700 aspect-square md:aspect-auto transition-all duration-500">
            <h2 class="text-2xl font-extrabold text-center mb-6 text-indigo-500 dark:text-purple-400 capitalize tracking-wide">{{ lang === 'en' ? 'Your Core Attributes' : 'ค่าสถานะหลักของคุณ' }}</h2>
            <div class="relative w-full h-80 md:h-[400px]">
                <canvas baseChart
                  [data]="radarChartData"
                  [options]="radarChartOptions"
                  [type]="'radar'">
                </canvas>
            </div>
          </div>

          <!-- Adventurer's Armory (Affiliate Monetization) -->
          <div class="w-full bg-slate-900 border border-slate-800 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 p-10 rounded-3xl shadow-2xl text-center relative overflow-hidden text-white transition-all duration-500">
            <!-- Decorative badge -->
            <div class="absolute top-0 right-0 bg-yellow-500 text-slate-900 font-extrabold px-6 py-2 rounded-bl-2xl shadow-lg border-b border-l border-yellow-400">
               {{ lang === 'en' ? 'SPONSORED' : 'ผู้สนับสนุน' }}
            </div>
            
            <h2 class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6 drop-shadow">
               💎 {{ lang === 'en' ? "Class-Specific Loot" : 'ไอเทมลับประจำคลาส' }} 💎
            </h2>
            <p class="text-slate-300 dark:text-gray-300 mb-8 text-lg font-medium">
               {{ determinedClass.gearRecommendation[lang].description }}
            </p>
            
            <a 
              [href]="determinedClass.gearRecommendation[lang].url" 
              target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center px-10 py-5 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-extrabold rounded-2xl shadow-xl border-t border-orange-400 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-500/40"
            >
              🏷️ {{ lang === 'en' ? 'Upgrade' : 'อัปเกรด' }} {{ determinedClass.gearRecommendation[lang].name }} {{ lang === 'en' ? 'now!' : 'เลย!' }}
            </a>
          </div>
          
          <button (click)="retakeQuiz()" class="mt-4 text-slate-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white underline font-bold transition flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mr-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            {{ lang === 'en' ? 'Retake Quiz' : 'ทำควิซอีกครั้ง' }}
          </button>

        </div>
      }
    </div>
  `,
  styles: [`
    .animate-fade-in-up {
      animation: fadeInUp 0.6s ease-out forwards;
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class ResultComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private decoder = inject(ShareDecoderService);
  private quizState = inject(QuizStateService);
  private meta = inject(Meta);
  private titleService = inject(Title);

  lang: Language = 'en';
  stats: Record<RPGStat, number> | null = null;
  determinedClass: RPGClass | null = null;
  copySuccess = false;

  radarChartData!: ChartData<'radar'>;
  radarChartOptions: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: { r: { ticks: { display: false }, min: 0, max: 8 } },
    plugins: {
      legend: { display: false },
      tooltip: { backgroundColor: 'rgba(0,0,0,0.8)', titleFont: { size: 16 }, bodyFont: { size: 14 } }
    }
  };

  constructor() {
    effect(() => {
      const isDark = this.quizState.activeTheme() === 'dark';
      this.radarChartOptions = {
        ...this.radarChartOptions,
        scales: {
          r: {
            ...this.radarChartOptions.scales?.['r'],
            angleLines: { color: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)' },
            grid: { color: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)' },
            pointLabels: { color: isDark ? '#e5e7eb' : '#475569', font: { size: 14, weight: 'bold' } },
            min: 0
          }
        }
      };
    });

    effect(() => {
      this.lang = this.quizState.activeLanguage();
      if (this.stats && this.determinedClass) {
        this.initChart();
        this.updateMetaTags();
      }
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const payload = params['p'];
      const langParam = params['lang'];

      this.lang = langParam === 'th' ? 'th' : 'en';
      this.quizState.activeLanguage.set(this.lang);

      if (payload) {
        this.stats = this.decoder.decode(payload);
        console.log({ stats: this.stats, payload });
        if (this.stats) {
          const mainStat = this.calculateHighestStat(this.stats);
          this.determinedClass = CLASSES.find(c => c.primaryStat === mainStat)!;
          this.initChart();
          this.updateMetaTags();
        } else {
          // this.router.navigate(['/']); // Invalid payload
        }
      } else {
        // this.router.navigate(['/']); // No payload
      }
    });
  }

  private calculateHighestStat(stats: Record<RPGStat, number>): RPGStat {
    let highest: RPGStat = 'STR';
    let maxVal = stats['STR'];
    for (const [s, v] of Object.entries(stats)) {
      if (v > maxVal) {
        maxVal = v;
        highest = s as RPGStat;
      }
    }
    return highest;
  }

  private initChart() {
    if (!this.stats) return;

    // Labels configuration could be localized, sticking to English for stat abbreviations easily understood
    const labels = ['STR', 'INT', 'AGI', 'WIS', 'DEX', 'CHA'];
    const dataPoints = labels.map(l => this.stats![l as RPGStat]);

    this.radarChartData = {
      labels,
      datasets: [
        {
          data: dataPoints,
          label: this.lang === 'en' ? 'Stat Value' : 'ค่าสถานะ',
          backgroundColor: 'rgba(168, 85, 247, 0.4)', // Purple-400 with opacity
          borderColor: '#d8b4fe', // Purple-300
          pointBackgroundColor: '#a855f7',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#a855f7',
          borderWidth: 2
        }
      ]
    };
  }

  private updateMetaTags() {
    if (!this.determinedClass || !this.stats) return;

    const title = this.lang === 'en'
      ? `I am a ${this.determinedClass.name.en}! My RPG Class Profile`
      : `ฉันคือ ${this.determinedClass.name.th}! รูปแบบคลาส RPG ของฉัน`;

    const desc = this.determinedClass.description[this.lang];

    // QuickChart Open Graph Image Generation
    const labels = ['STR', 'INT', 'AGI', 'WIS', 'DEX', 'CHA'];
    const data = labels.map(l => this.stats![l as RPGStat] || 0);

    const chartConfig = {
      type: 'radar',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: 'rgba(168, 85, 247, 0.6)',
          borderColor: 'rgb(168, 85, 247)',
          pointBackgroundColor: 'rgb(255, 255, 255)'
        }]
      },
      options: {
        scale: {
          ticks: { display: false, min: 0, max: 5 },
          pointLabels: { fontColor: 'white', fontSize: 18 }
        },
        legend: { display: false }
      }
    };

    // Dark background + chart
    const qcUrl = `https://quickchart.io/chart?w=800&h=418&c=${encodeURIComponent(JSON.stringify(chartConfig))}&bkg=rgb(17,24,39)`;

    this.titleService.setTitle(title);

    // OG Tags for Facebook, Twitter, Discord, etc.
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: desc });
    this.meta.updateTag({ property: 'og:image', content: qcUrl });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: desc });
    this.meta.updateTag({ name: 'twitter:image', content: qcUrl });
  }

  shareResult() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      this.copySuccess = true;
      setTimeout(() => this.copySuccess = false, 2500);
    });
  }

  retakeQuiz() {
    this.quizState.resetQuiz();
    this.router.navigate(['/']);
  }
}
