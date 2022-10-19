import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  foundedMovies: any[] = [];
  imgPrefix = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _movieService: MoviesService
  ) {}

  ngOnInit(): void {
    // console.log(this._activatedRoute.snapshot.params['term']);
    this._movieService
      .searchMovies(
        this._activatedRoute.snapshot.params['term'],
        this._movieService.currentType[1]
      )
      .subscribe({
        next: (data) => {
          this.foundedMovies = data.results;
          if (data.total_pages > 20) {
            this._movieService.totalPages = 20;
          } else {
            this._movieService.totalPages = data.totalPages;
          }
        },
      });
  }
  getTotalPages(): number[] {
    return Array(this._movieService.totalPages);
  }

  getMoviesPage(pageNumber: string): void {
    this._movieService
      .searchMovies(this._activatedRoute.snapshot.params['term'], pageNumber)
      .subscribe({
        next: (data) => {
          this.foundedMovies = data.results;
          this._movieService.currentType[1] = pageNumber;
        },
      });
  }

  ngOnDestroy(): void {
    this._movieService.currentType[1] = '1';
  }
}
