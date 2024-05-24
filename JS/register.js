// validacion formulario
function verificarFormularioRegistro() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('passwordR').value;
    var password2 = document.getElementById('password2R').value;

    if (!compNombre(nombre)) {
        alert('Error: Formato de nombre invalido');
        return false;
    }

    if (!compApellidos(apellido)) {
        alert('Error: Formato de apellido invalido');
        return false;
    }

    if (!compTelefono(telefono)) {
        alert('Error: Numero de telefono invalido');
        return false;
    }

    if (!compEmail(email)) {
        alert('Error: Correo invalido');
        return false;
    }

    if (!compPassword(password)) {
        alert('Error: Contraseña invalida');
        return false;
    }

    if (password !== password2) {
        alert('Error: Las contraseñas no coinciden.');
        return false;
    }

    return true;
}

document.getElementById('form_register').addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (verificarFormularioRegistro()) {
        this.submit();  
    }
});



function verPassword() {
    let input = document.getElementById("passwordR");
    if(input.type == "password"){
        input.type = "text";
    }else{
        input.type = "password";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let icon = document.getElementById("viewPassword");
    icon.addEventListener("click", verPassword);
});