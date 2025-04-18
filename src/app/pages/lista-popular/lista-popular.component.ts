import { Component, OnInit, ElementRef } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Movie } from '../../models/movie.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiBuscarServiceService } from '../../services/api/api.buscar.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-popular',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './lista-popular.component.html',
  styleUrls: ['./lista-popular.component.css']
})
export class ListaPopularComponent implements OnInit {
  movies: Movie[] = [];
  loading: boolean = true;
  page: number = 1;

  constructor(
    private apiService: ApiService,
    private apiBusqueda: ApiBuscarServiceService,
    private el: ElementRef,
    private router: Router
  ) {}
  
  
  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.loading = true;
    this.apiService.getListMovies(this.page).subscribe({
      next: (data) => {
        const newMovies = this.page === 1 ? data.results : [...this.movies, ...data.results];
        this.movies = newMovies;

        setTimeout(() => {
          const movieCards = this.el.nativeElement.querySelectorAll('.movie-card');
          movieCards.forEach((card: HTMLElement) => {
            card.classList.add('show');
          });
        }, 100);
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar películas:', err);
        this.loading = false;
      }
    });
  }

  loadMore(): void {
    this.page++;
    this.loadMovies();
    this.loading = false;
  }

  onImageLoad(movie: Movie): void {
    movie.imageLoaded = true;
  }

  onImageError(movie: Movie): void {
    movie.retryCount = (movie.retryCount || 0) + 1;

    if (movie.retryCount <= 3) {
      setTimeout(() => {
        // Fuerza recarga de la imagen
        const timestamp = new Date().getTime();
        movie.poster_path = movie.poster_path.split('?')[0] + '?retry=' + movie.retryCount + '&t=' + timestamp;
      }, 1000);
    } else {
      movie.imageLoaded = true;
      movie.poster_path = '/assets/image-not-found.png'; // Asegúrate de tener esta imagen en assets
    }
  }

  getMovieDetails(movieId: number): void {
    this.router.navigate(['/detalle', movieId]);
  }

}

