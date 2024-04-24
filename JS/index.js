//------------------Registro-----------------------
//Funcion ver contraseña

var img = document.getElementById("eyeIcon");
var eyeIconClick = 0;
function eyeIcon() {
    eyeIconClick = eyeIconClick + 1;
    if (eyeIconClick % 2 != 0) {
        img.setAttribute("src", "icons/icons8-visible-32.svg");
    } else {
        img.setAttribute("src", "icons/icons8-invisible-32.svg")
    }
}



//------------------inicio de sesion---------------

//Funcion cuadro inicio de sesion
function boxSessionRemoveShow(e) {
    e.stopPropagation();
    var sesion = document.getElementById("sesion-show");
    sesion.classList.remove("sesion-show");
}
function boxSessionAddShow(event) {
    if (!event.target.matches('input')) {
        var sesion = document.getElementById("sesion-show");
        sesion.classList.add("sesion-show");
    }
}

//Funcion comprobar sesion activa 
function verificarSesion(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', './php/initSesion.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.success) {
                    console.log('Sesión activa');
                } else {
                    console.log(response.error);
                }
            } else {
                console.error('Error al verificar la sesión');
            }
        }
    };
    xhr.send('email=' + email + '&password=' + password);
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

//Comprobar sesion
document.getElementById("formSesion").addEventListener("submit", verificarSesion);

//Mostrar password
document.getElementById("eyeIcon").addEventListener("click", eyeIcon);
