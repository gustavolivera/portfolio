import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { ProjectEntry, RESUME_DATA } from '../../core/resume.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="projects" class="py-14 md:py-16">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
        <div>
          <p class="text-secondary-400 font-semibold tracking-wider uppercase text-sm mb-3">Portfólio</p>
          <h3 class="text-3xl md:text-4xl font-bold text-slate-100">Projetos</h3>
        </div>
        <p class="max-w-xl text-slate-400 leading-relaxed">
          Projetos reais e estudos práticos com foco em aplicações web completas, arquitetura de backend e interfaces administrativas.
        </p>
      </div>

      <div class="space-y-8">
        <article *ngFor="let project of projects; let projectIndex = index" class="glass-card overflow-hidden">
          <div class="grid grid-cols-1 xl:grid-cols-[1.25fr_0.75fr] gap-0">
            <div class="bg-slate-950/70 border-b xl:border-b-0 xl:border-r border-slate-800/70 p-3 sm:p-4">
              <div class="relative overflow-hidden rounded-lg border border-slate-800 bg-slate-100">
                <button
                  type="button"
                  (click)="openLightbox(projectIndex, activeImageIndexes[projectIndex])"
                  class="block w-full cursor-zoom-in"
                  aria-label="Expandir imagem do projeto"
                >
                  <img
                    [src]="getCurrentImage(project, projectIndex).src"
                    [alt]="getCurrentImage(project, projectIndex).alt"
                    class="aspect-[16/9] w-full object-contain"
                  >
                </button>

                <div *ngIf="project.images.length > 1" class="absolute inset-x-3 top-1/2 -translate-y-1/2 flex items-center justify-between">
                  <button type="button" (click)="previousImage(projectIndex, project.images.length, $event)" class="h-10 w-10 rounded-full border border-slate-700 bg-slate-950/80 text-slate-100 hover:bg-slate-900 transition-colors flex items-center justify-center" aria-label="Imagem anterior">
                    <lucide-icon name="chevron-left" [size]="20"></lucide-icon>
                  </button>
                  <button type="button" (click)="nextImage(projectIndex, project.images.length, $event)" class="h-10 w-10 rounded-full border border-slate-700 bg-slate-950/80 text-slate-100 hover:bg-slate-900 transition-colors flex items-center justify-center" aria-label="Próxima imagem">
                    <lucide-icon name="chevron-right" [size]="20"></lucide-icon>
                  </button>
                </div>
              </div>

              <div *ngIf="project.images.length > 1" class="mt-4 grid grid-cols-3 gap-3">
                <button
                  *ngFor="let image of project.images; let imageIndex = index"
                  type="button"
                  (click)="setImage(projectIndex, imageIndex)"
                  (dblclick)="openLightbox(projectIndex, imageIndex)"
                  [class]="getThumbnailClass(projectIndex, imageIndex)"
                  [attr.aria-label]="'Selecionar imagem ' + (imageIndex + 1)"
                >
                  <img [src]="image.src" [alt]="image.alt" class="h-full w-full object-cover">
                </button>
              </div>
            </div>

            <div class="p-6 md:p-8 flex flex-col">
              <div class="w-12 h-12 rounded-lg bg-primary-500/15 text-primary-300 flex items-center justify-center mb-6">
                <lucide-icon name="briefcase-business" [size]="24"></lucide-icon>
              </div>

              <h4 class="text-2xl font-bold text-slate-100 mb-4">{{ project.name }}</h4>
              <p class="text-slate-400 leading-relaxed mb-6">{{ project.description }}</p>

              <div class="flex flex-wrap gap-2 mb-8">
                <span *ngFor="let tech of project.technologies" class="rounded-full bg-slate-950/60 border border-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                  {{ tech }}
                </span>
              </div>

              <a [href]="project.github" target="_blank" rel="noreferrer" class="mt-auto inline-flex items-center justify-center gap-2 rounded-lg border border-primary-500/50 px-4 py-3 text-primary-300 font-semibold hover:bg-primary-500/10 transition-colors">
                <lucide-icon name="github" [size]="18"></lucide-icon>
                Visualizar repositório
                <lucide-icon name="external-link" [size]="16"></lucide-icon>
              </a>
            </div>
          </div>
        </article>
      </div>

      <div *ngIf="lightboxProjectIndex !== null" class="fixed inset-0 z-[80] bg-slate-950/95 backdrop-blur-sm p-4 sm:p-6 lg:p-8 flex items-center justify-center" role="dialog" aria-modal="true" aria-label="Imagem expandida do projeto">
        <button type="button" (click)="closeLightbox()" class="absolute inset-0 cursor-zoom-out" aria-label="Fechar imagem expandida"></button>

        <div class="relative z-10 w-full max-w-7xl">
          <div class="mb-4 flex items-center justify-between gap-4">
            <div>
              <p class="text-sm text-secondary-300 font-semibold">Imagem {{ lightboxImageIndex + 1 }} de {{ getLightboxProject().images.length }}</p>
              <h4 class="text-lg md:text-xl font-bold text-slate-100">{{ getLightboxProject().name }}</h4>
            </div>
            <button type="button" (click)="closeLightbox()" class="h-11 w-11 rounded-full border border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800 transition-colors flex items-center justify-center" aria-label="Fechar">
              <lucide-icon name="x" [size]="22"></lucide-icon>
            </button>
          </div>

          <div class="relative overflow-hidden rounded-lg border border-slate-700 bg-slate-100 shadow-2xl shadow-slate-950">
            <img
              [src]="getLightboxImage().src"
              [alt]="getLightboxImage().alt"
              class="max-h-[78vh] w-full object-contain"
            >

            <div *ngIf="getLightboxProject().images.length > 1" class="absolute inset-x-3 top-1/2 -translate-y-1/2 flex items-center justify-between">
              <button type="button" (click)="previousLightboxImage()" class="h-11 w-11 rounded-full border border-slate-700 bg-slate-950/80 text-slate-100 hover:bg-slate-900 transition-colors flex items-center justify-center" aria-label="Imagem anterior">
                <lucide-icon name="chevron-left" [size]="22"></lucide-icon>
              </button>
              <button type="button" (click)="nextLightboxImage()" class="h-11 w-11 rounded-full border border-slate-700 bg-slate-950/80 text-slate-100 hover:bg-slate-900 transition-colors flex items-center justify-center" aria-label="Próxima imagem">
                <lucide-icon name="chevron-right" [size]="22"></lucide-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  projects = RESUME_DATA.projects;
  activeImageIndexes = this.projects.map(() => 0);
  lightboxProjectIndex: number | null = null;
  lightboxImageIndex = 0;

  getCurrentImage(project: ProjectEntry, projectIndex: number): ProjectEntry['images'][number] {
    return project.images[this.activeImageIndexes[projectIndex] ?? 0];
  }

  previousImage(projectIndex: number, totalImages: number, event?: Event): void {
    event?.stopPropagation();
    const currentIndex = this.activeImageIndexes[projectIndex] ?? 0;
    this.activeImageIndexes[projectIndex] = (currentIndex - 1 + totalImages) % totalImages;
  }

  nextImage(projectIndex: number, totalImages: number, event?: Event): void {
    event?.stopPropagation();
    const currentIndex = this.activeImageIndexes[projectIndex] ?? 0;
    this.activeImageIndexes[projectIndex] = (currentIndex + 1) % totalImages;
  }

  setImage(projectIndex: number, imageIndex: number): void {
    this.activeImageIndexes[projectIndex] = imageIndex;
  }

  getThumbnailClass(projectIndex: number, imageIndex: number): string {
    const isActive = (this.activeImageIndexes[projectIndex] ?? 0) === imageIndex;
    const activeClass = 'border-primary-400 opacity-100 ring-2 ring-primary-500/30';
    const inactiveClass = 'border-slate-800 opacity-65 hover:opacity-100';

    return `h-16 sm:h-20 overflow-hidden rounded-md border bg-slate-900 transition ${isActive ? activeClass : inactiveClass}`;
  }

  openLightbox(projectIndex: number, imageIndex: number): void {
    this.lightboxProjectIndex = projectIndex;
    this.lightboxImageIndex = imageIndex;
  }

  closeLightbox(): void {
    this.lightboxProjectIndex = null;
  }

  getLightboxProject(): ProjectEntry {
    return this.projects[this.lightboxProjectIndex ?? 0];
  }

  getLightboxImage(): ProjectEntry['images'][number] {
    return this.getLightboxProject().images[this.lightboxImageIndex];
  }

  previousLightboxImage(): void {
    const totalImages = this.getLightboxProject().images.length;
    this.lightboxImageIndex = (this.lightboxImageIndex - 1 + totalImages) % totalImages;
    this.syncActiveImage();
  }

  nextLightboxImage(): void {
    const totalImages = this.getLightboxProject().images.length;
    this.lightboxImageIndex = (this.lightboxImageIndex + 1) % totalImages;
    this.syncActiveImage();
  }

  private syncActiveImage(): void {
    if (this.lightboxProjectIndex !== null) {
      this.activeImageIndexes[this.lightboxProjectIndex] = this.lightboxImageIndex;
    }
  }
}
