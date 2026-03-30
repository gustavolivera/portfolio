import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { RESUME_DATA } from '../../core/resume.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="experience" class="py-24">
      <h3 class="text-3xl font-bold text-slate-200 mb-12 flex items-center gap-3">
        Experiência Profissional
        <div class="h-px bg-slate-800 flex-grow ml-4"></div>
      </h3>

      <div class="space-y-12">
        <div *ngFor="let job of experience" class="relative group">
          <div class="absolute -inset-y-6 -inset-x-4 z-0 hidden rounded-xl transition group-hover:bg-slate-800/20 lg:block"></div>
          <div class="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            
            <header class="md:col-span-1 mt-1 text-sm text-slate-500 uppercase font-semibold tracking-wide flex flex-col gap-1">
              <span>{{ job.period }}</span>
              <span class="flex items-center gap-1 text-slate-400">
                <lucide-icon name="map-pin" [size]="14"></lucide-icon> {{ job.location }}
              </span>
            </header>
            
            <div class="md:col-span-3">
              <h4 class="text-xl font-semibold text-slate-200 group-hover:text-primary-400 transition-colors">
                {{ job.role }}
              </h4>
              <h5 class="text-lg text-slate-400 mb-4">{{ job.company }}</h5>
              <ul class="space-y-3">
                <li *ngFor="let desc of job.description" class="flex items-start text-slate-400 leading-relaxed text-base">
                  <span class="text-primary-500 mr-3 mt-1.5 flex-shrink-0">▹</span>
                  <span>{{ desc }}</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {
  experience = RESUME_DATA.experience;
}
