import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-profile',
  standalone: true,
  template: `
    <section class="about" id="about" [class.about--standalone]="!homePage">
      <div class="container">
        <div class="section-header">
          <h2>ABOUT</h2>
          <p>
            {{
              homePage
                ? 'Professional journey and focus areas'
                : "An operator's perspective on mining technology and real-world value"
            }}
          </p>
        </div>
        <div class="about-content" [class.about-content--single]="!homePage">
          <div class="about-text">
            <h3>Sunder Singh</h3>
            @if (homePage) {
              <p>
                Designing India's first community-participatory mining model taught me that
                operational reality matters more than the metrics in a pitch. After three decades
                working across mine planning, beneficiation, commissioning, project execution, and
                steelmaking, I now apply that experience to evaluating mining technologies and
                mineral assets.
              </p>
              <p>
                My focus: separate genuine value from a good story and surface the technologies and
                assets that deserve to be pursued.
              </p>
            } @else {
              <p>
                Most mining projects measure success in tonnes. I once measured it in something
                harder to fake: a community that actually wanted the mine standing next to it.
              </p>
              <p>
                Designing and implementing India's first community-participatory mining model taught
                me something that has shaped everything since: the metrics people lead with rarely
                decide whether something survives contact with reality.
              </p>
              <p>
                Thirty-plus years later, I run that same lens against a very different kind of pitch:
                deep-tech startups trying to convince mining companies and investors that their
                technology is the breakthrough it claims to be.
              </p>
              <p>
                Few people evaluating mining and metals technology today bring what I bring to that
                room. I've spent three decades on the operating side in mine planning, ore
                beneficiation, gold mine commissioning, greenfield and brownfield project execution,
                and integrated steelmaking strategy. I know what a real orebody, a real flowsheet,
                and a real scale-up actually look like.
              </p>
              <p>
                I've spent recent years applying that operational reality on the other side of the
                table, directing technology diligence on
                <strong>500+ deep-tech and mining startups</strong> and leading techno-economic
                evaluations of <strong>100+ mineral assets</strong> across critical minerals, REEs,
                precious, and industrial commodities.
              </p>
              <p>
                That combination as operator and evaluator, at that volume, across that many
                commodities and technologies, is genuinely rare in this industry.
              </p>
              <p>
                It is also what lets me tell the difference between a startup that has solved a real
                constraint and one that has optimized something nobody was actually bottlenecked on.
                I look past the headlines to the fundamentals: resource quality, process viability,
                economics, market dynamics, and the friction of actually scaling something.
              </p>
              <p>
                Often, the most valuable insight comes from asking the question no one else in the
                room has asked yet.
              </p>
              <p class="about-objective">
                <strong>My objective:</strong> To separate genuine value from a good story, and
                surface the opportunities, and the technologies, that truly deserve to be pursued.
              </p>
            }
          </div>
          @if (homePage) {
            <div class="about-stats">
              <div class="stat">
                <div class="stat-number">30+</div>
                <div class="stat-label">Years on the operating side</div>
              </div>
              <div class="stat">
                <div class="stat-number">500+</div>
                <div class="stat-label">Startups through technology diligence</div>
              </div>
              <div class="stat">
                <div class="stat-number">100+</div>
                <div class="stat-label">Mineral assets evaluated</div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class AboutProfileComponent {
  @Input() homePage = false;
}
