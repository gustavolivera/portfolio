import { Component } from '@angular/core';
import { RESUME_DATA } from '../../core/resume.data';

@Component({
  selector: 'app-navigation',
  standalone: true,
  template: `
    <nav class="fixed top-0 w-full z-50 glass transition-all duration-300">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between min-h-16 py-3">
          <a href="#" class="text-lg sm:text-xl font-bold text-slate-100 hover:text-primary-300 transition-colors">
            {{ data.name }}
          </a>
          <div class="hidden md:block">
            <div class="ml-10 flex items-center gap-2">
              <a href="#experience" class="hover:text-primary-300 transition-colors px-3 py-2 rounded-md text-sm font-medium">Experiência</a>
              <a href="#projects" class="hover:text-primary-300 transition-colors px-3 py-2 rounded-md text-sm font-medium">Projetos</a>
              <a href="#education" class="hover:text-primary-300 transition-colors px-3 py-2 rounded-md text-sm font-medium">Formação</a>
              <a href="#skills" class="hover:text-primary-300 transition-colors px-3 py-2 rounded-md text-sm font-medium">Habilidades</a>
              <a href="#contact" class="hover:text-primary-300 transition-colors px-3 py-2 rounded-md text-sm font-medium">Contato</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavigationComponent {
  data = RESUME_DATA;
}
