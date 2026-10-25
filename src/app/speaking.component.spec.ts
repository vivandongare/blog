import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SpeakingComponent } from './speaking.component';

describe('SpeakingComponent', () => {
  it('renders the draft talks, formats, and enquiry link', async () => {
    await TestBed.configureTestingModule({
      imports: [SpeakingComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(SpeakingComponent);
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h1')?.textContent).toContain(
      'Ideas that sharpen the question',
    );
    expect(element.querySelectorAll('.talk-card')).toHaveLength(3);
    expect(element.textContent).toContain('Constraint Shifting: Why Breakthroughs Stall at Scale');
    expect(element.textContent).toContain('Closed-door workshop');
    expect(element.querySelector('.speaking-enquiries a')?.getAttribute('href')).toBe('/contact');
  });
});
