document.addEventListener('DOMContentLoaded', function () {
    // Sección del Slider de la página principal
    const masInfo1 = document.getElementById('masInfo1');
    const masInfo2 = document.getElementById('masInfo2');
    const masInfo3 = document.getElementById('masInfo3');

    if (masInfo1 && masInfo2 && masInfo3) {
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
    }

    const tarjetasSection = document.getElementById('tarjetas-section');
    const titulos = ["Películas del momento:", "Mejor en familia:", "Más vistos esta semana:", "Imprescindibles:"];

    // Obtener índices aleatorios de películas
    const usedIndexes = new Set(); // Usamos un Set para almacenar los índices ya utilizados

    for (let j = 0; j < 4; j++) {
        const title = document.createElement('h2');
        title.classList.add('titulo-recomendacion');
        title.textContent = titulos[j];

        const br = document.createElement('br');
        tarjetasSection.appendChild(title);
        tarjetasSection.appendChild(br);

        const randomMovieIndexes = []; // Reiniciamos el array para cada sección
        for (let i = 0; i < 6; i++) {
            let isRepeated = true;
            // Generar índices aleatorios no repetidos
            do {
                let randomIndex = Math.floor(Math.random() * peliculas.length);
                if (!usedIndexes.has(randomIndex)) {
                    randomMovieIndexes.push(randomIndex);
                    usedIndexes.add(randomIndex); // Añadimos el índice al conjunto
                    isRepeated = false;
                }
            } while (isRepeated);
        }
        // Crear tarjetas de películas utilizando los índices aleatorios
        const movieRow = document.createElement('section');
        movieRow.classList.add('fila-peliculas');

        let contador = 0;
        // Bucle foreach para crear las tarjetas de películas
        randomMovieIndexes.forEach(index => {
            const movieElement = document.createElement('section');
            movieElement.classList.add('peli-recomendada');

            if (contador < 3) {
                contador++;
                movieElement.classList.add('oculto');
            }

            const movie = peliculas[index];
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
            movieRow.appendChild(movieElement);
        });
        tarjetasSection.appendChild(movieRow);

        const hr = document.createElement('hr');
        hr.classList.add('linea-separadora');
        tarjetasSection.appendChild(hr);
    }
});

function redirigirAPelicula(index) {
    localStorage.setItem("movieIndex", index);
    window.location.href = 'pelicula.html';
}
