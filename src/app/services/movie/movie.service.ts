import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RootObject } from 'src/app/interfaces/movieNowPlaying';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}
  getMovieNowPlaying(page = 1): Observable<RootObject> {
    return this.httpClient.get<RootObject>(
      `${environment.bareUrl}/movie/now_playing?api_key=${environment.apiKey}&page=${page}`,
      {
        headers: {
          Authorization: environment.accessToken,
        },
      }
    );
  }
}
