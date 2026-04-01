import { Component, OnInit, inject } from '@angular/core';
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
    <div class="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8 flex flex-col items-center">
      <app-language-toggle></app-language-toggle>

      @if (determinedClass && stats) {
        <div class="max-w-4xl w-full flex flex-col items-center space-y-8 animate-fade-in-up">
          
          <!-- Header info -->
          <div class="text-center w-full bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
            <h1 class="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500 uppercase drop-shadow-md mb-4">
              {{ determinedClass.name[lang] }}
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 italic mb-6">
              {{ determinedClass.description[lang] }}
            </p>

            <button
              (click)="shareResult()"
              class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow-md transition transform hover:scale-105 active:scale-95"
            >
              <span class="mr-2">🔗</span> {{ lang === 'en' ? 'Copy Share Link' : 'คัดลอกลิงก์แชร์' }}
            </button>
            @if(copySuccess) {
              <p class="text-green-400 mt-2 font-semibold transition-opacity" >{{ lang === 'en' ? 'Copied!' : 'คัดลอกแล้ว!'}}</p>
            }
          </div>

          <!-- Radar Chart Section -->
          <div class="w-full md:w-2/3 bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 aspect-square md:aspect-auto">
            <h2 class="text-2xl font-bold text-center mb-4 text-purple-400">{{ lang === 'en' ? 'Your Stats' : 'ค่าสถานะของคุณ' }}</h2>
            <div class="relative w-full h-96">
                <canvas baseChart
                  [data]="radarChartData"
                  [options]="radarChartOptions"
                  [type]="'radar'">
                </canvas>
            </div>
          </div>

          <!-- Adventurer's Armory (Affiliate Monetization) -->
          <div class="w-full bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 text-center relative overflow-hidden">
            <!-- Decorative badge -->
            <div class="absolute top-0 right-0 bg-yellow-500 text-gray-900 font-bold px-4 py-1 rounded-bl-xl shadow-md">
               {{ lang === 'en' ? 'SPONSORED' : 'ผู้สนับสนุน' }}
            </div>
            
            <h2 class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 mb-6 drop-shadow">
               🛡️ {{ lang === 'en' ? "Adventurer's Armory" : 'คลังอาวุธนักผจญภัย' }} ⚔️
            </h2>
            <p class="text-gray-300 mb-6 text-lg">
               {{ lang === 'en' ? 'Equip yourself for the journey ahead. As a ' + determinedClass.name.en + ', we highly recommend this essential gear:' : 'เตรียมพร้อมสำหรับการเดินทางในฐานะ ' + determinedClass.name.th + ' เราขอแนะนำอุปกรณ์ที่ขาดไม่ได้:' }}
            </p>
            
            <a 
              [href]="determinedClass.gearRecommendation[lang].url" 
              target="_blank" rel="noopener noreferrer"
              class="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl shadow-lg border-2 border-orange-400 transform transition-transform hover:-translate-y-1 hover:shadow-orange-500/50"
            >
              🛍️ {{ lang === 'en' ? 'Buy ' : 'ซื้อ ' }} {{ determinedClass.gearRecommendation[lang].name }}
              <span class="block text-xs opacity-75 mt-1">{{ lang === 'en' ? 'on Target Store' : 'ที่ร้านค้าเป้าหมาย' }}</span>
            </a>
          </div>
          
          <button (click)="retakeQuiz()" class="mt-8 text-gray-400 hover:text-white underline font-semibold transition">
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
    scales: {
      r: {
        angleLines: { color: 'rgba(255, 255, 255, 0.2)' },
        grid: { color: 'rgba(255, 255, 255, 0.2)' },
        pointLabels: { color: '#e5e7eb', font: { size: 14, weight: 'bold' } },
        ticks: { display: false },
        min: 0,
        max: 8
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleFont: { size: 16 },
        bodyFont: { size: 14 },
      }
    }
  };

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const payload = params['p'];
      const langParam = params['lang'];
      
      this.lang = langParam === 'th' ? 'th' : 'en';
      this.quizState.activeLanguage.set(this.lang);

      if (payload) {
        this.stats = this.decoder.decode(payload);
        if (this.stats) {
          const mainStat = this.calculateHighestStat(this.stats);
          this.determinedClass = CLASSES.find(c => c.primaryStat === mainStat)!;
          this.initChart();
          this.updateMetaTags();
        } else {
          this.router.navigate(['/']); // Invalid payload
        }
      } else {
        this.router.navigate(['/']); // No payload
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
