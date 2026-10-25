import { TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  it('shows the draft contact details without a form', async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(ContactComponent);
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h1')?.textContent).toContain('What decision are you weighing?');
    expect(element.querySelector('form')).toBeNull();
    expect(element.querySelector('a[href="mailto:singhrsundar@gmail.com"]')).toBeTruthy();
    expect(element.textContent).toContain('Bengaluru, India');
    expect(element.textContent).toContain('I will sign an NDA');
  });
});
