import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="ideas-page">
      <div class="container ideas-content">
        <header class="ideas-intro">
          <p class="eyebrow">FRAMEWORKS &amp; ARGUMENTS</p>
          <h1>Ideas</h1>
          <p class="ideas-intro-copy">
            A home for the frameworks and arguments that underpin my work. Each idea connects a way
            of thinking to practical decisions in mining, metals and technology.
          </p>
        </header>

        <section class="idea-section" aria-labelledby="constraint-heading">
          <p class="eyebrow">01 / SYSTEMS &amp; CONSTRAINTS</p>
          <h2 id="constraint-heading">Constraint Advantage</h2>
          <p class="idea-deck">
            Creating value by identifying and relieving the constraints that actually limit a
            system.
          </p>
          <p>
            A technology can be brilliant and still fail to improve the system. An operational
            intervention can increase throughput yet deliver little economic benefit. A bottleneck
            can be removed only for another to emerge elsewhere. This is <strong>Constraint
            Shifting</strong>: the bottleneck is relieved in one place and reappears, often at
            greater cost, in another.
          </p>
          <p>
            The central question is not simply whether a solution works, but whether it improves the
            performance and economics of the system as a whole. It is called an advantage because
            the edge comes from relieving the constraint that actually binds; effort spent anywhere
            else changes little.
          </p>

          <h3>The framework examines three questions</h3>
          <div class="framework-grid">
            <article class="framework-card">
              <h4>Constraint-fit</h4>
              <p>Is the identified bottleneck the one that actually limits performance or value?</p>
            </article>
            <article class="framework-card">
              <h4>Constraint Shifting</h4>
              <p>Does the intervention move the constraint elsewhere in the system, and, if so, at what cost?</p>
            </article>
            <article class="framework-card">
              <h4>Durability</h4>
              <p>Does the advantage persist under real-world operating conditions, variability and scale-up?</p>
            </article>
          </div>
          <p>
            The objective is to distinguish a local improvement from a system-level advantage, and
            a technical achievement from durable economic value.
          </p>
          <aside class="idea-example">
            <strong>An illustration</strong>
            <p>
              A mine upgrades its crushing circuit and lifts crusher capacity. If the grinding mill
              was the real limit, plant output barely changes; the constraint has simply moved to
              the mill, and the capital spent has bought little.
            </p>
          </aside>
          <a class="idea-link" routerLink="/writings">
            Read the Constraint Advantage articles <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section class="idea-section" aria-labelledby="metals-heading">
          <p class="eyebrow">02 / CIRCULARITY &amp; SECONDARY SUPPLY</p>
          <h2 id="metals-heading">Immortalising Metals</h2>
          <p>
            Metals can outlive the products in which they are first used. Through successive cycles
            of reuse, recovery and recycling, accumulated above-ground stocks can become a recurring
            source of supply.
          </p>
          <p>
            <strong>Immortalising Metals</strong> examines whether this potential can fundamentally
            change the relationship between metal consumption and primary mining. Across three
            parts, the series asks when secondary supply could become dominant, and what conditions
            would make that transition possible.
          </p>
          <p>
            The aim is not to assume that mining will disappear, but to establish how far, and under
            what conditions, the economy can reduce its dependence on newly mined metal.
          </p>
          <ol class="series-list">
            <li>
              <strong>Part 1 — The Depletion Paradox:</strong> How metals outlive their first use
              and build up as above-ground stock.
            </li>
            <li>
              <strong>Part 2 — The Copper Proof:</strong> A quantitative model of how far recovered
              copper could supply the economy.
            </li>
            <li>
              <strong>Part 3 — The Playbook:</strong> The conditions and actions that would make a
              transition to secondary supply possible.
            </li>
          </ol>
          <a class="idea-link" routerLink="/writings">
            Read the Immortalising Metals series <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section class="ideas-more">
          <h2>Explore the writing</h2>
          <p>Read essays applying these ideas to mining, metals and technology.</p>
          <a class="btn btn-primary" routerLink="/writings">Browse Elemental Perspectives</a>
        </section>
      </div>
    </main>
  `,
  styles: [
    `
      .ideas-page {
        min-height: 70vh;
        padding: 56px 0 90px;
        background: var(--warm-beige);
      }

      .ideas-content {
        max-width: 1000px;
      }

      .ideas-intro {
        display: grid;
        grid-template-columns: minmax(220px, 0.8fr) minmax(0, 1.2fr);
        gap: 12px 56px;
        align-items: end;
        max-width: 920px;
        margin: 48px auto 56px;
        padding-bottom: 34px;
      }

      .ideas-intro > .eyebrow {
        grid-column: 1 / -1;
        margin-bottom: 12px;
        color: var(--accent);
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 2px;
      }

      .ideas-intro h1 {
        margin: 0;
        color: var(--deep-blue);
        font-size: clamp(48px, 8vw, 76px);
        line-height: 1.08;
      }

      .ideas-intro-copy {
        margin-bottom: 0;
        color: var(--muted);
        font-size: 19px;
        line-height: 1.7;
      }

      .idea-section {
        margin: 30px auto;
        padding: 38px;
        border-radius: 8px;
        background: var(--surface);
      }

      .idea-section h2 {
        margin: 8px 0 16px;
        color: var(--deep-blue);
        font-size: clamp(32px, 5vw, 46px);
        line-height: 1.15;
      }

      .idea-section > p:not(.eyebrow) {
        color: var(--muted);
        font-size: 16px;
      }

      .idea-section .idea-deck {
        color: var(--deep-blue);
        font-size: 20px;
        font-weight: 600;
      }

      .idea-section h3 {
        margin: 32px 0 16px;
        color: var(--deep-blue);
        font-size: 22px;
      }

      .framework-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
        margin-bottom: 24px;
      }

      .framework-card {
        padding: 22px;
        border-top: 3px solid var(--accent);
        border-radius: 5px;
        background: var(--warm-beige);
      }

      .framework-card h4 {
        margin: 0 0 8px;
        color: var(--deep-blue);
        font-size: 17px;
      }

      .framework-card p {
        margin: 0;
        color: var(--muted);
      }

      .idea-example {
        margin: 26px 0;
        padding: 22px 24px;
        border-left: 3px solid var(--deep-blue);
        background: var(--warm-beige);
      }

      .idea-example strong {
        color: var(--deep-blue);
      }

      .idea-example p {
        margin: 8px 0 0;
        color: var(--muted);
      }

      .series-list {
        display: grid;
        gap: 14px;
        margin: 24px 0;
        padding-left: 24px;
        color: var(--muted);
      }

      .series-list strong {
        color: var(--deep-blue);
      }

      .idea-link {
        display: inline-block;
        margin-top: 8px;
        color: var(--deep-blue);
        font-weight: 700;
        text-decoration: none;
      }

      .idea-link:hover {
        color: var(--accent);
      }

      .ideas-more {
        padding: 54px 20px 20px;
        text-align: center;
      }

      .ideas-more h2 {
        margin: 0 0 12px;
        color: var(--deep-blue);
        font-size: 30px;
      }

      .ideas-more p {
        margin-bottom: 24px;
        color: var(--muted);
      }

      @media (max-width: 760px) {
        .ideas-page {
          padding-top: 32px;
        }

        .ideas-intro {
          grid-template-columns: 1fr;
          gap: 10px;
          margin: 32px auto 40px;
          padding-bottom: 26px;
        }

        .ideas-intro .eyebrow {
          grid-column: 1;
        }

        .ideas-intro-copy {
          font-size: 17px;
        }

        .idea-section {
          padding: 26px 22px;
        }

        .framework-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class IdeasComponent {}
