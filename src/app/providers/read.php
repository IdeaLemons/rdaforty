<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Header: Origin, Content-Type");

error_reporting(E_ALL ^ E_DEPRECATED);

$servername = "remotemysql.com";
$username = "5Ea0Iz30dA";
$password = "ScAzwQ1DYC";
$dbname = "5Ea0Iz30dA";

$connection = mysqli_connect($servername,$username,$password,$dbname);

if($connection->connect_error){
    die("Connection failed " . $connection->connect_error);
}

$result = mysqli_query($connection, 'SELECT * FROM cncities WHERE id = 4046255');

if(mysqli_num_rows($result)>0){
    $outp = array();
    $outp = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($outp);
}else{
    echo json_encode("0 result");
}

$connection->close();

?>