<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Header: Origin, Content-Type");

include_once ("db.connect.php");

$sql = "SELECT * FROM employee WHERE emp_pf = 8705";

$result = mysql_query($conn, $sql);

if(mysqli_num_rows($result)>0){
    $outp = array();
    $outp = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($outp);
}else{
    echo json_encode("0 result");
}

$conn->close();

?>