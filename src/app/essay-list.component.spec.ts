import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { of } from 'rxjs';
import { EssayListComponent } from './essay-list.component';
import { EssayService } from './essay.service';

describe('EssayListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EssayListComponent],
      providers: [
        provideRouter([{ path: 'writings', component: EssayListComponent }]),
        {
          provide: EssayService,
          useValue: {
            essays: of([
              { date: '2026-04-04', episodeNumber: 4, header: 'Fourth', html: '', theme: 'Theme 1' },
              { date: '2026-03-03', episodeNumber: 3, header: 'Third', html: '', theme: 'Theme 2' },
              { date: '2026-02-02', episodeNumber: 2, header: 'Second', html: '', theme: 'Theme 1' },
              { date: '2026-01-01', episodeNumber: 1, header: 'First', html: '', theme: 'Theme 2' },
            ]),
          },
        },
      ],
    }).compileComponents();
  });

  it('shows publication details and a latest-articles preview without archive controls', async () => {
    const fixture = TestBed.createComponent(EssayListComponent);
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h1')?.textContent).toContain('Elemental Perspectives');
    expect(element.textContent).toContain('Where metals, technology and strategy meet.');
    expect(element.textContent).toContain('over 700 subscribers');
    expect(element.querySelectorAll('.latest-article-card')).toHaveLength(3);
    expect(element.querySelector('#articles-heading')?.textContent).toBe('Latest articles');
    expect(element.querySelector('#all-essays-heading')).toBeNull();
    expect(element.querySelector('.essay-controls')).toBeNull();
    expect(element.querySelector('#theme-filter')).toBeNull();
    expect(element.querySelectorAll('.essay-list-item')).toHaveLength(0);
    expect(element.querySelector('a[href="/writings?view=all"]')?.textContent).toContain('View all essays');
    const metalsLink = element.querySelector('.featured-series a') as HTMLAnchorElement;
    const metalsUrl = new URL(metalsLink.href);
    expect(metalsUrl.pathname).toBe('/writings');
    expect(metalsUrl.searchParams.get('view')).toBe('all');
    expect(metalsUrl.searchParams.get('theme')).toBe('Immortalising Metals');
    const constraintLink = element.querySelectorAll('.featured-series a')[1] as HTMLAnchorElement;
    const constraintUrl = new URL(constraintLink.href);
    expect(constraintUrl.pathname).toBe('/writings');
    expect(constraintUrl.searchParams.get('view')).toBe('all');
    expect(constraintUrl.searchParams.get('theme')).toBe('Constraint Advantage');
  });

  it('shows all articles and archive controls after selecting View all essays', async () => {
    const fixture = TestBed.createComponent(EssayListComponent);
    await fixture.whenStable();

    await TestBed.inject(Router).navigateByUrl('/writings?view=all');
    await fixture.whenStable();
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('#articles-heading')?.textContent).toBe('Articles');
    expect(element.querySelector('.essay-controls')).toBeTruthy();
    expect(element.querySelector('#theme-filter')).toBeTruthy();
    expect(element.querySelector('#essay-search')).toBeTruthy();
    expect(element.querySelectorAll('.essay-list-item')).toHaveLength(4);
    expect(element.querySelector('.latest-articles-grid')).toBeNull();
    expect(element.querySelector('.latest-articles-heading a')).toBeNull();
  });

  it('selects the requested theme and filters the article list from the URL', async () => {
    const harness = await RouterTestingHarness.create(
      '/writings?view=all&theme=Theme%201',
    );
    const element = harness.routeNativeElement as HTMLElement;
    harness.detectChanges();
    expect((element.querySelector('#theme-filter') as HTMLSelectElement).value).toBe('Theme 1');
    expect(element.querySelectorAll('.essay-list-item')).toHaveLength(2);
    expect(element.textContent).toContain('Fourth');
    expect(element.textContent).toContain('Second');
    expect(element.textContent).not.toContain('Third');
  });

  it('clears the theme from the URL when All themes is selected', async () => {
    const harness = await RouterTestingHarness.create(
      '/writings?view=all&theme=Theme%201',
    );
    const element = harness.routeNativeElement as HTMLElement;
    const select = element.querySelector('#theme-filter') as HTMLSelectElement;
    select.value = '';
    select.dispatchEvent(new Event('change'));
    await harness.fixture.whenStable();
    harness.detectChanges();

    expect(TestBed.inject(Router).url).toBe('/writings?view=all');
    expect((element.querySelector('#theme-filter') as HTMLSelectElement).value).toBe('');
    expect(element.querySelectorAll('.essay-list-item')).toHaveLength(4);

    await harness.navigateByUrl('/writings?view=all&theme=Theme%202');
    harness.detectChanges();
    expect((element.querySelector('#theme-filter') as HTMLSelectElement).value).toBe('Theme 2');
    expect(element.querySelectorAll('.essay-list-item')).toHaveLength(2);
    expect(element.textContent).toContain('Third');
    expect(element.textContent).toContain('First');
  });
});
