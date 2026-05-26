import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RESUME_DATA } from '../../core/resume.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <section class="min-h-[calc(100vh-4rem)] pt-12 pb-14 grid lg:grid-cols-[1.08fr_0.92fr] gap-10 lg:gap-16 items-center">
      <div>
        <div class="mb-5 flex items-center justify-between gap-4 lg:block">
          <div>
            <p class="text-secondary-400 font-semibold mb-2 lg:mb-4 tracking-wider uppercase text-sm">Olá, eu sou</p>
            <h1 class="text-3xl min-[380px]:text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 tracking-tight">
              {{ data.name }}
            </h1>
          </div>

          <figure class="lg:hidden relative h-24 w-24 min-[380px]:h-28 min-[380px]:w-28 sm:h-36 sm:w-36 flex-shrink-0 overflow-hidden rounded-full border border-primary-400/50 bg-slate-900 p-1 shadow-2xl shadow-primary-950/30">
            <img
              [src]="data.profileImage"
              [alt]="'Foto profissional de ' + data.name"
              class="h-full w-full rounded-full object-cover object-center"
            >
          </figure>
        </div>

        <p class="text-xl md:text-2xl text-primary-300 font-semibold mb-6">
          {{ data.title }}
        </p>
        <p class="max-w-2xl text-base md:text-lg text-slate-400 mb-8 leading-relaxed">
          {{ data.summary }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 max-w-2xl">
          <div class="glass-card p-4">
            <span class="text-sm text-slate-500">Foco</span>
            <p class="mt-1 text-slate-200 font-semibold">Full Stack Web</p>
          </div>
          <div class="glass-card p-4">
            <span class="text-sm text-slate-500">Stack principal</span>
            <p class="mt-1 text-slate-200 font-semibold">.NET + Angular</p>
          </div>
          <div class="glass-card p-4">
            <span class="text-sm text-slate-500">Localização</span>
            <p class="mt-1 text-slate-200 font-semibold">Catanduva, SP</p>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-4">
          <a href="#contact" class="px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-colors shadow-lg shadow-primary-500/20 inline-flex items-center gap-2">
            <lucide-icon name="mail" [size]="20"></lucide-icon> Entre em contato
          </a>
          <a [href]="data.github" target="_blank" rel="noreferrer" class="px-6 py-3 rounded-lg border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold transition-colors inline-flex items-center gap-2">
            <lucide-icon name="github" [size]="20"></lucide-icon> GitHub
          </a>
          <a [href]="data.linkedin" target="_blank" rel="noreferrer" class="px-6 py-3 rounded-lg border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold transition-colors inline-flex items-center gap-2">
            <lucide-icon name="linkedin" [size]="20"></lucide-icon> LinkedIn
          </a>
        </div>
      </div>

      <div class="hidden lg:flex justify-end">
        <div class="relative h-[24rem] w-[24rem]">
          <div class="absolute inset-3 rounded-full border border-secondary-400/30"></div>
          <figure class="relative h-full w-full overflow-hidden rounded-full border border-primary-400/55 bg-slate-900 p-1 shadow-2xl shadow-slate-950/70">
            <!-- Para substituir a foto no futuro, troque o arquivo indicado em RESUME_DATA.profileImage. -->
            <img
              [src]="data.profileImage"
              [alt]="'Foto profissional de ' + data.name"
              class="h-full w-full rounded-full object-cover object-center"
            >
          </figure>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  data = RESUME_DATA;
}
