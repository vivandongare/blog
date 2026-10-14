import { Routes } from '@angular/router';
import { AboutProfileComponent } from './about-profile.component';
import { DiligenceComponent } from './diligence.component';
import { EssayDetailComponent } from './essay-detail.component';
import { EssayListComponent } from './essay-list.component';
import { SectionRouteComponent } from './section-route.component';

export const routes: Routes = [
  { path: 'about', component: AboutProfileComponent },
  { path: 'writings', component: EssayListComponent },
  { path: 'writings/:episode', component: EssayDetailComponent },
  { path: 'diligence', component: DiligenceComponent },
  { path: 'speaking', component: SectionRouteComponent, data: { title: 'Speaking' } },
  { path: 'downloads', component: SectionRouteComponent, data: { title: 'Downloads' } },
  { path: 'contact', component: SectionRouteComponent, data: { title: 'Contact' } },
  { path: 'essays', redirectTo: 'writings', pathMatch: 'full' },
  { path: 'essays/:episode', redirectTo: 'writings/:episode', pathMatch: 'full' },
]