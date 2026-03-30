import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroComponent } from './components/hero/hero.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    HeroComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent
  ],
  template: `
    <app-navigation></app-navigation>
    
    <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 font-sans">
      <app-hero></app-hero>
      <app-experience></app-experience>
      <app-education></app-education>
      <app-skills></app-skills>
      <app-contact></app-contact>
    </main>
  `
})
export class AppComponent {
  title = 'portfolio-gustavo';
}
