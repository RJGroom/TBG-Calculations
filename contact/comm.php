<?php

	$servername = "localhost";
	$dbname = "tbgcalcs";
	$dbusername = "root";
	$dbpassword = "";
  $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

  if($conn->connect_error)
  {
    die("Connection failed :( ". $conn->connect_error);
  }
  else
  {
    //echo "Connection Successful". "</br>"  ;
		
  }
  ?>
