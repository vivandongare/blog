import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <main class="contact-page">
      <div class="container">
        <header class="contact-intro">
          <p class="eyebrow">CONTACT</p>
          <h1>What decision are you weighing?</h1>
          <p>
            A few lines about the asset, technology or strategic question are enough to begin. If
            the question is outside my remit, I will say so.
          </p>
        </header>
        <div class="contact-content">
          <aside class="contact-info">
            <p class="eyebrow">DIRECT ENQUIRIES</p>
            <h2>Continue the conversation</h2>
            <div class="contact-details-grid">
              <div class="contact-detail">
                <strong>Email</strong>
                <a href="mailto:singhrsundar@gmail.com">singhrsundar&#64;gmail.com</a>
              </div>
              <div class="contact-detail">
                <strong>LinkedIn</strong>
                <a
                  href="https://in.linkedin.com/in/rsundarsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/rsundarsingh
                </a>
              </div>
              <div class="contact-detail">
                <strong>Location</strong>
                <p>
                  Based in Bengaluru, India; working with clients in key mining jurisdictions and
                  mining-technology hubs worldwide.
                </p>
              </div>
            </div>
            <p class="confidentiality-note">
              <strong>Confidentiality:</strong> Client work is confidential; I will sign an NDA
              before you share anything sensitive.
            </p>
          </aside>
        </div>
      </div>
    </main>
  `,
  styles: [
    `
      .contact-page {
        min-height: 70vh;
        padding: 56px 0 90px;
        background: var(--warm-beige);
      }

      .contact-intro {
        max-width: 920px;
        margin: 48px auto 42px;
      }

      .eyebrow {
        margin: 0 0 12px;
        color: var(--accent);
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 2px;
      }

      .contact-intro h1 {
        margin: 0 0 16px;
        color: var(--deep-blue);
        font-size: clamp(38px, 6vw, 64px);
        line-height: 1.1;
      }

      .contact-intro > p:last-child {
        max-width: 760px;
        margin: 0;
        color: var(--muted);
        font-size: 19px;
        line-height: 1.7;
      }

      .contact-content {
        display: block;
        max-width: 920px;
        margin: 0 auto;
      }

      .contact-info {
        width: 100%;
        background: var(--surface);
      }

      .contact-info .eyebrow {
        margin-bottom: 8px;
      }

      .contact-info h2 {
        margin: 0 0 24px;
        color: var(--deep-blue);
        font-size: 25px;
      }

      .contact-detail {
        display: grid;
        gap: 4px;
      }

      .contact-details-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 24px 40px;
      }

      .contact-detail strong,
      .confidentiality-note strong {
        color: var(--deep-blue);
      }

      .contact-detail a {
        overflow-wrap: anywhere;
      }

      .contact-detail p,
      .confidentiality-note {
        margin: 0;
        color: var(--muted);
      }

      .confidentiality-note {
        margin-top: 26px;
        padding: 18px 20px;
        border-left: 3px solid var(--deep-blue);
        background: var(--warm-beige);
      }

      @media (max-width: 768px) {
        .contact-page {
          padding-top: 32px;
        }

        .contact-intro {
          margin: 32px auto;
        }

        .contact-info {
          padding: 24px;
        }

        .contact-details-grid {
          grid-template-columns: 1fr;
          gap: 20px;
        }
      }
    `,
  ],
})
export class ContactComponent {}
