import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <main class="contact-page">
      <div class="container">
        <header class="section-header">
          <h1>CONTACT</h1>
          <p>Let's connect and explore opportunities for collaboration</p>
        </header>
        <div class="contact-content">
          <form class="contact-form" (ngSubmit)="sendMessage(name.value)" #contactForm="ngForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input id="name" name="name" #name required ngModel />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input id="email" name="email" type="email" required ngModel />
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input id="subject" name="subject" required ngModel />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="6" required ngModel></textarea>
            </div>
            <button class="btn btn-primary" type="submit" [disabled]="contactForm.invalid">
              Send Message
            </button>
          </form>
          <aside class="contact-info">
            <h2>Other Ways to Connect</h2>
            <p>
              <strong>Email:</strong>
              <a href="mailto:contact@example.com">contact&#64;example.com</a>
            </p>
            <p>
              <strong>LinkedIn:</strong>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/sundarsingh
              </a>
            </p>
          </aside>
        </div>
      </div>
      @if (notice()) {
        <div class="notice" role="status">{{ notice() }}</div>
      }
    </main>
  `,
  styles: [
    `
      .contact-page {
        min-height: 70vh;
        padding: 80px 0;
        background: var(--warm-beige);
      }

      .section-header h1 {
        margin: 0 0 15px;
        color: var(--deep-blue);
        font-size: 24px;
        letter-spacing: 3px;
      }

      .contact-form,
      .contact-info {
        background: #fff;
      }
    `,
  ],
})
export class ContactComponent {
  protected readonly notice = signal('');

  protected sendMessage(name: string): void {
    this.notice.set(`Thanks, ${name}. Your message has been received.`);
  }
}
