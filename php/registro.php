<?php
session_start();
include "functions.php";
include "utilitys.php";

$nombre = $_POST["nombre"];
$apellido1 = $_POST["apellido"];
$telefono = $_POST["telefono"];
if ($apellido2 = $_POST["apellido2"] == "") {
    $apellido2 = "";
}else{
    $apellido2 = $_POST["apellido2"];
}
$email = $_POST["email"];
$nameUser = $_POST["user"];
$pwd = $_POST["passwordR"];
$pwd2 = $_POST["password2R"];

if ($nombre !== "" && $apellido1 !== "" && $telefono !== "" && $email !== "" && $nameUser !== "" && $pwd!== "" && $pwd2!== "") {
    if (!compNombre($nombre)) {
        echo "Introduce un nombre válido";
        return;
    }

    if (!compApellidos($apellido1)) {
        echo "En proceso";
        return;
    }

    if (!compTelefono($telefono)) {
        echo "En proceso";
        return;
    }

    if (!compEmail($email)) {
        echo "En proceso";
        return;
    }

    if (!compPassword($pwd) || !compPassword($pwd2)) {
        echo "En proceso";
        return;
    }

    if ($pwd !== $pwd2) {
        echo "En proceso";
        return;
    }
    
} else {
    echo "En proceso";
    return;
}

try {
    $conexionBD = new PDO("$host;dbname=jadema",$user,$password);
    $conexionBD->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

    $insertRegisterUser = $conexionBD->prepare("insert into usuarios(nombre,apellido,apellidoDos,telefono,correo,usuario,pwd) value(?,?,?,?,?,?,?);");
        $insertRegisterUser->bindParam(1,$nombre);
        $insertRegisterUser->bindParam(2,$apellido1);
        $insertRegisterUser->bindParam(3,$apellido2);
        $insertRegisterUser->bindParam(4,$telefono);
        $insertRegisterUser->bindParam(5,$email);
        $insertRegisterUser->bindParam(6,$nameUser);
        $insertRegisterUser->bindParam(7,$pwd);
            
            $result = $insertRegisterUser->execute();
        if ($result) {
            header("Location: http://localhost/Ower/Proyecto-Jadema/index.html");
        } else {
            echo "Hubo un error en la inserción.";
        }
        $conexionBD = null;
} catch (PDOException $e) {
    echo "Error ".$e->getMessage()."<br>";
    die();
}


?>