import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [],
  template: `
    <main class="diligence-page">
      <div class="container">
        <header class="diligence-intro">
          <p class="eyebrow">INDEPENDENT DILIGENCE &amp; STRATEGIC ADVISORY</p>
          <h1>Three practices, one discipline.</h1>
          <p>
            Test what looks good on paper against the realities of ore, process, execution and
            market.
          </p>
        </header>

        <section class="diligence-area" aria-labelledby="assets-heading">
          <p class="eyebrow">01 / OREINTEL / ASSET DILIGENCE</p>
          <h2 id="assets-heading">Good reports are easy to produce. Bankable assets are rare.</h2>
          <p class="diligence-audience">
            For investors, lenders, strategic buyers and project owners evaluating a mineral asset.
          </p>
          <div class="diligence-question">
            <strong>The question</strong>
            <p>
              Do the assumptions behind the study support an operation that is competitive,
              financeable and executable?
            </p>
          </div>
          <h3 class="diligence-subheading">I examine</h3>
          <ul class="diligence-list">
            <li>
              <strong>Resource, reserve and mine plan:</strong> Are grade, continuity, mining method
              and production assumptions consistent?
            </li>
            <li>
              <strong>Processing and recovery:</strong> Does the proposed flowsheet suit the actual
              ore and its variability?
            </li>
            <li>
              <strong>Economics and market:</strong> Where could the project sit on the cost curve,
              and how sensitive is it to price, recovery, capex, opex and offtake assumptions?
            </li>
            <li>
              <strong>Execution and context:</strong> What do infrastructure, permitting,
              community, environmental and delivery risks mean for the project?
            </li>
          </ul>
          <div class="diligence-outcome">
            <strong>What you get</strong>
            <p>
              A clear view of which assumptions deserve confidence, which need testing, what risks
              could change the decision, and where overlooked strengths may improve the case.
            </p>
          </div>
          <p class="diligence-formats">
            <strong>Engagement formats:</strong> Rapid asset screen; full techno-economic
            evaluation; independent review of an existing study.
          </p>
        </section>

        <section class="diligence-area" aria-labelledby="technology-heading">
          <p class="eyebrow">02 / TECTONICS / TECHNOLOGY DILIGENCE</p>
          <h2 id="technology-heading">Does it remove the constraint, or move it?</h2>
          <p class="diligence-audience">
            For mining and metals companies evaluating technology, investors or CVCs considering
            technology-led opportunities, and founders whose technology faces that scrutiny.
          </p>
          <div class="diligence-question">
            <strong>The question</strong>
            <p>
              Does the claimed advantage address the bottleneck that actually limits performance or
              value, and does it withstand real-world operating conditions, system-level constraints
              and commercial scale-up?
            </p>
          </div>
          <p>
            Applying the <strong>Constraint Advantage</strong> framework, I test:
          </p>
          <ul class="diligence-list">
            <li>
              <strong>Constraint-fit:</strong> Is this the bottleneck that limits value, or only a
              visible symptom?
            </li>
            <li>
              <strong>Constraint Shifting:</strong> Does removing it create an equal or more costly
              constraint elsewhere in the flowsheet or system?
            </li>
            <li>
              <strong>Durability:</strong> Does the benefit hold across variable feed, realistic
              operating conditions, throughput and scale?
            </li>
            <li>
              <strong>Commercial consequence:</strong> What does the demonstrated advantage mean
              for cost, recovery, throughput, risk and value?
            </li>
          </ul>
          <div class="diligence-outcome">
            <strong>What you get</strong>
            <p>
              A structured view of what the technology actually improves, what remains unproven,
              where constraints may migrate, and what evidence is needed for a sound decision. For
              founders, that means a clear view of which claims hold and what evidence would
              strengthen the case.
            </p>
          </div>
          <p class="diligence-formats">
            <strong>Engagement formats:</strong> Technology claim review; pilot design and success
            criteria; portfolio screening for a CVC.
          </p>
        </section>

        <section class="diligence-area" aria-labelledby="roadmaps-heading">
          <p class="eyebrow">03 / FUTUREFRAME / INNOVATION ROADMAPS</p>
          <h2 id="roadmaps-heading">
            Where is value moving across critical-mineral value chains, and what should
            organisations do about it?
          </h2>
          <p class="diligence-audience">
            For mining groups, investors, industry bodies and public institutions setting
            technology, investment and resource-security priorities.
          </p>
          <div class="diligence-question">
            <strong>The question</strong>
            <p>
              Which emerging risks and opportunities across critical-mineral value chains deserve
              capital, partnership or policy attention, and in what order?
            </p>
          </div>
          <h3 class="diligence-subheading">I map</h3>
          <ul class="diligence-list">
            <li>
              <strong>Emerging risks:</strong> Which supply, technology and policy shifts could
              reshape the chain, and how soon?
            </li>
            <li>
              <strong>Technology options:</strong> Which technologies could change cost, recovery or
              supply, and how mature are they?
            </li>
            <li>
              <strong>Strategic dependencies:</strong> Where does the chain rely on a single
              geography, process or supplier?
            </li>
            <li>
              <strong>Priorities for action:</strong> Where should capital, partnership or policy
              attention go first?
            </li>
          </ul>
          <div class="diligence-outcome">
            <strong>What you get</strong>
            <p>
              A prioritised roadmap showing where value is moving across the chain, which risks and
              options deserve attention, and what to do first.
            </p>
          </div>
          <p class="diligence-formats">
            <strong>Engagement formats:</strong> Sector roadmap; technology landscape and watchlist;
            opportunity map; strategy workshop; intelligence platform.
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
        background: var(--warm-beige);
      }

      .diligence-intro,
      .diligence-area {
        max-width: 920px;
        margin: 0 auto;
      }

      .diligence-intro {
        padding: 48px 0 40px;
      }

      .eyebrow {
        color: var(--accent);
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 2px;
      }

      .diligence-intro h1 {
        margin: 12px 0 18px;
        color: var(--deep-blue);
        font-size: clamp(38px, 6vw, 64px);
        line-height: 1.08;
      }

      .diligence-intro > p:last-child {
        max-width: 760px;
        color: var(--muted);
        font-size: 20px;
      }

      .diligence-area {
        margin-top: 30px;
        padding: 38px;
        border-radius: 8px;
        background: var(--surface);
      }

      .diligence-area h2 {
        margin: 8px 0 18px;
        color: var(--deep-blue);
        font-size: clamp(26px, 4vw, 36px);
        line-height: 1.2;
      }

      .diligence-area .eyebrow {
        margin-bottom: 0;
      }

      .diligence-audience,
      .diligence-area > p:not(.eyebrow, .diligence-formats) {
        color: var(--muted);
        font-size: 16px;
      }

      .diligence-audience {
        margin-bottom: 26px;
      }

      .diligence-question,
      .diligence-outcome {
        margin: 24px 0;
        padding: 20px 24px;
        border-left: 3px solid var(--deep-blue);
        background: var(--warm-beige);
      }

      .diligence-question > strong,
      .diligence-outcome > strong {
        color: var(--deep-blue);
      }

      .diligence-question p,
      .diligence-outcome p {
        margin: 6px 0 0;
        color: var(--muted);
      }

      .diligence-subheading {
        margin: 28px 0 12px;
        color: var(--deep-blue);
        font-size: 20px;
      }

      .diligence-list {
        display: grid;
        gap: 14px;
        margin: 0;
        padding-left: 24px;
        color: var(--muted);
      }

      .diligence-list strong {
        color: var(--deep-blue);
      }

      .diligence-formats {
        margin: 24px 0;
        color: var(--muted);
      }

      .diligence-formats strong {
        color: var(--deep-blue);
      }

      .diligence-cta {
        display: inline-block;
        color: var(--deep-blue);
        font-weight: 700;
        text-decoration: none;
      }

      .diligence-cta:hover {
        color: var(--accent);
      }

      @media (max-width: 768px) {
        .diligence-page {
          padding-top: 32px;
        }

        .diligence-intro {
          padding: 32px 0;
        }

        .diligence-area {
          padding: 26px 22px;
        }
      }
    `,
  ],
})
export class DiligenceComponent {}
