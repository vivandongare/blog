import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Essay } from './app';

@Component({
  selector: 'app-essay-detail',
  imports: [CommonModule, RouterLink],
  template: `
    <main class="essay-page">
      <div class="container">
        <a class="back-link" routerLink="/essays">&#8592; All essays</a>
        @if (essay(); as currentEssay) {
          <article class="essay-detail">
            <p class="eyebrow">EP{{ currentEssay.episodeNumber }} / ELEMENTAL PERSPECTIVES</p>
            @if (currentEssay.coverImage) {
              <img class="essay-cover" [src]="currentEssay.coverImage" [alt]="currentEssay.header" />
            }
            <h1>{{ currentEssay.header }}</h1>
            <time [dateTime]="currentEssay.date">{{ currentEssay.date | date: 'MMMM d, y' }}</time>
            <div class="essay-content" [innerHTML]="currentEssay.html"></div>
          </article>
        } @else {
          <p class="essay-loading">Loading essay...</p>
        }
      </div>
    </main>
  `,
  styles: [`.essay-page { min-height: 70vh; padding: 52px 0 100px; background: #f7f5f0; } .back-link { color: #1a1a2e; font-weight: 600; text-decoration: none; } .essay-detail { max-width: 780px; margin: 70px auto 0; } .essay-detail h1 { margin: 12px 0 16px; color: #1a1a2e; font-size: clamp(40px, 7vw, 72px); line-height: 1.05; } .essay-detail > time { color: #8b5e34; font-size: 14px; } .essay-cover { display: block; width: 100%; height: auto; margin: 28px 0 20px; border-radius: 18px; box-shadow: 0 20px 45px rgba(22, 26, 36, 0.12); } .essay-content { margin-top: 58px; color: #3e3b37; font-size: 19px; line-height: 1.85; } .essay-content h2 { margin-top: 42px; color: #1a1a2e; font-size: 30px; line-height: 1.2; } .essay-inline-image { display: block; width: 100%; height: auto; margin: 42px 0; border-radius: 12px; } .essay-loading { margin-top: 80px; color: #666; }`],
})
export class EssayDetailComponent {
  private readonly http = inject(HttpClient);
  private readonly route = inject(ActivatedRoute);
  protected readonly essay = signal<Essay | undefined>(undefined);

  constructor() {
    const episode = Number(this.route.snapshot.paramMap.get('episode'));
    this.http.get<Essay[]>('/essays.json').subscribe((essays) => {
      this.essay.set(essays.find((item) => item.episodeNumber === episode));
    });
  }
}
