import { Component } from '@angular/core';
import { LucideAngularModule, Github, Linkedin, Mail, Download } from 'lucide-angular';
import { RESUME_DATA } from '../../core/resume.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <section class="min-h-[90vh] flex flex-col justify-center items-start pt-20">
      <p class="text-primary-400 font-medium mb-4 tracking-wider uppercase text-sm">Olá, meu nome é</p>
      <h1 class="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
        {{ data.name }}.
      </h1>
      <p class="max-w-xl text-lg text-slate-400 mb-10 leading-relaxed">
        {{ data.summary }}
      </p>
      
      <div class="flex flex-wrap items-center gap-4">
        <a href="#contact" class="px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-medium transition-colors shadow-lg shadow-primary-500/20 flex items-center gap-2">
          <lucide-icon name="mail" [size]="20"></lucide-icon> Entre em Contato
        </a>
        <a href="curriculoGustavoOliveira.pdf" download="curriculoGustavoOliveira.pdf" class="px-6 py-3 rounded-lg glass hover:bg-slate-800 text-slate-200 font-medium transition-colors flex items-center gap-2">
          <lucide-icon name="download" [size]="20"></lucide-icon> Download CV
        </a>
      </div>
      
      <div class="mt-12 flex items-center gap-6">
        <a [href]="data.github" target="_blank" rel="noreferrer" class="text-slate-400 hover:text-primary-400 transition-colors bg-slate-800/50 p-3 rounded-full hover:bg-slate-800">
          <lucide-icon name="github" [size]="24"></lucide-icon>
        </a>
        <a [href]="data.linkedin" target="_blank" rel="noreferrer" class="text-slate-400 hover:text-secondary-400 transition-colors bg-slate-800/50 p-3 rounded-full hover:bg-slate-800">
          <lucide-icon name="linkedin" [size]="24"></lucide-icon>
        </a>
      </div>
    </section>
  `
})
export class HeroComponent {
  data = RESUME_DATA;
}
