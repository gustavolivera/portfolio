import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { RESUME_DATA } from '../../core/resume.data';

type SkillGroup = {
  title: string;
  icon: string;
  accent: string;
  items: string[];
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="skills" class="py-14 md:py-16">
      <div class="mb-10 md:mb-12">
        <p class="text-secondary-400 font-semibold tracking-wider uppercase text-sm mb-3">Competências</p>
        <h3 class="text-3xl md:text-4xl font-bold text-slate-100">Habilidades técnicas</h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
        <article *ngFor="let group of skillGroups" class="glass-card p-6 flex flex-col">
          <div [class]="'w-12 h-12 rounded-lg flex items-center justify-center mb-5 ' + group.accent">
            <lucide-icon [name]="group.icon" [size]="22"></lucide-icon>
          </div>
          <h4 class="text-lg font-bold text-slate-100 mb-4">{{ group.title }}</h4>
          <ul class="space-y-2">
            <li *ngFor="let item of group.items" class="min-h-10 bg-slate-950/45 border border-slate-800/70 px-3 py-2 rounded-md font-medium text-sm text-slate-300 flex items-center gap-2">
              <i [class]="getIconClass(item) + ' text-base text-primary-300'"></i>
              <span>{{ item }}</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  `
})
export class SkillsComponent {
  private skills = RESUME_DATA.skills;

  skillGroups: SkillGroup[] = [
    {
      title: 'Back-end',
      icon: 'code-2',
      accent: 'bg-primary-500/15 text-primary-300',
      items: this.skills.backend
    },
    {
      title: 'Front-end',
      icon: 'monitor-smartphone',
      accent: 'bg-secondary-500/15 text-secondary-300',
      items: this.skills.frontend
    },
    {
      title: 'Dados & Cloud',
      icon: 'database',
      accent: 'bg-sky-500/15 text-sky-300',
      items: this.skills.databasesAndCloud
    },
    {
      title: 'Ferramentas',
      icon: 'wrench',
      accent: 'bg-amber-500/15 text-amber-300',
      items: this.skills.tools
    },
    {
      title: 'Idiomas',
      icon: 'languages',
      accent: 'bg-rose-500/15 text-rose-300',
      items: this.skills.languages
    }
  ];

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
      'Git': 'devicon-git-plain'
    };

    return iconMap[techName] || 'devicon-devicon-plain';
  }
}
