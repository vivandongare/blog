import { DOCUMENT } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EssayService } from './essay.service';

describe('EssayService', () => {
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTesting.verify());

  it('loads once, sorts essays, and reuses the result for later subscribers', () => {
    const service = TestBed.inject(EssayService);
    const results: number[][] = [];
    const essays = [
      { date: '2026-01-01', episodeNumber: 1, header: 'First', html: '' },
      { date: '2026-02-01', episodeNumber: 2, header: 'Second', html: '' },
    ];

    service.essays.subscribe((items) => results.push(items.map((item) => item.episodeNumber)));
    service.essays.subscribe((items) => results.push(items.map((item) => item.episodeNumber)));

    const essaysUrl = new URL('essays.json', TestBed.inject(DOCUMENT).baseURI).toString();
    httpTesting.expectOne(essaysUrl).flush(essays);

    expect(results).toEqual([
      [2, 1],
      [2, 1],
    ]);

    service.essays.subscribe((items) => results.push(items.map((item) => item.episodeNumber)));

    expect(results).toHaveLength(3);
    expect(results[2]).toEqual([2, 1]);
    httpTesting.expectNone(essaysUrl);
  });
});
