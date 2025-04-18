import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentApi } from '../../constants/environment';
import { Observable } from 'rxjs';
import { DetailedMovie, Movie, MovieResponse } from '../../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class ApiBuscarServiceService {

  constructor(private http: HttpClient) { }


  getMovieById(movieId: number, language: string = 'es-ES'): Observable<DetailedMovie> {
    const params = new HttpParams()
      .set('api_key', environmentApi.apiKey)
      .set('language', language);
  
    return this.http.get<DetailedMovie>(
      `${environmentApi.apiUrl}/movie/${movieId}`,
      { params }
    );
  }
  

  searchMoviesByName(query: string, page: number = 1, language: string = 'en-US'): Observable<MovieResponse> {
    const params = new HttpParams()
      .set('api_key', environmentApi.apiKey)
      .set('language', language)
      .set('query', query)
      .set('page', page.toString())
      .set('include_adult', 'true'); // puedes cambiar esto si quieres incluir pelis +18
  
    return this.http.get<MovieResponse>(
      `${environmentApi.apiUrl}/search/movie`,
      { params }
    );
  }
  
}
