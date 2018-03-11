<?php
  session_start();
  if(!isset($_SESSION["username"])){
    header("location: login.html");
  }
  else{
      $conn = mysqli_connect("localhost", "root", "root", "PW5");
  if(!$conn){
      die("Connection failed: " . mysqli_connect_error());
  }
    echo  "Welcome ".$_SESSION["username"];

    echo  "<br/> ".$_SESSION["fullname"];
    echo "<img src = 'img/".$_SESSION["avatar"]."' alt='profile.png'/>";
    // $query = "SELECT * FROM FavoriteBooks, Books WHERE username = {$_SESSION['username']}, FavoriteBooks.bookid = Books.bookid;";
    $username = $_SESSION['username'];
    $query = "SELECT * FROM FavoriteBooks WHERE username ='$username';";

    $result = mysqli_query($conn, $query);
    echo  "<br>";
    echo  "Favorite Books:";
    echo "<table border='1'>  <tr> <th>username</th> <th>bookid</th>  <th>title</th>  <th>author</th></tr>";

    while($row = mysqli_fetch_array($result)){
      echo "<tr>";
      echo "<td>".$row['username']."</td>";
      echo "<td>".$row['bookid']."</td>";
      $bookid = $row['bookid'];
      $sql = "SELECT * FROM Books WHERE bookid = '$bookid';";

      $tmp = mysqli_query($conn, $sql);
      $rowInner = mysqli_fetch_array($tmp);
      echo "<td>".$rowInner['title']."</td>";
      echo "<td>".$rowInner['author']."</td>";
      echo "</tr>";
    }

    echo "</table>";

    mysqli_close($conn);
  }
  session_write_close();
?>
