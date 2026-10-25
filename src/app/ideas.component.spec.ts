import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { IdeasComponent } from './ideas.component';

describe('IdeasComponent', () => {
  it('renders the ideas in the draft with a writings link', async () => {
    await TestBed.configureTestingModule({
      imports: [IdeasComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(IdeasComponent);
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('#constraint-heading')?.textContent).toContain(
      'Constraint Advantage',
    );
    expect(element.querySelectorAll('.framework-card')).toHaveLength(3);
    expect(element.querySelector('#metals-heading')?.textContent).toContain('Immortalising Metals');
    expect(element.querySelectorAll('.series-list li')).toHaveLength(3);
    expect(element.querySelector('.ideas-more a')?.getAttribute('href')).toBe('/writings');
  });
});
