import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <main class="diligence-page">
      <div class="container">
        <header class="diligence-intro">
          <p class="eyebrow">STRATEGIC DILIGENCE</p>
          <h1>Will it survive contact with operational reality?</h1>
          <p>
            Standard technical and commercial diligence often operates as a compliance exercise
            through a review of spreadsheets, lab results, and study conclusions against standard
            checklists. While this process verifies whether a project or technology meets baseline
            reporting criteria, it routinely fails to answer the only question that ultimately
            matters: will this survive contact with operational reality?
          </p>
          <p>
            Strategic diligence bridges the gap between feasibility on paper and performance in
            the field. By combining three decades of hard-hat operating experience with extensive
            evaluation across hundreds of deals, I look beneath surface-level metrics to stress-test
            the core assumptions governing both the mineral asset and the technology intended to
            unlock it.
          </p>
        </header>

        <section class="diligence-area" aria-labelledby="assets-heading">
          <p class="eyebrow">01 / ASSETS</p>
          <h2 id="assets-heading">Good reports are easy to produce. Bankable assets are rare.</h2>
          <p>
            Thousands of PEA, PFS, and DFS studies present projects that appear technically and
            economically viable. Yet most don't hold up once those assumptions meet the field,
            because standard frameworks frequently gloss over metallurgical recovery gaps, grade
            and resource uncertainty, permitting and infrastructure friction, and true market
            competitiveness.
          </p>
          <p>
            Drawing on 30+ years of operating experience and
            <strong>100+ mineral asset evaluations</strong>, I test the validity of a project's
            core assumptions to help decision-makers:
          </p>
          <ul class="diligence-list">
            <li>
              <strong>Uncover Mispriced Assets:</strong> Identify projects with fundamental
              strengths that conventional thinking has missed.
            </li>
            <li>
              <strong>Expose Hidden Risk:</strong> Stress-test paper-thin economics and execution
              bottlenecks before deploying capital.
            </li>
          </ul>
          <p class="diligence-objective">
            <strong>The Bottom Line:</strong> I reject standard "feasibility" to isolate the few
            assets that truly deserve strategic capital and development.
          </p>
        </section>

        <section class="diligence-area" aria-labelledby="technology-heading">
          <p class="eyebrow">02 / TECHNOLOGY</p>
          <h2 id="technology-heading">Does it remove the constraint—or move it?</h2>
          <p>Most technology diligence asks: <em>Is this technology ready?</em></p>
          <p>
            The right question is:
            <strong
              >Does it remove the specific constraint limiting the asset's value, or simply
              relocate it somewhere more expensive?</strong
            >
          </p>
          <p>
            TRL scores, pilot data, and pitch decks show what a technology does in isolation. They
            rarely reveal whether it targets the primary operational bottleneck, or if it quietly
            triggers a downstream failure, a pattern I call <strong>Constraint Shifting</strong>.
          </p>
          <p>
            Backed by 30+ years on the plant floor and
            <strong>500+ deep-tech evaluations</strong>, I stress-test claims against real-world
            extractive metallurgy realities to help decision-makers:
          </p>
          <div class="technology-checks">
            <article class="technology-check">
              <h3>Confirm Constraint-Fit</h3>
              <p>
                <em
                  >Verify that the technology targets the true bottleneck limiting asset value,
                  not just a downstream symptom.</em
                >
              </p>
            </article>
            <article class="technology-check">
              <h3>Test for Constraint Shifting</h3>
              <p>
                <em
                  >Expose whether removing one operational bottleneck quietly creates an equal or
                  worse constraint elsewhere in the flowsheet.</em
                >
              </p>
            </article>
            <article class="technology-check">
              <h3>Assess Advantage Durability</h3>
              <p>
                <em
                  >Determine if the economic edge survives feed variability, harsh operating
                  environments, and commercial scale-up.</em
                >
              </p>
            </article>
          </div>
          <p class="diligence-objective">
            <strong>The Objective:</strong> To look past novelty or TRL scores, evaluating
            technology solely on which constraint it actually removes, whether that removal
            survives contact with scale, and what it is worth when it does.
          </p>
        </section>
      </div>
    </main>
  `,
  styles: [
    `
      .diligence-page {
        min-height: 70vh;
        padding: 56px 0 90px;
        background: #f5f5f5;
      }

      .diligence-intro,
      .diligence-area {
        max-width: 900px;
        margin: 0 auto;
      }

      .diligence-intro {
        padding: 48px 0 40px;
      }

      .eyebrow {
        color: #666;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 2px;
      }

      .diligence-intro h1 {
        margin: 12px 0 28px;
        color: #1a1a2e;
        font-size: clamp(36px, 6vw, 64px);
        line-height: 1.1;
      }

      .diligence-intro p:not(.eyebrow),
      .diligence-area > p:not(.eyebrow) {
        color: #555;
        font-size: 17px;
      }

      .diligence-area {
        margin-top: 36px;
        padding: 38px;
        border-radius: 8px;
        background: #fff;
      }

      .diligence-area h2 {
        margin: 8px 0 22px;
        color: #1a1a2e;
        font-size: clamp(26px, 4vw, 36px);
        line-height: 1.2;
      }

      .diligence-area .eyebrow {
        margin-bottom: 0;
      }

      .diligence-list {
        display: grid;
        gap: 14px;
        padding-left: 24px;
        color: #555;
      }

      .diligence-objective {
        margin-top: 28px;
        padding: 20px 24px;
        border-left: 3px solid #1a1a2e;
        color: #333;
        background: #f5f5f5;
      }

      .technology-checks {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
        margin-top: 28px;
      }

      .technology-check {
        padding: 22px;
        border-radius: 6px;
        background: #f5f5f5;
      }

      .technology-check h3 {
        margin-top: 0;
        color: #1a1a2e;
        font-size: 18px;
      }

      .technology-check p {
        margin-bottom: 0;
        color: #555;
      }

      @media (max-width: 768px) {
        .diligence-area {
          padding: 26px 22px;
        }

        .technology-checks {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class DiligenceComponent {}
