import { Component, HostListener, OnInit, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { AboutProfileComponent } from './about-profile.component';
import { EssayService } from './essay.service';

export interface Essay {
  date: string;
  header: string;
  episodeNumber: number;
  theme?: string;
  coverImage?: string;
  images?: string[];
  html: string;
}

@Component({
  imports: [AboutProfileComponent, CommonModule, FormsModule, RouterLink, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly menuOpen = signal(false);
  protected readonly notice = signal('');
  protected readonly isHome = signal(true);
  protected readonly showBackToTop = signal(false);
  protected readonly backToTopBottom = signal(24);
  protected readonly featuredEssay = toSignal(
    inject(EssayService).essays.pipe(map((essays) => essays[0])),
    { initialValue: undefined },
  );
  protected readonly speakingTopics = [
    ['Critical minerals', 'Supply chains, geopolitics, and strategic importance'],
    ['Mining technology', 'Innovation, scale-up challenges, and technical assessment'],
    ['Resource security', 'National security, supply resilience, and strategic positioning'],
    ['Supply systems', 'End-to-end value chains and market dynamics'],
  ];

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        const url = event.urlAfterRedirects;
        this.isHome.set(url === '/' || url === '');
      });
    this.isHome.set(this.router.url === '/' || this.router.url === '');
  }

  @HostListener('window:scroll')
  protected updateBackToTopVisibility(): void {
    const page = document.documentElement;
    const shouldShow = window.scrollY + window.innerHeight >= page.scrollHeight - 80;
    this.showBackToTop.set(shouldShow);

    if (shouldShow) {
      const footerTop = document.querySelector('.footer')?.getBoundingClientRect().top;
      if (footerTop !== undefined) {
        this.backToTopBottom.set(Math.max(24, window.innerHeight - footerTop + 16));
      }
    }
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  protected subscribe(email: string): void {
    this.notice.set(`Thanks for subscribing. We will send updates to ${email}.`);
  }

}
