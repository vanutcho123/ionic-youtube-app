import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/movieNowPlaying';
import { MovieService } from 'src/app/services/movie/movie.service';
import { homeData } from 'src/app/utils/fetchData';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private movieService: MovieService) {}
  public dataMovieNowPlaying: Result[] = [];
  public baseImageUrl: string = '';
  ngOnInit() {
    this.baseImageUrl = environment.imageUrl;
    this.getDataMovieNowPlaying();
  }

  getDataMovieNowPlaying() {
    this.movieService.getMovieNowPlaying().subscribe({
      next: (res) => {
        console.log(res);
        this.dataMovieNowPlaying = res.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
