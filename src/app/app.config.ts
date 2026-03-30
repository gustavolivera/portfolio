import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { LucideAngularModule, Github, Linkedin, Mail, Download, ExternalLink, Calendar, MapPin, Briefcase } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick({ Github, Linkedin, Mail, Download, ExternalLink, Calendar, MapPin, Briefcase }))
  ]
};
