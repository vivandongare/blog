import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EssayService } from './essay.service';

@Component({
  selector: 'app-essay-list',
  imports: [CommonModule, RouterLink],
  template: `
    <main class="essay-page">
      <div class="container">
        <div class="essay-content">
          <header class="essay-page-header">
            <p class="eyebrow">WRITINGS</p>
            <h1>Elemental Perspectives</h1>
            <p class="essay-tagline">Where metals, technology and strategy meet.</p>
            <p>
              A publication on mining, metals, technology and capital, examining the assumptions,
              industrial realities and long-term shifts that determine where value sits across the
              metals and materials chain. Written for mining and metals executives, investors,
              founders and policymakers, and read by over 700 subscribers.
            </p>
            <div class="featured-series" aria-label="Featured series">
              <strong>Featured series</strong>
              <a
                routerLink="/writings"
                [queryParams]="{ view: 'all', theme: 'Immortalising Metals' }"
              >
                Immortalising Metals
              </a>
              <span aria-hidden="true">·</span>
              <a
                routerLink="/writings"
                [queryParams]="{ view: 'all', theme: 'Constraint Advantage' }"
              >
                Constraint Advantage
              </a>
            </div>
          </header>
          <section class="latest-articles" aria-labelledby="articles-heading">
            <div class="latest-articles-heading">
              @if (showAllEssays()) {
                <h2 id="articles-heading">Articles</h2>
              } @else {
                <h2 id="articles-heading">Latest articles</h2>
                <a routerLink="/writings" [queryParams]="{ view: 'all' }">
                  View all essays <span aria-hidden="true">↗</span>
                </a>
              }
            </div>
            @if (showAllEssays()) {
              <div class="essay-controls">
                <div class="theme-filter">
                  <label for="theme-filter">Filter by theme</label>
                  <select
                    id="theme-filter"
                    #themeFilter
                    (change)="setTheme(themeFilter.value)"
                  >
                    <option value="" [selected]="!selectedTheme()">All themes</option>
                    @for (theme of themes(); track theme) {
                      <option [value]="theme" [selected]="theme === selectedTheme()">
                        {{ theme }}
                      </option>
                    }
                  </select>
                </div>
                <div class="essay-search">
                  <label for="essay-search">Search essays</label>
                  <input
                    id="essay-search"
                    type="search"
                    placeholder="Search titles and essay content"
                    #searchInput
                    (input)="searchQuery.set(searchInput.value)"
                  />
                </div>
              </div>
              <div class="essay-list">
                @for (essay of filteredEssays(); track essay.episodeNumber) {
                  <a class="essay-list-item" [routerLink]="['/writings', essay.episodeNumber]">
                    <span>EP{{ essay.episodeNumber }}</span>
                    <h2>{{ essay.header }}</h2>
                    <time [dateTime]="essay.date">{{ essay.date | date: 'MMM d, y' }}</time>
                    <strong>Read essay &#8599;</strong>
                  </a>
                } @empty {
                  <p class="no-results">No essays match your filters.</p>
                }
              </div>
            } @else {
              <div class="latest-articles-grid">
                @for (essay of latestEssays(); track essay.episodeNumber) {
                  <a class="latest-article-card" [routerLink]="['/writings', essay.episodeNumber]">
                    <span>EP{{ essay.episodeNumber }}</span>
                    <h3>{{ essay.header }}</h3>
                    <time [dateTime]="essay.date">{{ essay.date | date: 'MMM d, y' }}</time>
                  </a>
                } @empty {
                    <p class="no-results">No articles are available yet.</p>
                  }
                </div>
            }
          </section>
        </div>
      </div>
    </main>
  `,
  styles: [
    `
      .essay-page {
        min-height: 70vh;
        padding: 52px 0 100px;
        background: var(--warm-beige);
      }
      .essay-content {
        max-width: 900px;
        margin: 0 auto;
      }
      .essay-page-header {
        margin: 70px 0 48px;
      }
      .essay-page-header .eyebrow {
        margin-bottom: 10px;
        color: var(--accent);
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 2px;
      }
      .essay-page-header h1 {
        margin: 10px 0 8px;
        font-size: clamp(42px, 7vw, 76px);
        color: var(--deep-blue);
      }
      .essay-page-header > p:not(.eyebrow) {
        color: var(--muted);
        font-size: 18px;
        line-height: 1.7;
      }
      .essay-page-header .essay-tagline {
        margin-bottom: 18px;
        color: var(--deep-blue);
        font-size: 23px;
        font-weight: 600;
      }
      .featured-series {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        margin-top: 24px;
        color: var(--muted);
      }
      .featured-series strong {
        margin-right: 4px;
        padding: 6px 10px;
        border-radius: 4px;
        background: var(--surface);
        color: var(--deep-blue);
      }
      .featured-series a,
      .subscribe-link,
      .latest-articles-heading a {
        color: var(--deep-blue);
        font-weight: 700;
        text-decoration: none;
      }
      .featured-series a:hover,
      .subscribe-link:hover,
      .latest-articles-heading a:hover {
        color: var(--accent);
      }
      .subscribe-link {
        display: inline-block;
        margin-top: 20px;
      }
      .latest-articles {
        margin-bottom: 54px;
      }
      .latest-articles-heading {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 18px;
      }
      .latest-articles-heading h2 {
        margin: 0;
        color: var(--deep-blue);
        font-size: 28px;
      }
      .latest-articles-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
      }
      .latest-article-card {
        display: flex;
        min-height: 190px;
        flex-direction: column;
        align-items: flex-start;
        padding: 22px;
        border-top: 3px solid var(--accent);
        border-radius: 5px;
        color: var(--deep-blue);
        background: var(--surface);
        text-decoration: none;
      }
      .latest-article-card > span {
        color: var(--muted);
        font-size: 12px;
        letter-spacing: 1px;
      }
      .latest-article-card h3 {
        margin: 14px 0;
        font-size: 20px;
        line-height: 1.3;
      }
      .latest-article-card time {
        margin-top: auto;
        color: var(--muted);
        font-size: 14px;
      }
      .latest-article-card:hover h3 {
        color: var(--accent);
      }
      .essay-controls {
        display: flex;
        align-items: end;
        gap: 24px;
        margin-bottom: 28px;
      }
      .theme-filter {
        display: grid;
        flex: 0 0 auto;
        gap: 8px;
      }
      .theme-filter label {
        color: var(--deep-blue);
        font-weight: 600;
      }
      .theme-filter select {
        min-width: 160px;
        padding: 10px 12px;
        border: 1px solid var(--border);
        border-radius: 4px;
        color: var(--deep-blue);
        background: var(--surface);
        font: inherit;
      }
      .essay-search {
        display: grid;
        flex: 1;
        gap: 8px;
      }
      .essay-search label {
        color: var(--deep-blue);
        font-weight: 600;
      }
      .essay-search input {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid var(--border);
        border-radius: 4px;
        color: var(--deep-blue);
        background: var(--surface);
        font: inherit;
      }
      .essay-list {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
      }
      .no-results {
        color: var(--muted);
      }
      .essay-list-item {
        display: flex;
        min-height: 210px;
        flex-direction: column;
        align-items: flex-start;
        padding: 22px;
        border-top: 3px solid var(--accent);
        border-radius: 5px;
        color: var(--deep-blue);
        background: var(--surface);
        text-decoration: none;
      }
      .essay-list-item > span {
        color: var(--muted);
        font-size: 12px;
        letter-spacing: 1px;
      }
      .essay-list-item h2 {
        margin: 14px 0;
        font-size: 20px;
        line-height: 1.3;
      }
      .essay-list-item time {
        margin-top: auto;
        color: var(--muted);
        font-size: 14px;
      }
      .essay-list-item strong {
        margin-top: 12px;
        font-size: 13px;
      }
      .essay-list-item:hover h2 {
        color: var(--accent);
      }
      @media (max-width: 600px) {
        .latest-articles-grid {
          grid-template-columns: 1fr;
        }
        .essay-list {
          grid-template-columns: 1fr;
        }
        .latest-articles-heading {
          align-items: flex-start;
          flex-direction: column;
        }
        .essay-controls {
          align-items: stretch;
          flex-direction: column;
          gap: 16px;
        }
      }
    `,
  ],
})
export class EssayListComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  protected readonly queryParams = toSignal(this.route.queryParamMap, {
    initialValue: this.route.snapshot.queryParamMap,
  });
  protected readonly showAllEssays = computed(() => this.queryParams().get('view') === 'all');
  protected readonly essays = toSignal(inject(EssayService).essays, { initialValue: [] });
  protected readonly latestEssays = computed(() => this.essays().slice(0, 3));
  protected readonly selectedTheme = computed(() => this.queryParams().get('theme') ?? '');
  protected readonly searchQuery = signal('');
  protected readonly themes = computed(() =>
    [
      ...new Set(
        this.essays()
          .map((essay) => essay.theme)
          .filter((theme): theme is string => !!theme),
      ),
    ].sort(),
  );
  protected readonly filteredEssays = computed(() => {
    const theme = this.selectedTheme();
    const query = this.searchQuery().trim().toLowerCase();
    return this.essays().filter((essay) => {
      const matchesTheme = !theme || essay.theme === theme;
      const matchesSearch =
        !query ||
        `${essay.header} ${essay.html}`.toLowerCase().includes(query);
      return matchesTheme && matchesSearch;
    });
  });

  protected setTheme(theme: string): void {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { theme: theme || null },
      queryParamsHandling: 'merge',
    });
  }
}
