import { Component, HostListener, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

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
  imports: [RouterLink, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly menuOpen = signal(false);
  protected readonly isHome = signal(true);
  protected readonly showBackToTop = signal(false);
  protected readonly backToTopBottom = signal(24);

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
}
