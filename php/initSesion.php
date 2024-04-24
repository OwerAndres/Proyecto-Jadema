<?php
session_start();
include "functions.php";
include "utilitys.php";

$response = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $email = $_POST["email"];
    $pwd = $_POST["password"];

    if ($email == "" || $pwd == "") {
        $response["error"] = "Ningún campo puede estar vacío";
    } else {
        try {
            $conexionBD = new PDO("$host;dbname=jadema", $user, $password);
            $conexionBD->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $initseccion = $conexionBD->prepare("SELECT * FROM usuarios WHERE correo = ? AND pwd = ?");
            $initseccion->bindParam(1, $email);
            $initseccion->bindParam(2, $pwd);
            $initseccion->execute();
            $result = $initseccion->fetchAll(PDO::FETCH_ASSOC);

            if ($result) {
                foreach ($result as $filas) {
                    $_SESSION["userID"] = $filas["id"];
                    $_SESSION["userName"] = $filas["usuario"];
                    $_SESSION["userEmail"] = $filas["correo"];
                }
                $response["success"] = true;
            } else {
                $response["error"] = "Credenciales incorrectas";
            }
        } catch (PDOException $e) {
            $response["error"] = "Error: " . $e->getMessage();
        }
    }
    echo json_encode($response);
}
?>
