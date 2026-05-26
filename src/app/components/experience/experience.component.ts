import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { RESUME_DATA } from '../../core/resume.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="experience" class="py-14 md:py-16">
      <div class="mb-10 md:mb-12">
        <p class="text-secondary-400 font-semibold tracking-wider uppercase text-sm mb-3">Trajetória</p>
        <h3 class="text-3xl md:text-4xl font-bold text-slate-100">Experiência profissional</h3>
      </div>

      <div class="space-y-6">
        <article *ngFor="let job of experience" class="glass-card p-6 md:p-8">
          <div class="grid grid-cols-1 md:grid-cols-[15rem_1fr] gap-6 md:gap-8">
            <header class="space-y-4">
              <span class="inline-flex items-center gap-2 rounded-full bg-primary-500/10 text-primary-300 px-3 py-1 text-sm font-semibold">
                <lucide-icon name="calendar" [size]="15"></lucide-icon>
                {{ job.period }}
              </span>
              <p class="flex items-center gap-2 text-slate-400 text-sm">
                <lucide-icon name="map-pin" [size]="16"></lucide-icon>
                {{ job.location }}
              </p>
            </header>

            <div>
              <h4 class="text-xl md:text-2xl font-bold text-slate-100">{{ job.role }}</h4>
              <p class="mt-1 mb-5 text-primary-300 font-semibold">{{ job.company }}</p>
              <p *ngIf="job.progression" class="mb-5 rounded-lg border border-slate-800 bg-slate-950/45 px-4 py-3 text-sm text-slate-300 leading-relaxed">
                {{ job.progression }}
              </p>
              <ul class="space-y-3">
                <li *ngFor="let desc of job.description" class="flex items-start text-slate-400 leading-relaxed">
                  <span class="mt-2 mr-3 h-1.5 w-1.5 rounded-full bg-secondary-400 flex-shrink-0"></span>
                  <span>{{ desc }}</span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  `
})
export class ExperienceComponent {
  experience = RESUME_DATA.experience;
}
