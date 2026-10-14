import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { App } from './app';
import { EssayService } from './essay.service';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([]),
        {
          provide: EssayService,
          useValue: {
            essays: of([
              {
                date: '2026-08-14',
                episodeNumber: 30,
                header: 'Latest essay',
                html: '',
              },
            ]),
          },
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the home page title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Sunder Singh');
    expect(compiled.querySelector('.featured-card h3')?.textContent).toContain('Latest essay');
    expect(compiled.querySelector('.featured-meta')?.textContent).toContain('EP30');
    expect(compiled.querySelector('.featured-card a')?.getAttribute('href')).toBe('/writings/30');
  });
});
