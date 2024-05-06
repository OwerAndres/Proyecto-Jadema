<?php
session_start();
include "functions.php";
include "utilitys.php";

$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);

try {
    $conexionBD = new PDO("$host;dbname=jadema", $user, $password);
    $conexionBD->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($data !== null && isset($data['filtros'])) {
        // Acceder a los filtros del JSON
        $filtros = $data['filtros'];

        $consulta = "SELECT * FROM productos WHERE 1";

        $valoresCategoria = array();

        foreach ($filtros as $filtro) {
            if (!in_array($filtro, ['camiseta', 'crop tops', 'negro', 'blanco'])) {
                $valoresCategoria[] = $filtro;
            }
        }

        // Clausula WHERE pre diseñada para cuando se haya marcado una categoría
        if (!empty($valoresCategoria)) {
            $placeholders = implode(', ', array_fill(0, count($valoresCategoria), '?'));
            $consulta .= " AND categoria IN ($placeholders)";
        }

        $statement = $conexionBD->prepare($consulta);

        // Añadir los valores de las categorías
        $index = 1;
        foreach ($valoresCategoria as $valor) {
            $statement->bindValue($index++, $valor);
        }

        $statement->execute();
        $resultados = $statement->fetchAll(PDO::FETCH_ASSOC);

        if (!empty($resultados)) {
            echo json_encode($resultados);
        } else {
            echo "No se encontraron resultados.";
        }
    } else {
        // Si no se recibieron datos de filtros, cargar todos los productos
        $selectProducts = $conexionBD->prepare("SELECT * FROM productos");
        $selectProducts->execute();
        $result = $selectProducts->fetchAll(PDO::FETCH_ASSOC);

        // Imprimir los resultados en formato JSON
        header('Content-Type: application/json');
        echo json_encode($result);
    }

    $conexionBD = null;
} catch (PDOException $e) {
    echo json_encode(array('error' => $e->getMessage()));
    die();
}
?>
