import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, shareReplay } from 'rxjs';
import type { Essay } from './app';

@Injectable({ providedIn: 'root' })
export class EssayService {
  private readonly http = inject(HttpClient);
  private readonly document = inject(DOCUMENT);

  readonly essays = this.http
    .get<Essay[]>(new URL('essays.json', this.document.baseURI).toString())
    .pipe(
      map((essays) =>
        [...essays].sort((first, second) => second.episodeNumber - first.episodeNumber),
      ),
      shareReplay({ bufferSize: 1, refCount: false }),
    );
}
