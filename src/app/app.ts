import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { AboutProfileComponent } from './about-profile.component';

export interface Essay {
  date: string;
  header: string;
  episodeNumber: number;
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

  protected subscribe(email: string): void {
    this.notice.set(`Thanks for subscribing. We will send updates to ${email}.`);
  }

  protected sendMessage(name: string): void {
    this.notice.set(`Thanks, ${name}. Your message has been received.`);
  }
}
