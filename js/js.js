let boton = document.getElementById("boton");
let nav = document.getElementById("nav");

/* funcion para mostrar el menu */
function mostrarMenu(){
    nav.classList.toggle("activo")
    /* localStorage.setItem("boton", mostrar)   */ 
}

boton.addEventListener("click", mostrarMenu)

/* let valor=localStorage.getItem("activo")

if (valor=="true") {
    nav.classList.add("activo")
} else {
    nav.classList.remove("activo")
 */


