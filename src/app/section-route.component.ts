import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  template: `
    <main class="temporary-page">
      <div class="temporary-page__content">
        <p class="eyebrow">ROUTE PAGE</p>
        <h1>{{ title }}</h1>
        <p>This standalone page is ready for the {{ title }} content.</p>
      </div>
    </main>
  `,
  styles: [`.temporary-page { min-height: 70vh; padding: 90px 24px; background: var(--warm-beige); } .temporary-page__content { max-width: 900px; margin: 0 auto; } .temporary-page h1 { margin: 24px 0 16px; color: var(--deep-blue); font-size: clamp(48px, 8vw, 96px); } .temporary-page p:last-child { color: var(--muted); font-size: 20px; }`],
})
export class SectionRouteComponent {
  private readonly route = inject(ActivatedRoute);
  protected readonly title = this.route.snapshot.data['title'] as string;
}