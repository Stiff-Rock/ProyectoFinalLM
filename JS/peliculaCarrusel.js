
let currentIndex = 0;

function getRandomMovie() {
    return peliculas[Math.floor(Math.random() * peliculas.length)];
}

function renderMovies() {
    const carrusel = document.getElementById('carrusel');
    carrusel.innerHTML = ''; 
}

function renderMovies() {
    const carrusel = document.getElementById('carrusel');
    carrusel.innerHTML = '';

    for (let i = currentIndex; i < currentIndex + 5; i++) {
        const movie = peliculas[i % peliculas.length];
        const movieElement = document.createElement('section');
        movieElement.classList.add('peli-recomendada');

        const movieImage = document.createElement('img');
        movieImage.classList.add('portada-recomendacion');

        movieImage.src = movie[2];
        movieImage.alt = 'Portada de película';

        movieImage.src = movie[2];
        movieImage.alt = 'Portada de película';

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

renderMovies();