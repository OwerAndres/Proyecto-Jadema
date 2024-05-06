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
        $expre = '/^[a-zA-Z]+$/'; //Comprobar que solo halla letras
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
         * -8 caracteres como minmo maximo 12
         * -mayusculas y minusculas
         * -caracteres especiales
         */
        $expre = '/^(?=.*\W)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/';
        if(preg_match($expre, $password)){
            return true;
        }else{
            return false;
        }
    }

    function imprimir($select){
        foreach ($select as $x) {
            foreach ($x as $y) {
                echo $y . " ";
            }
            echo "<br>";
        }
    }
?>