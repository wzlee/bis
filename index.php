<!DOCTYPE HTML>
<?php include_once("php/connection.php");?>
<?php session_start();
	if(isset($_SESSION['userid'])) {
		//initialize session userid to variable userid
		echo "<script type = 'text/javascript'> var userid = '" .$_SESSION['userid']. "';</script>";
	} else {
		echo "<script type = 'text/javascript'> var userid = 0;</script>";	
	}	
?>

<html>
<head>

    <title>project_app</title>
    <link rel="stylesheet" type="text/css" href="../ext-4.2/resources/css/ext-all.css">
    <script type="text/javascript" src="../ext-4.2/ext-debug.js"></script>
    <link rel="stylesheet" type="text/css" href="resources/css/app.css">
    <script type="text/javascript" src="app.js"></script>
    
</head>
<body class='icon-square'> 
</body>
</html>