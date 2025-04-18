import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tv } from '../../models/tv.populares.model';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-tv-populares',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './tv-populares.component.html',
  styleUrl: './tv-populares.component.css'
})
export class TvPopularesComponent implements OnInit{

  tvs: Tv[] = [];
  loading: boolean = true;
  page: number = 1;

  constructor(private apiService: ApiService, private el: ElementRef){}

  ngOnInit(): void {
      this.cargarTv();
  }

  cargarTv(): void{
    this.loading = true;
    this.apiService.getListTv(this.page).subscribe({
      next: (data) => {
        const newMovies = this.page === 1 ? data.results : [...this.tvs, ...data.results];
        this.tvs = newMovies;

        setTimeout(() => {
          const tvsCards = this.el.nativeElement.querySelectorAll('.tv-card');
          tvsCards.forEach((card: HTMLElement) => {
            card.classList.add('show');
          });
        }, 100);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar programas de tv', error);
        this.loading = false;
      }
    });
  }

  cargarMas(): void{
    this.page++;
    this.cargarTv();
    this.loading = false;
  }

  onImageLoad(tv: Tv): void{
    tv.imageLoaded = true;
  }

  onImageError(tv: Tv): void{
    tv.retryCount = (tv.retryCount || 0) + 1;

    if(tv.retryCount <= 3){
      setTimeout(() => {
        const timestamp = new Date().getTime();
        tv.poster_path = tv.poster_path.split('?') [0] + '?retry=' + tv.retryCount + '&t=' + timestamp;
      },1000);
    } else{
      tv.imageLoaded = true;
      tv.poster_path = '/assets/image-not-found.png'; // Asegúrate de tener esta imagen en assets
    }

  }

}
