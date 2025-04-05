import { Component, OnInit, AfterViewChecked, ElementRef } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Movie } from '../../models/movie.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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

  constructor(private apiService: ApiService, private el: ElementRef) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  cargarMovies(): void{
      this.apiService.getListMovies().subscribe({
        next: (data) =>{
          console.log('Tv Populares cargadas: ', data);

          const newMovies = this.page === 1 ? data.results : [...this.movies, ...data.results];
          this.movies = newMovies;
          this.loading = false;
        },
        error: (err) =>{
          console.error('Error al cargar peliculas: ', err);
          this.loading = false;
        }
      });
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

}
