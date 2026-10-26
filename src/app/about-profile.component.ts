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
                <div class="about-career-scroll">
                  <ol class="about-career">
                  <li>
                    <span class="career-stop-number" aria-hidden="true">01</span>
                    <div class="career-stop-card">
                      <time>2025 – present</time>
                      <span>Sundar Singh Advisory</span>
                    </div>
                  </li>
                  <li>
                    <span class="career-stop-number" aria-hidden="true">02</span>
                    <div class="career-stop-card">
                      <time>2019 – 2025</time>
                      <span>VIMSON Group, CTO</span>
                    </div>
                  </li>
                  <li>
                    <span class="career-stop-number" aria-hidden="true">03</span>
                    <div class="career-stop-card">
                      <time>2016 – 2019</time>
                      <span>Geomysore Services, COO</span>
                    </div>
                  </li>
                  <li>
                    <span class="career-stop-number" aria-hidden="true">04</span>
                    <div class="career-stop-card">
                      <time>2015 – 2016</time>
                      <span>Sarda Mines (JSPL), Unit Head &amp; VP Mines</span>
                    </div>
                  </li>
                  <li>
                    <span class="career-stop-number" aria-hidden="true">05</span>
                    <div class="career-stop-card">
                      <time>2014 – 2015</time>
                      <span>Aditya Birla Group, AVP &amp; Head – Operations</span>
                    </div>
                  </li>
                  <li>
                    <span class="career-stop-number" aria-hidden="true">06</span>
                    <div class="career-stop-card">
                      <time>1997 – 2014</time>
                      <span>V.M. Salgaocar &amp; Bro., Assistant Manager to Deputy General Manager</span>
                    </div>
                  </li>
                  <li>
                    <span class="career-stop-number" aria-hidden="true">07</span>
                    <div class="career-stop-card">
                      <time>1994 – 1997</time>
                      <span>V.S. Dempo &amp; Co., Mining Engineer</span>
                    </div>
                  </li>
                  </ol>
                </div>
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

      .about-career {
        position: relative;
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        gap: 10px;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .about-career::before {
        position: absolute;
        top: 50%;
        right: 0;
        left: 0;
        border-top: 4px dotted var(--accent);
        content: '';
      }

      .about-career li {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        min-width: 0;
        min-height: 330px;
        text-align: center;
      }

      .career-stop-card {
        z-index: 1;
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
        min-height: 126px;
        padding: 14px 10px;
        border: 2px solid var(--deep-blue);
        border-radius: 8px;
        background: var(--surface);
        color: var(--muted);
        font-size: 13px;
        line-height: 1.4;
      }

      .career-stop-card time {
        color: var(--accent);
        font-size: 12px;
        font-weight: 700;
      }

      .career-stop-card span {
        color: var(--deep-blue);
        font-weight: 600;
      }

      .career-stop-number {
        position: absolute;
        top: 50%;
        z-index: 2;
        display: grid;
        width: 48px;
        height: 48px;
        transform: translateY(-50%);
        place-items: center;
        border: 5px solid var(--surface);
        border-radius: 50%;
        background: var(--deep-blue);
        color: white;
        font-size: 14px;
        font-weight: 700;
      }

      .about-career li:nth-child(even) {
        flex-direction: column-reverse;
      }

      @media (max-width: 900px) {
        .about-career-scroll {
          overflow-x: auto;
        }

        .about-career {
          grid-template-columns: repeat(7, minmax(140px, 1fr));
          min-width: 1080px;
          padding: 0 0 12px;
        }

        .about-career li {
          min-height: 330px;
        }
      }

      @media (max-width: 600px) {
        .about-career-scroll {
          overflow: visible;
        }

        .about-career {
          grid-template-columns: 1fr;
          min-width: 0;
          gap: 0;
          overflow: visible;
          padding: 0 0 0 30px;
        }

        .about-career::before {
          top: 0;
          bottom: 0;
          left: 12px;
          width: 0;
          border-top: 0;
          border-left: 4px dotted var(--accent);
        }

        .about-career li,
        .about-career li:nth-child(even) {
          min-height: 0;
          padding: 0 0 20px 32px;
          align-items: flex-start;
          flex-direction: column;
          text-align: left;
        }

        .career-stop-card {
          min-height: 0;
          padding: 14px;
        }

        .career-stop-number {
          top: 18px;
          left: -12px;
          width: 42px;
          height: 42px;
          transform: translate(-50%, 0);
        }
      }
    `,
  ],
})
export class AboutProfileComponent {
  @Input() homePage = false;
}
