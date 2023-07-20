<?php
	session_start();

	if(!isset($_SESSION['access'])) {
		header("Location: index.php");
	} 

	session_unset();
	session_destroy();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
	<title>Le Bastidien</title>
	<link rel="stylesheet" href="src/style/style.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
</head>
<body class="light">

	<div id="vail"></div>
	<div id="parameters">
		<button class="shuffle second">Mélanger les gages</button>
		<button class="get_json second">Accéder aux questions</button>
		<button class="swicth_theme second">Changer le thème</button>
	</div>

	<i class="fa-solid fa-gear gear" style="color: #ffffff;"></i>

	<div class="form">
		<input type="number" name="number" id="number" min="1" max="86" placeholder="1 - 86">
		<button id="submit" class="main">Avoir mon gage</button>
	</div>

	<div class="card not-show">
		<div id="display-color"></div>
		<div id="display"></div>
	</div>

	<script type="module" src="src/scripts/load_json.js"></script>
	<script type="module" src="src/scripts/give_question.js"></script>
	<script type="module" src="src/scripts/parameters.js"></script>
	<script type="module" src="src/scripts/disable_placeholder.js"></script>
</body>
</html>
