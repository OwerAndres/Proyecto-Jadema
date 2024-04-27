//----------------Cargar productos en el mini catalogo
// Función para cargar y mostrar productos
function mostrarProductos(productos) {
    $('.sample_catalog_products').empty(); // Limpiar el contenedor de productos

    // Iterar sobre los primeros diez productos o menos si hay menos de diez
    for (let i = 0; i < Math.min(productos.length, 10); i++) {
        const producto = productos[i];
        var urls = producto.imgURL.split(" ");
        var imgUrl = urls[0];

        var card = $('<div class="col">');
        var cardContent = $('<div class="card m-2" style="width: 11rem;">');
        var img = $('<img src="' + imgUrl + '" class="card-img-top" alt="Cropt Tops">');
        var cardBody = $('<div class="card-body">');
        var title = $('<h5 class="card-title name_p_recommended" id="sample_catalog_nameP' + (i+1) + '">' + producto.nombre + '</h5>');
        var price = $('<h5 class="card-subtitle price_p_recommended" id="sample_catalog_priceP' + (i+1) + '">$' + producto.precio + '</h5>');

        cardBody.append(title);
        cardBody.append(price);
        cardContent.append(img);
        cardContent.append(cardBody);
        card.append(cardContent);

        $('.sample_catalog_products').append(card);
    }

    var buttonCatalog = $('<div class="text-center button_catalog">');
    var button = $('<button type="button" class="btn"><a href="catalogo.html">Catálogo</a></button>');
    buttonCatalog.append(button);
    $('.sample_catalog_products').append(buttonCatalog);
}


// Función cargar 10 productos
function cargarProductos() {
    $.ajax({
        url: 'php/catalogo.php',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            mostrarProductos(response.slice(0, 10));
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
}


$(document).ready(function () {
    cargarProductos(); // Llama a la función para cargar los productos cuando el documento esté listo
});

//-----------------inicio de sesion---------------

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


//---------------------Slider infinito ------------------------------
//Clone de infiniti slider
var copy = document.querySelector(".logos_slider").cloneNode(true)
document.querySelector(".logos").appendChild(copy);

//Cuadro inicio de sesion
var initSesion = document.getElementById("initSesion");
initSesion.addEventListener("click", boxSessionRemoveShow);
window.addEventListener("click", boxSessionAddShow);

//Comprobar sesion
document.getElementById("formSesion").addEventListener("submit", verificarSesion);
