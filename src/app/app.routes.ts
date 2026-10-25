import { Routes } from '@angular/router';
import { AboutProfileComponent } from './about-profile.component';

export const routes: Routes = [
  { path: 'about', component: AboutProfileComponent },
  {
    path: 'writings',
    loadComponent: () =>
      import('./essay-list.component').then((module) => module.EssayListComponent),
  },
  {
    path: 'writings/:episode',
    loadComponent: () =>
      import('./essay-detail.component').then((module) => module.EssayDetailComponent),
  },
  {
    path: 'diligence',
    loadComponent: () =>
      import('./diligence.component').then((module) => module.DiligenceComponent),
  },
  {
    path: 'ideas',
    loadComponent: () => import('./ideas.component').then((module) => module.IdeasComponent),
  },
  {
    path: 'speaking',
    loadComponent: () => import('./speaking.component').then((module) => module.SpeakingComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact.component').then((module) => module.ContactComponent),
  },
  { path: 'essays', redirectTo: 'writings', pathMatch: 'full' },
  { path: 'essays/:episode', redirectTo: 'writings/:episode', pathMatch: 'full' },
];
