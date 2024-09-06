let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

// Función para avanzar al siguiente elemento
function goToNext() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
}

// Función para retroceder al elemento anterior
function goToPrev() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
}

// Configurar el intervalo para que avance automáticamente
let interval = setInterval(goToNext, 5000); // Cambia 5000 a la cantidad de milisegundos que quieras

// Opcional: Detener el intervalo cuando se haga clic en los botones
next.addEventListener('click', function () {
    goToNext();
    clearInterval(interval); // Detiene el carrusel automático
    interval = setInterval(goToNext, 5000); // Reinicia el intervalo
});

prev.addEventListener('click', function () {
    goToPrev();
    clearInterval(interval); // Detiene el carrusel automático
    interval = setInterval(goToNext, 5000); // Reinicia el intervalo
});



