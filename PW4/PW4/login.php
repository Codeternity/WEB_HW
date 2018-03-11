<?php
    if (empty($_POST["name"]) || empty($_POST["username"])|| empty($_POST['password'])) {
			header('location: login.html');
			exit();
    }
    else {
			session_start();
			$_SESSION["name"] = $_POST["name"];
	    $_SESSION["username"] = $_POST["username"];

	    session_write_close();
	    header("location: welcome.php");
		}
?>
