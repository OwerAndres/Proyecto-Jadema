<?php

    //Comprobar secciones formulario de registro
    function compNombre($nombre) {
        $expre = '/^[a-zA-Z ]+$/'; //Comprobar que solo hay letras y un espacio 
        if (preg_match($expre, $nombre)) {
            return true;
        }else{
            return false;
        }
    }

    function compApellidos($apellido) {
        $expre = '/\d/'; //Comprobar que solo halla letras
        if(preg_match($expre, $apellido)){
            return true;
        }else{
            return false;
        }
    }

    function compTelefono($telefono) {
        $expre = '/^\d{10}$/'; //comprobar que solo hallan 10 digitos
        if(preg_match($expre, $telefono)){
            return true;
        }else{
            return false;
        }
    }

    function compEmail($email) {
        $expre = '/@(gmail|hotmail)\.com$/'; //comprbar que los email contengan el patron anterior
        if (preg_match($expre, $email)) {
            return true;
        }else{
            return false;
        }
    }

    function compPassword($password){
        /**Comprobar que la contraseañ sigue el siguiente patron
         * -8 caracteres como minmo
         * -mayusculas y minusculas
         * -caracteres especiales
         */
        $expre = '/^(?=.*[@_\.])(?=.*[a-z])(?=.*[A-Z]).{8,}$/';
        if(preg_match($expre, $password)){
            return true;
        }else{
            return false;
        }
    }
?>