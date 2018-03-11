<?php
  $gender = $_POST["gender"];
  $year = $_POST["year"];
  $con = mysqli_connect('localhost','root','root','HW3');
  if (!$con)
  {
    die('Could not connect: ' . mysqli_error($con));
  }
   if($gender != "0" && $year != "0"){
      $sql = "SELECT * FROM babynames WHERE year = '$year' AND gender = '$gender' ORDER BY ranking";
   }
   else if($gender == "0" && $year != "0"){
      $sql = "SELECT * FROM babynames WHERE year = '$year' ORDER BY gender, ranking";
   }
   else if($gender != "0" && $year == "0"){
      $sql = "SELECT * FROM babynames WHERE gender = '$gender' ORDER BY year DESC, ranking";
   }
   else {
      $sql = "SELECT * FROM babynames ORDER BY year DESC, gender, ranking";
   }
   $result = mysqli_query($con, $sql);

   $i = 0;
   echo "<table id='tb_result' style='width: 70%'><tr style='color:blue'><th>Name</th><th>Year</th><th>Ranking</th><th>Gender</th></tr>";
   while($row = mysqli_fetch_array($result)) {
      $i++;
      if($i % 2 == 0){
        echo "<tr style='background-color:#dddddd'><td>" . $row['name'] . "</td><td>" . $row['year'] . "</td><td>" . $row['ranking'] . "</td><td>" . $row['gender'] . "</td></tr>";
      }else{
        echo "<tr><td>" . $row['name'] . "</td><td>" . $row['year'] . "</td><td>" . $row['ranking'] . "</td><td>" . $row['gender'] . "</td></tr>";
      }
   }
   echo "</table>";
   
   mysqli_close($con);
?>
