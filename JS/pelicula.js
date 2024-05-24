function loadMovie() {
    // Obtiene los elementos de la página.
    var title = document.getElementById("peli-title");
    var cover = document.getElementById("peli-portada");
    var link = document.getElementById("trailer-link");
    var trailer = document.getElementById("peli-trailer");
    var fecha = document.getElementById("peli-estreno");
    var director = document.getElementById("peli-director");
    var valoracion = document.getElementById("peli-valoracion");
    var sinopsis = document.getElementById("peli-sinopsis");

    // Selecciona el índice de la película a mostrar del alamacenamiento interno.
    var movieIndex = localStorage.getItem("movieIndex");
    var pelicula = peliculas[movieIndex];

    // Cambia la información de la página en función de la película seleccionada.
    document.title = "Película - " + pelicula[0];
    title.textContent = pelicula[0];
    link.href = pelicula[1];
    trailer.src = pelicula[1];
    cover.src = pelicula[2];
    fecha.textContent = pelicula[3];
    director.textContent = pelicula[4];
    valoracion.textContent = pelicula[5];
    sinopsis.textContent = pelicula[6];
}

document.addEventListener('DOMContentLoaded', function() {
    loadMovie();
});
