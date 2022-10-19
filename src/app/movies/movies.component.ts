import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit, OnDestroy {
  trendingMovies: any = [];
  imgPrefix = 'https://image.tmdb.org/t/p/w500';
  term: string = '';
  getTotalPages(): number[] {
    return Array(this._movieService.totalPages);
  }
  constructor(private _movieService: MoviesService) {}

  ngOnInit(): void {
    this._movieService
      .getTrending('movie', this._movieService.currentType[1])
      .subscribe({
        next: (data) => {
          this.trendingMovies = data.results;
          if (data.total_pages > 20) {
            this._movieService.totalPages = 20;
          } else {
            this._movieService.totalPages = data.total_pages;
          }
        },
      });
  }

  getMoviesPage(pageNumber: string): void {
    this._movieService.getTrending('movie', pageNumber).subscribe({
      next: (data) => {
        this.trendingMovies = data.results;
        this._movieService.currentType[1] = pageNumber;
      },
    });
  }

  ngOnDestroy(): void {
    this._movieService.currentType[1] = '1';
  }
}
