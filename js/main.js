// Guardo el estado de la columna activa
let columnaActiva = 1;

// Selecciono las columnas
const columnas = document.querySelectorAll(".columna");

/**
 * Cambio el estado de las columnas, segun se haga click en ellas
 *
 * A la columna activa por defecto, le borro el estado activa
 * A la columna CLICADA le añado el estado "activa"
 * Asocio a la variable columnaActiva el indice de la columna clicada
 */
function cambiarColumna(indice) {
  columnas[columnaActiva].classList.remove("activa");
  columnas[indice].classList.add("activa");
  columnaActiva = indice;
}

/**
 * En las columnas
 * Escucho el evento click
 * Cuando haga click en cada una muestro en consola cual es clicada
 * guardo el indice de la columna activa "clicada" en cambiarColumna
 *
 */
columnas.forEach((columna, indice) => {
  columna.addEventListener("click", function () {
    console.log(columna, indice);
    cambiarColumna(indice);
  });
});
