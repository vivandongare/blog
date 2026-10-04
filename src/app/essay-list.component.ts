import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Essay } from './app';

@Component({
  selector: 'app-essay-list',
  imports: [CommonModule, RouterLink],
  template: `
    <main class="essay-page">
      <div class="container">
        <a class="back-link" routerLink="/">&#8592; Back home</a>
        <header class="essay-page-header">
          <p class="eyebrow">WRITINGS</p>
          <h1>All essays</h1>
          <p>Elemental perspectives on minerals, metals, technology, and strategic resource systems.</p>
        </header>
        <div class="essay-list">
          @for (essay of essays(); track essay.episodeNumber) {
            <a class="essay-list-item" [routerLink]="['/writings', essay.episodeNumber]">
              <span>EP{{ essay.episodeNumber }}</span>
              <h2>{{ essay.header }}</h2>
              <time [dateTime]="essay.date">{{ essay.date | date: 'MMM d, y' }}</time>
              <strong>Read essay &#8599;</strong>
            </a>
          }
        </div>
      </div>
    </main>
  `,
  styles: [`.essay-page { min-height: 70vh; padding: 52px 0 100px; background: #f7f5f0; } .back-link { color: #1a1a2e; font-weight: 600; text-decoration: none; } .essay-page-header { max-width: 680px; margin: 70px 0 48px; } .essay-page-header h1 { margin: 10px 0 14px; font-size: clamp(42px, 7vw, 76px); color: #1a1a2e; } .essay-page-header > p:last-child { color: #555; font-size: 18px; line-height: 1.7; } .essay-list { border-top: 1px solid #d8d4cc; } .essay-list-item { display: grid; grid-template-columns: 80px 1fr auto; gap: 18px 30px; align-items: center; padding: 28px 0; border-bottom: 1px solid #d8d4cc; color: #1a1a2e; text-decoration: none; } .essay-list-item > span { font-size: 12px; letter-spacing: 1px; color: #8b5e34; } .essay-list-item h2 { margin: 0; font-size: clamp(21px, 3vw, 32px); } .essay-list-item time { grid-column: 2; color: #777; font-size: 14px; } .essay-list-item strong { grid-column: 3; grid-row: 1 / span 2; font-size: 13px; } .essay-list-item:hover h2 { color: #8b5e34; } @media (max-width: 600px) { .essay-list-item { grid-template-columns: 58px 1fr; gap: 10px 16px; } .essay-list-item time { grid-column: 2; } .essay-list-item strong { grid-column: 2; grid-row: auto; } }`],
})
export class EssayListComponent {
  private readonly http = inject(HttpClient);
  protected readonly essays = signal<Essay[]>([]);

  constructor() {
    this.http.get<Essay[]>('/essays.json').subscribe((essays) => {
      this.essays.set([...essays].sort((first, second) => second.episodeNumber - first.episodeNumber));
    });
  }
}
