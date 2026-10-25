import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the draft homepage content and links', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.home-hero h1')?.textContent).toContain('Dr. Sundar Singh');
    expect(compiled.querySelector('.home-hero-tagline')?.textContent).toContain(
      'Beyond the story. Into the reality.',
    );
    expect(compiled.querySelectorAll('.home-practice-card')).toHaveLength(3);
    expect(compiled.querySelector('#home-operator-heading')?.textContent).toContain(
      "An operator's perspective",
    );
    expect(compiled.querySelector('.home-closing a')?.getAttribute('href')).toBe('/contact');
  });
});
