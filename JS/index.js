// Función para formatear el precio con un punto manualmente
function formatearPrecio(precio) {
    var precioFormateado = precio.toString();
    var longitud = precioFormateado.length;
    if (longitud > 3) {
        precioFormateado = precioFormateado.slice(0, longitud - 3) + '.' + precioFormateado.slice(longitud - 3);
    }
    return precioFormateado;
}

// Función para cargar y mostrar productos en el grid de dos columnas en móvil
function mostrarProductos(productos) {
    $('.sample_catalog_products').empty(); // Limpiar el contenedor de productos

    // Iterar sobre los primeros doce productos o menos si hay menos de doce
    for (let i = 0; i < Math.min(productos.length, 12); i++) {
        const producto = productos[i];
        var urls = producto.imgURL.split(" ");
        var imgUrl = urls[0];

        var card = $('<div class="col-lg-2 col-md-3 col-sm-6 col-6 mb-3">'); // Ajustar las clases de columnas para PC y móvil
        var cardContent = $('<div class="card m-2" style="width: 11rem;">');
        var img = $('<img src="' + imgUrl + '" class="card-img-top" alt="Cropt Tops">');
        var cardBody = $('<div class="card-body">');
        var title = $('<h5 class="card-title name_p_recommended" id="sample_catalog_nameP' + (i + 1) + '">' + producto.nombre + '</h5>');
        var precioFormateado = formatearPrecio(producto.precio.toString());
        var price = $('<h5 class="card-subtitle price_p_recommended" id="sample_catalog_priceP' + (i + 1) + '">$' + precioFormateado + '</h5>');

        cardBody.append(title);
        cardBody.append(price);
        cardContent.append(img);
        cardContent.append(cardBody);
        card.append(cardContent);

        $('.sample_catalog_products').append(card);
    }

    // Agregar el botón "Catálogo"
    var buttonCatalog = $('<div class="text-center button_catalog">');
    var button = $('<button type="button" class="btn"><a href="catalogo.html">Catálogo</a></button>');
    buttonCatalog.append(button);
    $('.sample_catalog_products').append(buttonCatalog);
}

// Función para cargar 12 productos
function cargarProductos() {
    $.ajax({
        url: 'php/catalogo.php',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            mostrarProductos(response.slice(0, 12));
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

//-------------------Funcion nav bar
window.addEventListener("load", function() {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navLinks = document.querySelectorAll(".navbar-nav .nav-item:nth-child(2), .navbar-nav .nav-item:nth-child(4)");

    navbarToggler.addEventListener("click", function() {
        navLinks.forEach(function(navLink) {
            navLink.classList.toggle("d-none");
        });
    });
});



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
