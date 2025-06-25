<?php
    require "./connect.php";

    if($_SERVER["REQUEST_METHOD"] == "GET"){ 
        $email = $_GET['email'];
        $password = $_GET['password'];
        $req = $pdo->prepare("select * from  clients where email= ? and password_hash= ?");
        $req->execute([$email,$password]);
        if($req->rowCount()>0){
            header('location:/projet/html/shop.html');
        }else{
            header('location:/projet/html/sign_up.html');
        }
}
?>
