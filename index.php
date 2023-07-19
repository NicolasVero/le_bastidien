<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/style/style.css">
    <title>Authentification</title>
</head>
<body>
    
    <?php

        $password = "mdp"; 
        $message = "";

        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            $userPassword = isset($_POST["password"]) ? $_POST["password"] : "";

            if ($userPassword === $password) {
                session_start();
                $_SESSION['access'] = 'ok';
                header("Location: game.php");
            } else {
                $message = "Mot de passe incorrect.";
            }
        }
    ?>
        
    <div class="form-container">
        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
            <h1>Authentification</h1>
            <!-- <label for="password">Mot de passe :</label> -->
            <input type="password" name="password" id="password" required>
            <button class="main" type="submit">Soumettre</button>
        </form>
        
        <?php
            if ($message) {
                echo "<p>$message</p>";
            }
        ?>
    </div>

</body>
</html>