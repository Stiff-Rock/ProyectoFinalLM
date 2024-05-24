let currentIndex = 0;

function renderMovies() {
    const carrusel = document.getElementById('carrusel');
    carrusel.innerHTML = '';

    let j = 0;
    for (let i = 0; i < 5; i++) {
        const movieIndex = (currentIndex + i) % peliculas.length;
        const movie = peliculas[movieIndex];
        const movieElement = document.createElement('section');
        movieElement.classList.add('peli-recomendada');

        if (j < 3) {
            movieElement.classList.add('portada-exceso');
            j++;
        }

        const movieImage = document.createElement('img');
        movieImage.classList.add('portada-recomendacion');
        movieImage.src = movie[2];
        movieImage.alt = 'Portada de ' + movie[0];

        movieImage.addEventListener('click', function() {
            localStorage.setItem("movieIndex", movieIndex);
            window.location.href = 'pelicula.html';
        });

        movieElement.appendChild(movieImage);
        carrusel.appendChild(movieElement);
    }
}

function nextSlide() {
    currentIndex++;
    renderMovies();
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = peliculas.length - 1;
    }
    renderMovies();
}

document.addEventListener('DOMContentLoaded', function() {
    renderMovies();
});
