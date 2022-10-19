import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-persondetails',
  templateUrl: './persondetails.component.html',
  styleUrls: ['./persondetails.component.css'],
})
export class PersondetailsComponent implements OnInit {
  personDetails: any = {};
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
      .getPeopleDetails(this._activatedRoute.snapshot.params['id'])
      .subscribe({
        next: (data) => {
          this.personDetails = data;
          // console.log(this.personDetails);
        },
      });
  }
}
