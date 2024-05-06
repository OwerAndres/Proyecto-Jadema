function compNombre(nombre) {
    var expre = /^[a-zA-Z ]+$/; // Comprobar que solo hay letras y un espacio 
    return expre.test(nombre);
}

function compApellidos(apellido) {
    var expre = /^[a-zA-Z]+$/; // Comprobar que solo haya letras
    return expre.test(apellido);
}

function compTelefono(telefono) {
    var expre = /^\d{10}$/; // Comprobar que solo haya 10 dígitos
    return expre.test(telefono);
}

function compEmail(email) {
    var expre = /@(gmail|hotmail)\.com$/; // Comprobar que los correos contengan el patrón especificado
    return expre.test(email);
}

function compPassword(password) {
    // Comprobar que la contraseña siga el siguiente patrón:
    // - 8 caracteres como mínimo y máximo 12
    // - Mayúsculas y minúsculas
    // - Caracteres especiales
    var expre = /^(?=.*\W)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;
    return expre.test(password);
}