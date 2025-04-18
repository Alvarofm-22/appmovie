export interface Tv {
    id: number;
    name: string;                    // Título traducido
    original_name: string;          // Título original
    overview: string;               // Descripción
    poster_path: string;            // Imagen de portada
    backdrop_path: string;          // Imagen de fondo
    first_air_date: string;         // Fecha de estreno
    origin_country: string[];       // País de origen
    original_language: string;      // Idioma original
    genre_ids: number[];            // IDs de géneros
    popularity: number;             // Popularidad (útil para "tendencias")
    vote_average: number;           // Promedio de votos
    vote_count: number;             // Cantidad de votos
    adult: boolean;                 // Si es contenido para adultos
    imageLoaded?: boolean;
    retryCount?: number;
}

export interface TvCatalogResponse {
    page: number;
    results: Tv[];
}
