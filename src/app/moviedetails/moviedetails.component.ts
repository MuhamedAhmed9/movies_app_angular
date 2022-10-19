import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css'],
})
export class MoviedetailsComponent implements OnInit {
  movieDetails: any = {};
  imgPrefix = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _movieService: MoviesService
  ) {}

  ngOnInit(): void {
    // console.log(this._activatedRoute.snapshot.params['id']);
    // this._activatedRoute.params.subscribe({
    //   next: (params) => {
    //     console.log(params['id']);
    //   },
    // });
    this._movieService
      .getMovieDetails(this._activatedRoute.snapshot.params['id'])
      .subscribe({
        next: (data) => {
          this.movieDetails = data;
          // console.log(this.movieDetails);
        },
      });
  }
}
