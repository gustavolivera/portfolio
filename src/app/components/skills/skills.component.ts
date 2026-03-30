import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME_DATA } from '../../core/resume.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-24">
      <h3 class="text-3xl font-bold text-slate-200 mb-12 flex items-center gap-3">
        Habilidades Técnicas
        <div class="h-px bg-slate-800 flex-grow ml-4"></div>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div class="glass-card p-6 flex flex-col items-center text-center">
          <div class="w-12 h-12 rounded-lg bg-primary-500/20 text-primary-400 flex items-center justify-center mb-6 shadow-glow">
            <span class="font-mono text-2xl font-bold">&lt;/&gt;</span>
          </div>
          <h4 class="text-lg font-bold text-slate-200 mb-4">Linguagens & Front-End</h4>
          <ul class="space-y-2 w-full text-slate-400">
            <li *ngFor="let item of skills.languagesAndFrameworks" class="bg-slate-800/50 py-2 rounded-md font-medium text-sm w-full flex items-center justify-center gap-2">
              <i [class]="getIconClass(item) + ' text-lg'"></i> {{ item }}
            </li>
          </ul>
        </div>
        
        <div class="glass-card p-6 flex flex-col items-center text-center">
          <div class="w-12 h-12 rounded-lg bg-secondary-500/20 text-secondary-400 flex items-center justify-center mb-6 shadow-glow">
            <span class="font-mono text-2xl font-bold">db</span>
          </div>
          <h4 class="text-lg font-bold text-slate-200 mb-4">Banco de Dados & Cloud</h4>
          <ul class="space-y-2 w-full text-slate-400">
            <li *ngFor="let item of skills.databasesAndCloud" class="bg-slate-800/50 py-2 rounded-md font-medium text-sm w-full flex items-center justify-center gap-2">
               <i [class]="getIconClass(item) + ' text-lg'"></i> {{ item }}
            </li>
          </ul>
        </div>
        
        <div class="glass-card p-6 flex flex-col items-center text-center">
          <div class="w-12 h-12 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 shadow-glow">
            <span class="font-mono text-2xl font-bold">⚙</span>
          </div>
          <h4 class="text-lg font-bold text-slate-200 mb-4">Ferramentas & DevOps</h4>
          <ul class="space-y-2 w-full text-slate-400">
            <li *ngFor="let item of skills.tools" class="bg-slate-800/50 py-2 rounded-md font-medium text-sm w-full flex items-center justify-center gap-2">
               <i [class]="getIconClass(item) + ' text-lg'"></i> {{ item }}
            </li>
          </ul>
        </div>

        <div class="glass-card p-6 flex flex-col items-center text-center">
          <div class="w-12 h-12 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-6 shadow-glow">
            <span class="font-mono text-2xl font-bold">Aa</span>
          </div>
          <h4 class="text-lg font-bold text-slate-200 mb-4">Idiomas</h4>
          <ul class="space-y-2 w-full text-slate-400">
            <li *ngFor="let item of skills.languages" class="bg-slate-800/50 py-2 rounded-md font-medium text-sm w-full">{{ item }}</li>
          </ul>
        </div>

      </div>
    </section>
  `
})
export class SkillsComponent {
  skills = RESUME_DATA.skills;

  getIconClass(techName: string): string {
    const iconMap: { [key: string]: string } = {
      'C#': 'devicon-csharp-plain',
      '.NET': 'devicon-dotnetcore-plain',
      'TypeScript': 'devicon-typescript-plain',
      'Angular': 'devicon-angularjs-plain',
      'React': 'devicon-react-original',
      'NestJS': 'devicon-nestjs-plain',
      'PostgreSQL': 'devicon-postgresql-plain',
      'MongoDB': 'devicon-mongodb-plain',
      'Microsoft Azure': 'devicon-azure-plain',
      'Docker': 'devicon-docker-plain',
      'Git': 'devicon-git-plain',
      'Tailwind CSS': 'devicon-tailwindcss-original'
    };
    return iconMap[techName] || 'devicon-html5-plain'; // generic fallback
  }
}
