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
    path: 'speaking',
    loadComponent: () =>
      import('./section-route.component').then((module) => module.SectionRouteComponent),
    data: { title: 'Speaking' },
  },
  {
    path: 'downloads',
    loadComponent: () =>
      import('./section-route.component').then((module) => module.SectionRouteComponent),
    data: { title: 'Downloads' },
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./section-route.component').then((module) => module.SectionRouteComponent),
    data: { title: 'Contact' },
  },
  { path: 'essays', redirectTo: 'writings', pathMatch: 'full' },
  { path: 'essays/:episode', redirectTo: 'writings/:episode', pathMatch: 'full' },
];
