// Función para cargar productos 
$(document).ready(function () {
    cargarProductos();
});

// Función para cargar productos
function cargarProductos() {
    $.ajax({
        url: 'php/catalogo.php',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            mostrarProductos(response);
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
}

// Función para formatear el precio con un punto manualmente
function formatearPrecio(precio) {
    var precioFormateado = precio.toString();
    var longitud = precioFormateado.length;
    if (longitud > 3) {
        precioFormateado = precioFormateado.slice(0, longitud - 3) + '.' + precioFormateado.slice(longitud - 3);
    }
    return precioFormateado;
}

// Mostrar productos en el catalogo
function mostrarProductos(productos) {
    $('.catalog_products').empty(); 

    productos.forEach(function (producto) {
        var urls = producto.imgURL.split(" ");
        var imgUrl = urls[0];

        var card = $('<div class="card m-2" style="width: 15rem;">');
        var img = $('<img src="' + imgUrl + '" class="card-img-top" alt="Products">');
        var cardBody = $('<div class="card-body">');
        var title = $('<h5 class="card-title card_product_name" id="card_product_name">' + producto.nombre + '</h5>');
        var precioFormateado = formatearPrecio(producto.precio.toString());
        var price = $('<h5 class="card-subtitle card_price" id="card_price">$' + precioFormateado + '</h5>');

        card.append(img);
        cardBody.append(title);
        cardBody.append(price);
        card.append(cardBody);

        $('.catalog_products').append(card);
    });
}


// Función para aplicar filtros
window.addEventListener('load', function () {
    const rangeOutput = document.getElementById("rangeOutput");
    const rangeInput = document.getElementById("rangeInput");
    rangeOutput.textContent = rangeInput.value;
    rangeInput.addEventListener("input", (event) => {
        rangeOutput.textContent = event.target.value;
    });

    document.getElementById('aplicarFiltros').addEventListener('click', function () {
        var filtrosSelect = [];

        var checkboxes = document.querySelectorAll('.check_product input[type="checkbox"]');
        checkboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                filtrosSelect.push(checkbox.value);
            }
        });

        var precio = rangeInput.value;
        filtrosSelect.push('Precio: ' + precio);

        // Envío de filtros por medio de fetch
        fetch('php/catalogo.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ filtros: filtrosSelect })
        })
        .then(response => response.json())
        .then(data => {
            mostrarProductos(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

//----------------Funcion ver mas catalogo---------
function removeHidden() {
    var catalog = document.getElementById("catalog_products");
    catalog.classList.add("heightAuto");
}


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


//----------------------Filtros pagina catalogo------------------

//Funcio filtro de rango de precio 
window.addEventListener("load", function () {
    const rangeOutput = document.getElementById("rangeOutput");
    const rangeInput = document.getElementById("rangeInput");
    rangeOutput.textContent = rangeInput.value;
    rangeInput.addEventListener("input", (event) => {
        rangeOutput.textContent = event.target.value;
    });
})


//Funcion para limipiar filtros
document.getElementById('limpiarFiltros').addEventListener('click', function () {
    var checkboxes = document.querySelectorAll('.check_product input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });

    rangeInput.value = rangeInput.getAttribute('min');
    rangeOutput.textContent = rangeInput.value;

    cargarProductos();
});

function cargarProductos() {
    $.ajax({
        url: 'php/catalogo.php',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            mostrarProductos(response);
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
}

//-----------Filtro precio mayor o menor--------------------
document.getElementById('ordenar').addEventListener('change', function () {
    var orden = this.value;
    fetch('php/catalogo.php?orden=' + orden)
        .then(response => response.json())
        .then(data => {
            mostrarProductos(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

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

//Cuadro inicio de sesion
var initSesion = document.getElementById("initSesion");
initSesion.addEventListener("click", boxSessionRemoveShow);
window.addEventListener("click", boxSessionAddShow);

//remove hidden catalog (Ver mas)
var VerMasButton = document.getElementById("verMasButton");
VerMasButton.addEventListener("click", removeHidden);






