import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  BadgeCheck,
  BriefcaseBusiness,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  MonitorSmartphone,
  Wrench,
  X,
  LucideAngularModule
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick({
      BadgeCheck,
      BriefcaseBusiness,
      Calendar,
      ChevronLeft,
      ChevronRight,
      Code2,
      Database,
      ExternalLink,
      Github,
      GraduationCap,
      Languages,
      Linkedin,
      Mail,
      MapPin,
      MonitorSmartphone,
      Wrench,
      X
    }))
  ]
};
