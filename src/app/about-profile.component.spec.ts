import { TestBed } from '@angular/core/testing';
import { AboutProfileComponent } from './about-profile.component';

describe('AboutProfileComponent', () => {
  it('shows the draft about content with the portrait and no caption', async () => {
    await TestBed.configureTestingModule({
      imports: [AboutProfileComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(AboutProfileComponent);
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('.about-portrait img')?.getAttribute('src')).toBe(
      'SundarSingh.jfif',
    );
    expect(element.querySelector('figcaption')).toBeNull();
    expect(element.querySelector('h1')?.textContent).toContain(
      "An operator's perspective on mining, technology and real-world value.",
    );
    expect(element.textContent).toContain('Credentials');
    expect(element.textContent).toContain('Career at a glance');
    expect(element.textContent).toContain('Contributor to NITI Aayog');
  });
});
