import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResponse } from '../../models/movie.model';
import { TvCatalogResponse } from '../../models/tv.populares.model';
import { environmentApi } from '../../constants/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly MOVIE_POPULAR_ENDPOINT = '/movie/popular';
  private readonly TV_POPULAR_ENDPOINT = '/tv/popular';

  constructor(private http: HttpClient) { }

  getListMovies(page: number = 1, language: string = 'en-US'): Observable<MovieResponse> {
    const params = new HttpParams()
      .set('api_key', environmentApi.apiKey)
      .set('language', language)
      .set('page', page.toString());

    return this.http.get<MovieResponse>(
      `${environmentApi.apiUrl}${this.MOVIE_POPULAR_ENDPOINT}`,
      { params }
    );
  }

  getListTv(page: number = 1, language: string = 'en-US'): Observable<TvCatalogResponse>{
    const params = new HttpParams()
    .set('api_key', environmentApi.apiKey)
    .set('language', language)
    .set('page', page.toString());

    return this.http.get<TvCatalogResponse>(
      `${environmentApi.apiUrl}${this.TV_POPULAR_ENDPOINT}`,
      {params}
    );
  }

  

}
