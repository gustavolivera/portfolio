import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME_DATA } from '../../core/resume.data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="py-24">
      <h3 class="text-3xl font-bold text-slate-200 mb-12 flex items-center gap-3">
        Educação
        <div class="h-px bg-slate-800 flex-grow ml-4"></div>
      </h3>

      <div class="space-y-16">
        <div *ngFor="let edu of education" class="glass-card p-8">
          <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div>
              <h4 class="text-xl font-bold text-slate-100">{{ edu.degree }}</h4>
              <p class="text-primary-400 font-medium mt-1">{{ edu.institution }}</p>
            </div>
            <div class="mt-2 md:mt-0 text-right">
              <span class="inline-block px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm font-semibold tracking-wide">
                {{ edu.period }}
              </span>
              <p class="text-slate-500 text-sm mt-1">{{ edu.location }}</p>
            </div>
          </div>
          
          <div class="space-y-4 text-slate-400">
            <h5 class="font-semibold text-slate-300">Destaques Acadêmicos:</h5>
            <ul class="space-y-3">
               <li *ngFor="let achievement of edu.achievements" class="flex items-start">
                 <span class="text-secondary-500 mr-3 mt-1.5 flex-shrink-0">✓</span>
                 <span class="leading-relaxed">{{ achievement }}</span>
               </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
})
export class EducationComponent {
  education = RESUME_DATA.education;
}
