
let currentIndex = 0;

// Function to get a random movie from the peliculas array
function getRandomMovie() {
    return peliculas[Math.floor(Math.random() * peliculas.length)];
}

// Function to render movies in the slider
function renderMovies() {
    const carrusel = document.getElementById('carrusel');
    carrusel.innerHTML = ''; // Clear previous movies

    // Render 3 random movies
    for (let i = currentIndex; i < currentIndex + 5; i++) {
        const movie = peliculas[i % peliculas.length];
        const movieElement = document.createElement('section');
        movieElement.classList.add('peli-recomendada');

        const movieImage = document.createElement('img');
        movieImage.classList.add('portada-recomendacion');
        movieImage.src = movie[2]; // Assuming the image URL is at index 2
        movieImage.alt = 'Portada de película'; // Assuming there's no alt text in the data

        movieElement.appendChild(movieImage);
        carrusel.appendChild(movieElement);
    }
}

// Function to handle next slide
function nextSlide() {
    currentIndex++;
    renderMovies();
}

// Function to handle previous slide
function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = peliculas.length - 1;
    }
    renderMovies();
}

// Initial render
renderMovies();