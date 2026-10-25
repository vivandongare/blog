import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { EssayListComponent } from './essay-list.component';
import { EssayService } from './essay.service';

describe('EssayListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EssayListComponent],
      providers: [
        provideRouter([]),
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

  it('shows publication details, recent articles, and the complete filterable archive', async () => {
    const fixture = TestBed.createComponent(EssayListComponent);
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h1')?.textContent).toContain('Elemental Perspectives');
    expect(element.textContent).toContain('Where metals, technology and strategy meet.');
    expect(element.textContent).toContain('over 700 subscribers');
    expect(element.querySelectorAll('.latest-article-card')).toHaveLength(3);
    expect(element.querySelector('#theme-filter')).toBeTruthy();
    expect(element.querySelector('#essay-search')).toBeTruthy();
    expect(element.querySelectorAll('.essay-list-item')).toHaveLength(4);
  });
});
