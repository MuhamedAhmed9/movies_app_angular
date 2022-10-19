import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-tvshowdetails',
  templateUrl: './tvshowdetails.component.html',
  styleUrls: ['./tvshowdetails.component.css'],
})
export class TvshowdetailsComponent implements OnInit {
  tvDetails: any = {};
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
      .getTvShowDetails(this._activatedRoute.snapshot.params['id'])
      .subscribe({
        next: (data) => {
          this.tvDetails = data;
          // console.log(this.tvDetails);
        },
      });
  }
}
