//----------------Cargar productos----------------
$(document).ready(function() {
    $.ajax({
        url: 'php/catalogo.php', // Ruta al archivo PHP que contiene la consulta
        type: 'GET',
        dataType: 'json', 
        success: function(response) {
            response.forEach(function(producto) {
                // Dividir la cadena de URL de imagen si hay más de una URL
                var urls = producto.imgURL.split(" ");
                var imgUrl = urls[0];

                // Crear elementos HTML para la tarjeta de producto
                var card = $('<div class="card m-2" style="width: 15rem;">');
                var img = $('<img src="' + imgUrl + '" class="card-img-top" alt="Products">');
                var cardBody = $('<div class="card-body">');
                var title = $('<h5 class="card-title card_product_name" id="card_product_name">' + producto.nombre + '</h5>');
                var price = $('<h5 class="card-subtitle card_price" id="card_price">$' + producto.precio + '</h5>');

                card.append(img);
                cardBody.append(title);
                cardBody.append(price);
                card.append(cardBody);

                $('.catalog_products').append(card);
            });
        },
        error: function(xhr, status, error) {
            console.error(error); 
        }
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

//Funcion botonoes para aplicar todos los filtros 
function prueba() {
    alert("hola");
}


//Cuadro inicio de sesion
var initSesion = document.getElementById("initSesion");
initSesion.addEventListener("click", boxSessionRemoveShow);
window.addEventListener("click", boxSessionAddShow);

//remove hidden catalog (Ver mas)
var VerMasButton = document.getElementById("verMasButton");
VerMasButton.addEventListener("click",removeHidden);

//Botones para aplicar todos los filtros seleccionados
var btnAplicarFiltros = document.getElementById("aplicarFiltros");
btnAplicarFiltros.addEventListener("click",prueba);
var btnLimpiarFiltros = document.getElementById("limpiarFiltros");
btnLimpiarFiltros.addEventListener("click",prueba);