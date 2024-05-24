
document.addEventListener('DOMContentLoaded', function () {
    // Sección del Slider de la página principal
    const masInfo1 = document.getElementById('masInfo1');
    const masInfo2 = document.getElementById('masInfo2');
    const masInfo3 = document.getElementById('masInfo3');
    // Agregar listeners a los botones "Más Información" y pasar el índice de la película del slider
    masInfo1.addEventListener('click', function () {
        redirigirAPelicula(10);
    });

    masInfo2.addEventListener('click', function () {
        redirigirAPelicula(9);
    });

    masInfo3.addEventListener('click', function () {
        redirigirAPelicula(11);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const tarjetasSection = document.getElementById('tarjetas-section');
    tarjetasSection.innerHTML = '';

    // Obtener índices aleatorios de películas
    const randomMovieIndexes = [];
    for (let i = 0; i < 4; i++) {
        let isRepeated = false;
        while (!isRepeated) {
            let randomIndex = Math.floor(Math.random() * peliculas.length);
            if (!randomMovieIndexes.includes(randomIndex)) {
                randomMovieIndexes.push(randomIndex);
                isRepeated = true;
            }
        }
    }

    // Crear tarjetas de películas utilizando los índices aleatorios
    randomMovieIndexes.forEach(index => {
        const movie = peliculas[index];
        const movieElement = document.createElement('section');
        movieElement.classList.add('peli-recomendada');

        const movieImage = document.createElement('img');
        movieImage.classList.add('portada-recomendacion');
        movieImage.src = movie[2];
        movieImage.alt = 'Portada de ' + movie[0];

        // Agregar un listener al clicar la imagen para redirigir a la página de la película
        movieImage.addEventListener('click', function () {
            localStorage.setItem("movieIndex", index);
            window.location.href = 'pelicula.html';
        });

        movieElement.appendChild(movieImage);
        tarjetasSection.appendChild(movieElement);
    });
});

function redirigirAPelicula(index) {
    localStorage.setItem("movieIndex", index);
    window.location.href = 'pelicula.html';
}




