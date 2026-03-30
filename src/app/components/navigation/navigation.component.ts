import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  template: `
    <nav class="fixed top-0 w-full z-50 glass transition-all duration-300">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex-shrink-0">
            <a href="#" class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
              Gustavo Oliveira
            </a>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a href="#experience" class="hover:text-primary-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Experiência</a>
              <a href="#education" class="hover:text-primary-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Formação</a>
              <a href="#skills" class="hover:text-primary-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Habilidades</a>
              <a href="#contact" class="hover:text-primary-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Contato</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavigationComponent {}
