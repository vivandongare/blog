import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-profile',
  standalone: true,
  template: `
    <section class="about" id="about" [class.about--standalone]="!homePage">
      <div class="container">
        <div class="section-header">
          @if (homePage) {
            <h2>ABOUT</h2>
            <p>Professional journey and focus areas</p>
          } @else {
            <p class="eyebrow">ABOUT</p>
          }
        </div>
        <div class="about-content" [class.about-content--single]="!homePage">
          @if (!homePage) {
            <figure class="about-portrait">
              <img src="SundarSingh.jfif" alt="Sundar Singh" />
            </figure>
          }
          <div class="about-text">
            @if (homePage) {
              <h3>Sundar Singh</h3>
            } @else {
              <h1>An operator's perspective on mining, technology and real-world value.</h1>
            }
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
                Most mining projects measure success in tonnes. Earlier in my career I measured it
                by something harder to fake: whether the community actually wanted the mine next
                door. In 2005, in Goa, I designed and implemented India's first
                community-participatory mining model. It taught me that the numbers people lead
                with rarely decide whether something survives.
              </p>
              <p>
                That lesson followed me. I scaled an open-pit coal operation from 1 to 8 Mtpa in a
                year. I took a 0.6 Mtpa gold mine and plant from exploration to commissioning. I
                built an iron-making plant from concept to execution and developed siting and
                strategy for integrated steelmaking. Each taught me the same thing: output is set
                by the weakest link, and it is rarely the one on the slide.
              </p>
              <p>
                From 2019 to 2025, I was Chief Technology Officer at VIMSON Group, where I co-built
                Prospect Innovation, a platform for evaluating and integrating emerging mining
                technologies. Today, through Sundar Singh Advisory, I apply the same operator's
                lens to the claims investors and miners are asked to believe: more than 100 mineral
                assets and over 500 deep-tech and mining startups so far.
              </p>
              <p>
                That is where the sharpest questions come from. Is this a technology that resolves
                a constraint, or one that optimises something that was never the bottleneck? A
                valuable insight often starts with a question nobody in the room has asked.
              </p>
              <section class="about-details" aria-labelledby="credentials-heading">
                <h3 id="credentials-heading">Credentials</h3>
                <ul>
                  <li>PhD, Mining Engineering, IIT (ISM) Dhanbad; BE (Mining), College of Engineering, Guindy</li>
                  <li>First Class Manager's Certificate of Competency (DGMS); QMS Lead Auditor (CII)</li>
                  <li>Fellow, Mining Engineers Association of India</li>
                  <li>Fellow, Institution of Engineers (India)</li>
                  <li>Member, AusIMM</li>
                  <li>Collaborating Partner, Just Transition Research Centre, IIT Kanpur</li>
                  <li>Contributor to NITI Aayog and industry consultations on India's Critical Minerals Mission</li>
                </ul>
              </section>
              <section class="about-details" aria-labelledby="career-heading">
                <h3 id="career-heading">Career at a glance</h3>
                <ul class="about-career">
                  <li><strong>2025–present</strong> Sundar Singh Advisory</li>
                  <li><strong>2019–2025</strong> VIMSON Group, CTO</li>
                  <li><strong>2016–2019</strong> Geomysore Services, COO</li>
                  <li><strong>2015–2016</strong> Sarda Mines (JSPL), Unit Head &amp; VP Mines</li>
                  <li><strong>2014–2015</strong> Aditya Birla Group, AVP &amp; Head – Operations</li>
                  <li><strong>1997–2014</strong> V.M. Salgaocar &amp; Bro., Assistant Manager to Deputy General Manager</li>
                  <li><strong>1994–1997</strong> V.S. Dempo &amp; Co., Mining Engineer</li>
                </ul>
              </section>
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
  styles: [
    `
      .about--standalone .section-header {
        margin-bottom: 42px;
        text-align: left;
      }

      .about--standalone .section-header .eyebrow {
        margin-bottom: 12px;
        color: var(--accent);
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 2px;
      }

      .about--standalone .about-text h1 {
        max-width: 900px;
        margin: 0 auto 24px;
        color: var(--deep-blue);
        font-size: clamp(28px, 4vw, 40px);
        line-height: 1.1;
        text-align: center;
      }

      .about-details {
        margin-top: 38px;
      }

      .about-details h3 {
        margin-bottom: 16px;
      }

      .about-details ul {
        display: grid;
        gap: 12px;
        padding-left: 22px;
      }

      .about-career li strong {
        display: inline-block;
        min-width: 125px;
        color: var(--deep-blue);
      }

      @media (max-width: 600px) {
        .about-career li strong {
          display: block;
          min-width: 0;
        }
      }
    `,
  ],
})
export class AboutProfileComponent {
  @Input() homePage = false;
}
