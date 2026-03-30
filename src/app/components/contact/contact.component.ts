import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RESUME_DATA } from '../../core/resume.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <section id="contact" class="py-24 max-w-2xl mx-auto text-center">
      <h3 class="text-primary-500 font-mono text-xl mb-4">Qual o próximo passo?</h3>
      <h2 class="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Entre em Contato</h2>
      
      <p class="text-lg text-slate-400 mb-12 leading-relaxed">
        Sinta-se à vontade para me enviar uma mensagem, conectar no LinkedIn ou conferir meus projetos no GitHub!
      </p>

      <div class="flex flex-wrap items-center justify-center gap-4 mb-20 text-lg">
        <a [href]="'mailto:' + data.email" class="inline-flex items-center gap-3 px-6 py-4 bg-transparent border-2 border-primary-500 text-primary-400 font-bold rounded-lg hover:bg-primary-500/10 transition-colors">
          <lucide-icon name="mail" [size]="24"></lucide-icon> Email
        </a>
        <a [href]="data.linkedin" target="_blank" class="inline-flex items-center gap-3 px-6 py-4 bg-transparent border-2 border-secondary-500 text-secondary-500 font-bold rounded-lg hover:bg-secondary-500/10 transition-colors">
          <lucide-icon name="linkedin" [size]="24"></lucide-icon> LinkedIn
        </a>
        <a [href]="data.github" target="_blank" class="inline-flex items-center gap-3 px-6 py-4 bg-transparent border-2 border-slate-500 text-slate-400 font-bold rounded-lg hover:bg-slate-500/10 transition-colors">
          <lucide-icon name="github" [size]="24"></lucide-icon> GitHub
        </a>
      </div>

      <footer class="mt-20 pt-8 border-t border-slate-800 text-slate-500 flex flex-col items-center justify-center">
        <div class="flex gap-6 mb-4">
          <a [href]="data.github" target="_blank" class="hover:text-primary-400 transition-colors">
            <lucide-icon name="github" [size]="20"></lucide-icon>
          </a>
          <a [href]="data.linkedin" target="_blank" class="hover:text-secondary-400 transition-colors">
            <lucide-icon name="linkedin" [size]="20"></lucide-icon>
          </a>
        </div>
        <p class="text-sm">Desenvolvido com Angular & Tailwind CSS</p>
        <p class="text-sm font-mono mt-2">© {{ currentYear }} {{ data.name }}</p>
      </footer>
    </section>
  `
})
export class ContactComponent {
  data = RESUME_DATA;
  currentYear = new Date().getFullYear();
}
