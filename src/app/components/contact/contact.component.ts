import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RESUME_DATA } from '../../core/resume.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <section id="contact" class="py-14 md:py-16">
      <div class="glass-card p-6 md:p-10 text-center max-w-3xl mx-auto">
        <p class="text-secondary-400 font-semibold tracking-wider uppercase text-sm mb-3">Contato</p>
        <h2 class="text-3xl md:text-5xl font-bold text-slate-100 mb-6">Vamos conversar?</h2>

        <p class="text-lg text-slate-400 mb-10 leading-relaxed">
          Estou aberto a oportunidades, conexões profissionais e conversas sobre desenvolvimento web, sistemas corporativos e soluções com .NET.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-base">
          <a [href]="'mailto:' + data.email" class="inline-flex items-center justify-center gap-3 px-5 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-500 transition-colors">
            <lucide-icon name="mail" [size]="21"></lucide-icon> Email
          </a>
          <a [href]="data.linkedin" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center gap-3 px-5 py-4 bg-slate-950/55 border border-slate-700 text-slate-200 font-bold rounded-lg hover:border-secondary-400/70 hover:text-secondary-300 transition-colors">
            <lucide-icon name="linkedin" [size]="21"></lucide-icon> LinkedIn
          </a>
          <a [href]="data.github" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center gap-3 px-5 py-4 bg-slate-950/55 border border-slate-700 text-slate-200 font-bold rounded-lg hover:border-primary-400/70 hover:text-primary-300 transition-colors">
            <lucide-icon name="github" [size]="21"></lucide-icon> GitHub
          </a>
        </div>

        <div class="mt-8 flex flex-col sm:flex-row justify-center gap-3 text-sm text-slate-500">
          <span>{{ data.email }}</span>
          <span class="hidden sm:inline">•</span>
          <span>{{ data.phone }}</span>
        </div>
      </div>

      <footer class="mt-16 pt-8 border-t border-slate-800 text-slate-500 flex flex-col items-center justify-center">
        <p class="text-sm">Desenvolvido com Angular e Tailwind CSS</p>
        <p class="text-sm font-mono mt-2">© {{ currentYear }} {{ data.name }}</p>
      </footer>
    </section>
  `
})
export class ContactComponent {
  data = RESUME_DATA;
  currentYear = new Date().getFullYear();
}
