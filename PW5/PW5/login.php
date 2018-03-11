<?php
    $username = $_POST["username"];
    $password = $_POST["password"];
  if(empty($username) || empty($password)){
    header("location: login.html");
  }
  $conn = mysqli_connect("localhost", "root", "root", "PW5");
  if(!$conn){
      die("Connection failed: " . mysqli_connect_error());
  }
  $query = "SELECT * FROM Users WHERE username = '$username' AND password = '$password';";
  $result = mysqli_query($conn, $query);
  $Data = mysqli_fetch_array($result);  
  mysqli_close($conn);
  session_start();
  if(!$Data){
    header("location: login.html");
  }
  else{
     $_SESSION["username"] = $Data["username"];
     $_SESSION["fullname"] = $Data['fullname'];
     $_SESSION["avatar"] = $Data['avatar'];
     header("location: welcome.php");
     }
  session_write_close();
?>