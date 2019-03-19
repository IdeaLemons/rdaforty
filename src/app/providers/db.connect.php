<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Header: Origin, Content-Type");

$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "fourty";

$conn = mysql_connect($servername,$username,$password,$dbname);

if($conn->connect_error){
    die("Connection failed " . $conn->connect_error);
}

?>