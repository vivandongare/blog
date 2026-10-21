import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
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
            <h1>All essays</h1>
            <p>
              Elemental perspectives on minerals, metals, technology, and strategic resource
              systems.
            </p>
          </header>
          <div class="essay-controls">
            <div class="theme-filter">
              <label for="theme-filter">Filter by theme</label>
              <select id="theme-filter" #themeFilter (change)="selectedTheme.set(themeFilter.value)">
                <option value="">All themes</option>
                @for (theme of themes(); track theme) {
                  <option [value]="theme">{{ theme }}</option>
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
      .essay-page-header h1 {
        margin: 10px 0 14px;
        font-size: clamp(42px, 7vw, 76px);
        color: var(--deep-blue);
      }
      .essay-page-header > p:last-child {
        color: #555;
        font-size: 18px;
        line-height: 1.7;
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
        border: 1px solid rgba(11, 31, 58, 0.35);
        border-radius: 4px;
        color: var(--deep-blue);
        background: #fff;
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
        border: 1px solid rgba(11, 31, 58, 0.35);
        border-radius: 4px;
        color: var(--deep-blue);
        background: #fff;
        font: inherit;
      }
      .essay-list {
        border-top: 1px solid rgba(11, 31, 58, 0.2);
      }
      .no-results {
        color: #555;
      }
      .essay-list-item {
        display: grid;
        grid-template-columns: 80px 1fr auto;
        gap: 18px 30px;
        align-items: center;
        padding: 28px 0;
        border-bottom: 1px solid rgba(11, 31, 58, 0.2);
        color: var(--deep-blue);
        text-decoration: none;
      }
      .essay-list-item > span {
        font-size: 12px;
        letter-spacing: 1px;
        color: var(--deep-blue);
      }
      .essay-list-item h2 {
        margin: 0;
        font-size: clamp(21px, 3vw, 32px);
      }
      .essay-list-item time {
        grid-column: 2;
        color: #777;
        font-size: 14px;
      }
      .essay-list-item strong {
        grid-column: 3;
        grid-row: 1 / span 2;
        font-size: 13px;
      }
      .essay-list-item:hover h2 {
        color: var(--deep-blue);
      }
      @media (max-width: 600px) {
        .essay-controls {
          align-items: stretch;
          flex-direction: column;
          gap: 16px;
        }
        .essay-list-item {
          grid-template-columns: 58px 1fr;
          gap: 10px 16px;
        }
        .essay-list-item time {
          grid-column: 2;
        }
        .essay-list-item strong {
          grid-column: 2;
          grid-row: auto;
        }
      }
    `,
  ],
})
export class EssayListComponent {
  protected readonly essays = toSignal(inject(EssayService).essays, { initialValue: [] });
  protected readonly selectedTheme = signal('');
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
}
