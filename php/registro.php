<?php

include "functions.php";
include "./utilitys.php";

$nombre = $_POST["nombre"];
$apellido1 = $_POST["apellido"];
$apellido2 = $_POST["apelllido2"];
$telefono = $_POST["telefono"];
$email = $_POST["email"];
$nameUser = $_POST["user"];
$pdw = $_POST["password"];
$pwd2 = $_POST["password2"];

if ($nombre !== "" && $apellido1 !== "" && $telefono !== "" && $email !== "" && $nameUser !== "" && $pwd!== "" && $pwd2!== "") {
    if (!compNombre($nombre)) {
        echo "Introduce un nombre válido";
        return;
    }

    if (!compApellidos($apellido1) || !compApellidos($apellido2)) {
        echo "Introduce un apellido válido";
        return;
    }

    if (!compTelefono($telefono)) {
        echo "Introduce un número de teléfono válido";
        return;
    }

    if (!compEmail($email)) {
        echo "Introduce una dirección de correo válida";
        return;
    }

    if (!compPassword($pwd) || !compPassword($pwd2)) {
        echo "La contraseña debe incluir como mínimo 8 caracteres, un carácter especial (@, _, .) y tener al menos una mayúscula y una minúscula";
        return;
    }

    if ($pwd !== $pwd2) {
        echo "Las contraseñas no coinciden";
        return;
    }
    
} else {
    echo "Ningún campo puede estar vacío";
    return;
}

try {
    $conexionBD = new PDO("$host;dbname=jadema",$user,$password);
    $conexionBD->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

    $insertRegisterUser = $conexionBD->prepare("insert into usuarios(nombre,apellido,apellidoDos,telefono,correo,usuario,pwd values(?,?,?,?,?,?,?)");
        $insertRegisterUser->bindParam(1,$nombre);
        $insertRegisterUser->bindParam(2,$apellido1);
        $insertRegisterUser->bindParam(3,$apellido2);
        $insertRegisterUser->bindParam(4,$telefono);
        $insertRegisterUser->bindParam(5,$email);
        $insertRegisterUser->bindParam(6,$nameUser);
        $insertRegisterUser->bindParam(7,$pwd);
            
            $result = $insertRegisterUser->execute();
        if ($resultado) {
            $filasAfectadas = $insertDirecciones->rowCount();
            echo "Se insertaron $filasAfectadas datos <br>";
        } else {
            echo "Hubo un error en la inserción.";
        }

} catch (PDOException $e) {
    echo "Error ".$e->getMessage()."<br>";
    die();
}












?>