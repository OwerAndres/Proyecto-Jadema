//------------------inicio de sesion---------------

//Funcion cuadro inicio de sesion
function boxSessionRemoveShow() {
    event.stopPropagation();
    var sesion = document.getElementById("sesion-show");
    sesion.classList.remove("sesion-show");
}
function boxSessionAddShow(event) {
    if (!event.target.matches('input')) {
        var sesion = document.getElementById("sesion-show");
        sesion.classList.add("sesion-show");
    }
}

//----------------------Filtros pagina catalogo------------------

window.addEventListener("load", function () {
    const rangeOutput = document.getElementById("rangeOutput");
    const rangeInput = document.getElementById("rangeInput");
    rangeOutput.textContent = rangeInput.value;
    rangeInput.addEventListener("input", (event) => {
        rangeOutput.textContent = event.target.value;
    });
})

//---------------------Slider infinito ------------------------------

//Clone de infiniti slider
var copy = document.querySelector(".logos_slider").cloneNode(true)
document.querySelector(".logos").appendChild(copy)

//Cuadro inicio de sesion
var initSesion = document.getElementById("initSesion");
initSesion.addEventListener("click", boxSessionRemoveShow);
window.addEventListener("click", boxSessionAddShow);

