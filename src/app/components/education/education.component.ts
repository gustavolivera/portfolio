import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { RESUME_DATA } from '../../core/resume.data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="education" class="py-14 md:py-16">
      <div class="mb-10 md:mb-12">
        <p class="text-secondary-400 font-semibold tracking-wider uppercase text-sm mb-3">Formação</p>
        <h3 class="text-3xl md:text-4xl font-bold text-slate-100">Educação e certificações</h3>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] gap-6">
        <article *ngFor="let edu of education" class="glass-card p-6 md:p-8">
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <div class="w-12 h-12 rounded-lg bg-primary-500/15 text-primary-300 flex items-center justify-center mb-5">
                <lucide-icon name="graduation-cap" [size]="24"></lucide-icon>
              </div>
              <h4 class="text-xl md:text-2xl font-bold text-slate-100">{{ edu.degree }}</h4>
              <p class="text-primary-300 font-semibold mt-2">{{ edu.institution }}</p>
            </div>
            <div class="sm:text-right">
              <span class="inline-block px-3 py-1 rounded-full bg-slate-950/60 border border-slate-800 text-slate-300 text-sm font-semibold">
                {{ edu.period }}
              </span>
              <p class="text-slate-500 text-sm mt-2">{{ edu.location }}</p>
            </div>
          </div>

          <ul class="space-y-3">
            <li *ngFor="let achievement of edu.achievements" class="flex items-start text-slate-400 leading-relaxed">
              <span class="mt-2 mr-3 h-1.5 w-1.5 rounded-full bg-secondary-400 flex-shrink-0"></span>
              <span>{{ achievement }}</span>
            </li>
          </ul>
        </article>

        <aside class="glass-card p-6 md:p-8">
          <div class="w-12 h-12 rounded-lg bg-secondary-500/15 text-secondary-300 flex items-center justify-center mb-5">
            <lucide-icon name="badge-check" [size]="24"></lucide-icon>
          </div>
          <h4 class="text-xl font-bold text-slate-100 mb-4">Certificações</h4>
          <ul class="space-y-3">
            <li *ngFor="let certification of certifications" class="rounded-lg border border-slate-800 bg-slate-950/45 p-4 text-slate-300 leading-relaxed">
              {{ certification }}
            </li>
          </ul>
        </aside>
      </div>
    </section>
  `
})
export class EducationComponent {
  education = RESUME_DATA.education;
  certifications = RESUME_DATA.certifications;
}
