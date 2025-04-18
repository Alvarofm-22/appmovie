import { Component, OnInit } from '@angular/core';
import { DetailedMovie, Movie } from '../../models/movie.model';
import { ActivatedRoute } from '@angular/router';
import { ApiBuscarServiceService } from '../../services/api/api.buscar.service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-detalle-peliculas',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './detalle-peliculas.component.html',
  styleUrl: './detalle-peliculas.component.css'
})
export class DetallePeliculasComponent implements OnInit {

  movie?: DetailedMovie;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private apiBuscar: ApiBuscarServiceService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiBuscar.getMovieById(id, 'es-ES').subscribe({
      next: (data) => {
        this.movie = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener detalles de la película', err);
        this.loading = false;
      }
    });
  }

}
