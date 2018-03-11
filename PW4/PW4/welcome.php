<?php
  session_start();
  if (!isset($_SESSION["name"]) || !isset($_SESSION["username"])){
  	header ("location: login.html");
  }
?>
<!DOCTYPE html>
<html>
<head>
	<title>Welcome Page</title>
	<style type="text/css">
		div{
			text-align: center;
		}
	</style>
</head>
<body>
	<div>
		<?php
			echo "Welcome <br/> name: ".$_SESSION["name"]."  <br/>username: ".$_SESSION["username"]."<br/>";
		?>
	</div>
</body>
</html>
