<?php
$host="localhost";
$dbname="jennenestore";
$username="root";
$password="";
try{
    $pdo=New PDO("mysql:host=$host;dbname=$dbname;charset=utf8",$username,$password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
    die("erreur de connection:" . $e->getMessage());
}
?>