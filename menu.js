const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

// Agregar un event listener a cada enlace de la lista para cerrar el menú
const enlaces = document.querySelectorAll(".nav-list a");

enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
        nav.classList.remove("visible");  // Cerrar el menú
    });
});


// Función para mostrar u ocultar la sección correspondiente
function mostrarSeccion(id) {
    var seccion = document.getElementById(id);
    if (seccion.style.display === 'block') {
        seccion.style.display = 'none'; // Si está visible, la ocultamos
    } else {
        seccion.style.display = 'block'; // Si está oculta, la mostramos
        seccion.scrollIntoView({ behavior: 'smooth' }); // Desplaza suavemente hacia la sección
    }
}