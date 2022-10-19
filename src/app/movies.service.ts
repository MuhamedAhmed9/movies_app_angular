import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  currentType: [string, string] = ['movie', '1'];
  totalPages: number = 0;

  constructor(private _httpClient: HttpClient) {}

  getTrending(mediaType: string, pageNumber: string = '1'): Observable<any> {
    this.currentType = [mediaType, pageNumber];
    return this._httpClient.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=ef80a5c8a9404e2d98a00922fdd6774f&page=${pageNumber}`
    );
  }

  getMovieDetails(movieId: string): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=ef80a5c8a9404e2d98a00922fdd6774f&language=en-U`
    );
  }

  getTvShowDetails(tvShowId: string): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=ef80a5c8a9404e2d98a00922fdd6774f&language=en-US`
    );
  }

  getPeopleDetails(personId: string): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/person/${personId}?api_key=ef80a5c8a9404e2d98a00922fdd6774f&language=en-US`
    );
  }

  searchMovies(term: string, pageNumber: string = '1'): Observable<any> {
    this.currentType[1] = pageNumber;
    return this._httpClient.get(
      `https://api.themoviedb.org/3/search/multi?api_key=ef80a5c8a9404e2d98a00922fdd6774f&language=en-US&query=${term}&page=1&include_adult=true&page=${pageNumber}`
    );
  }
}
