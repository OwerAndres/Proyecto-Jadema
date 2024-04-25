<?php
    session_start();
    include "functions.php";
    include "utilitys.php";

  
    try {
        $conexionBD = new PDO("$host;dbname=jadema",$user,$password);
        $conexionBD->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    
        $selectProducts = $conexionBD->prepare("select*from productos");
        $selectProducts->execute();
        $result = $selectProducts->fetchAll(PDO::FETCH_ASSOC); // Cambiado a FETCH_ASSOC para obtener un array asociativo
    
        // Imprimir los resultados en formato JSON
        header('Content-Type: application/json');
        echo json_encode($result);
    } catch (PDOException $e) {
        // Manejar errores de conexión a la base de datos
        echo json_encode(array('error' => $e->getMessage()));
    }
    


?>