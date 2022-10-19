import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css'],
})
export class TvComponent implements OnInit, OnDestroy {
  trendingTvShows: any = [];
  imgPrefix = 'https://image.tmdb.org/t/p/w500';
  term: string = '';
  getTotalPages(): number[] {
    return Array(this._movieService.totalPages);
  }
  constructor(private _movieService: MoviesService) {}

  ngOnInit(): void {
    this._movieService
      .getTrending('tv', this._movieService.currentType[1])
      .subscribe({
        next: (data) => {
          this.trendingTvShows = data.results;
          if (data.total_pages > 20) {
            this._movieService.totalPages = 20;
          } else {
            this._movieService.totalPages = data.total_pages;
          }
        },
      });
  }

  getMoviesPage(pageNumber: string): void {
    this._movieService.getTrending('tv', pageNumber).subscribe({
      next: (data) => {
        this.trendingTvShows = data.results;
        this._movieService.currentType[1] = pageNumber;
      },
    });
  }

  ngOnDestroy(): void {
    this._movieService.currentType[1] = '1';
  }
}
