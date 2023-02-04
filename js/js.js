let boton = document.getElementById("boton");
let nav=document.getElementById("nav");

boton.addEventListener("click", function(){
    let val=nav.classList.toggle("activo")
    localStorage.setItem("boton",val)
})

let valor=localStorage.getItem("activo")

if (valor=="true") {
    nav.classList.add("activo")
} else {
    nav.classList.remove("activo")
}