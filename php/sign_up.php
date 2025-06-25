<?php
    require "./connect.php";

    if($_SERVER["REQUEST_METHOD"] == "POST"){ 
        $fullname = $_POST['fullname'];
        $age = $_POST['age'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        $req = $pdo->prepare("select * from  clients where email= ?");
        $req->execute([$email]);
        
        if($req->rowCount()>0){
            header("location:http://localhost/projet/html/sign_in.html");
        }else{
            $req=$pdo->prepare("insert into clients (fullname,age,email,password_hash) values(?,?,?,?)");
            $req->execute([$fullname,$age,$email,$password]);
            header("location:http://localhost/projet/html/welcom.html");
            exit();  
        }
    }
?>
