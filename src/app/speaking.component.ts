import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="speaking-page">
      <div class="container speaking-content">
        <div class="speaking-overview">
          <header class="speaking-intro">
            <p class="eyebrow">SPEAKING</p>
            <h1>Ideas that sharpen the question, and improve the decision.</h1>
            <p>
              I speak to boards, investment committees, industry associations and conferences about
              how value is created, constrained and lost across mining, metals and technology.
            </p>
          </header>

          <section class="speaking-talks" aria-labelledby="talks-heading">
            <h2 id="talks-heading">Talks</h2>
            <div class="talk-grid">
              <article class="talk-card">
                <p class="talk-number">01</p>
                <h3>Constraint Shifting: Why Breakthroughs Stall at Scale</h3>
                <p>
                  Explains why technologies that work in a lab or pilot can struggle to improve the
                  system.
                </p>
              </article>
              <article class="talk-card">
                <p class="talk-number">02</p>
                <h3>Good Study, Bad Asset</h3>
                <p>
                  Shows what a positive PEA, PFS or DFS can and cannot tell an investor.
                </p>
              </article>
              <article class="talk-card">
                <p class="talk-number">03</p>
                <h3>The Future of Metal Supply</h3>
                <p>
                  Examines whether recovered metal can displace newly mined supply, and under what
                  conditions.
                </p>
              </article>
            </div>
          </section>
        </div>

        <section class="speaking-enquiries" aria-labelledby="formats-heading">
          <div>
            <p class="eyebrow">EVENT FORMATS</p>
            <h2 id="formats-heading">A conversation built for your audience.</h2>
          </div>
          <div>
            <ul class="format-list">
              <li>Keynote</li>
              <li>Panel discussion</li>
              <li>Board or investment-committee briefing</li>
              <li>Closed-door workshop</li>
            </ul>
            <a class="btn btn-primary" routerLink="/contact">Speaking enquiries</a>
          </div>
        </section>
      </div>
    </main>
  `,
  styles: [
    `
      .speaking-page {
        min-height: 70vh;
        padding: 56px 0 90px;
        background: var(--warm-beige);
      }

      .speaking-content {
        max-width: 1000px;
      }

      .speaking-overview {
        max-width: 920px;
        margin: 48px auto 58px;
      }

      .speaking-intro {
        margin-bottom: 48px;
      }

      .eyebrow {
        margin: 0 0 12px;
        color: var(--accent);
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 2px;
      }

      .speaking-intro h1 {
        margin: 0 0 20px;
        color: var(--deep-blue);
        font-size: clamp(38px, 6vw, 64px);
        line-height: 1.1;
      }

      .speaking-intro > p:last-child {
        max-width: 760px;
        margin: 0;
        color: var(--muted);
        font-size: 19px;
        line-height: 1.7;
      }

      .speaking-talks > h2,
      .speaking-enquiries h2 {
        margin: 0;
        color: var(--deep-blue);
        font-size: clamp(28px, 4vw, 38px);
        line-height: 1.2;
      }

      .speaking-talks > h2 {
        margin-bottom: 24px;
      }

      .talk-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 18px;
      }

      .talk-card {
        min-height: 240px;
        padding: 26px;
        border-top: 3px solid var(--accent);
        border-radius: 6px;
        background: var(--surface);
      }

      .talk-number {
        margin: 0 0 18px;
        color: var(--accent);
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 1px;
      }

      .talk-card h3 {
        margin: 0 0 14px;
        color: var(--deep-blue);
        font-size: 22px;
        line-height: 1.25;
      }

      .talk-card > p:last-child {
        margin: 0;
        color: var(--muted);
      }

      .speaking-enquiries {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 50px;
        align-items: start;
        margin-top: 72px;
        padding: 36px;
        border-radius: 8px;
        background: var(--surface);
      }

      .format-list {
        display: grid;
        gap: 10px;
        margin: 0 0 26px;
        padding-left: 20px;
        color: var(--muted);
      }

      @media (max-width: 760px) {
        .speaking-page {
          padding-top: 32px;
        }

        .speaking-intro {
          margin-bottom: 36px;
        }

        .speaking-overview {
          margin: 32px auto 42px;
        }

        .talk-grid,
        .speaking-enquiries {
          grid-template-columns: 1fr;
        }

        .talk-card {
          min-height: auto;
        }

        .speaking-enquiries {
          gap: 24px;
          margin-top: 48px;
          padding: 26px 22px;
        }
      }
    `,
  ],
})
export class SpeakingComponent {}
