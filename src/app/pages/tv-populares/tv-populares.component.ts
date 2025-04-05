import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
      this.apiService.getListTv().subscribe({
        next: (data) => {
          console.log('Tv Populares cargadas: ', data);
          this.tvs = data.results;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error al cargar peliculas:', err);
          this.loading = false;
        }
      });
  }

}
