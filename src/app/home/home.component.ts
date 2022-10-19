import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from './../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  trendingMovies: any = [];
  trendingTvShows: any = [];
  trendingPeople: any = [];
  imgPrefix = 'https://image.tmdb.org/t/p/w500';
  imagePreviewer: any;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 6,
      },
    },
    nav: true,
  };

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    this._moviesService.getTrending('movie').subscribe({
      next: (data) => {
        this.trendingMovies = data.results.slice(0, 10);
        this.imagesPreviewer(this.trendingMovies);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this._moviesService.getTrending('tv').subscribe({
      next: (data) => {
        this.trendingTvShows = data.results.slice(0, 10);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this._moviesService.getTrending('person').subscribe({
      next: (data) => {
        this.trendingPeople = data.results.slice(0, 10);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  imagesPreviewer(images: any) {
    const header = document.getElementsByTagName('header')[0];
    let i = 0;
    let allImages = images.map((image: any) => {
      return image.backdrop_path;
    });
    this.imagePreviewer = setInterval(() => {
      header.style.backgroundImage = `url(${this.imgPrefix}${allImages[i]})`;
      i++;
      if (i === allImages.length) {
        i = 0;
      }
    }, 2500);
  }

  ngOnDestroy(): void {
    clearInterval(this.imagePreviewer);
  }
}
