const boton = document.querySelector(".boton1")
const boton2 = document.querySelector(".boton2")
const menu = document.querySelector(".menu")

boton.addEventListener("click", () => {
    menu.classList.toggle("show-menu")
    boton.classList.toggle("toggleBoton1")
    boton2.classList.toggle("toggleBoton2")
})

boton2.addEventListener("click", () => {
    menu.classList.toggle("show-menu")
    boton.classList.toggle("toggleBoton1")
    boton2.classList.toggle("toggleBoton2")
})