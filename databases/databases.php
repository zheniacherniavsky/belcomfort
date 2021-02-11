<?php

$par1_ip = "null";
$par2_name = "null";
$par3_p = "null";
$par4_db = "null";

$link = new mysqli($par1_ip, $par2_name, $par3_p, $par4_db);

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

?>