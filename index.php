<?php

	include "databases/databases.php";

	$query = "SELECT * FROM goods";
	$jsonArray = array();
	$today = date("YmdHi");
	$lastInterfaceUpdate = 44946824.3;

	if ($result = mysqli_query($link, $query)) {

		/* fetch associative array */
		while($row = mysqli_fetch_assoc($result)) {
			array_push($jsonArray, $row);
		}
		$jsonArrayEncode = json_encode($jsonArray);
		$path = "server/catalog" . $today . ".json";
		file_put_contents($path, $jsonArrayEncode);
		/* free result set */
		mysqli_free_result($result);
	}
	/* close connection */
	mysqli_close($link);
?>

<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Белкомфорт</title>
	<link rel="icon" type="image/png" href="img/favicon.png">
	<link rel="stylesheet" type="text/css" href="css/index.css?<?php echo $lastInterfaceUpdate?>">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap" rel="stylesheet">
	<link href="//fonts.googleapis.com/css?family=PT+Sans+Narrow&amp;subset=latin,cyrillic" rel="stylesheet" type="text/css">
	<link href="//fonts.googleapis.com/css?family=PT+Sans:400,700&amp;subset=latin,cyrillic" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,500&amp;subset=cyrillic" rel="stylesheet" type="text/css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>

	<div id="header"></div>
	<div id="products"></div>
	<div id="shopping"></div>
	<div id="spinner"></div>
	<div id="configuration"></div>
	<div id="orderForm"></div>
	<div id="description"></div>
	<div id="error"></div>

	<!-- Constants and utils -->
	<script src="constants/root.js?<?php echo $lastInterfaceUpdate?>"></script>
	<script src="utils/localStorageUtil.js?<?php echo $lastInterfaceUpdate?>"></script>

	<!-- Header -->
	<script src="components/Header/Header.js?<?php echo $lastInterfaceUpdate?>"></script>
	<link rel="stylesheet" href="components/Header/Header.css?<?php echo $lastInterfaceUpdate?>">

	<!-- Products -->
	<script src="components/Products/Products.js?<?php echo $lastInterfaceUpdate?>"></script>
	<link rel="stylesheet" href="components/Products/Products.css?<?php echo $lastInterfaceUpdate?>">

	<!-- Configuration -->
	<script src="components/Configuration/Configuration.js?<?php echo $lastInterfaceUpdate?>"></script>
	<link rel="stylesheet" href="components/Configuration/Configuration.css?<?php echo $lastInterfaceUpdate?>">
	
	<!-- Shopping cart -->
	<script src="components/Shopping/Shopping.js?<?php echo $lastInterfaceUpdate?>"></script>
	<link rel="stylesheet" href="components/Shopping/Shopping.css?<?php echo $lastInterfaceUpdate?>">

	<!-- Order form -->
	<script src="components/Form/Form.js?<?php echo $lastInterfaceUpdate?>"></script>
	<link rel="stylesheet" href="components/Form/Form.css?<?php echo $lastInterfaceUpdate?>">

	<!-- Spinner -->
	<script src="components/Spinner/Spinner.js?<?php echo $lastInterfaceUpdate?>"></script>
	<link rel="stylesheet" href="components/Spinner/Spinner.css?<?php echo $lastInterfaceUpdate?>">

	<!-- Error -->
	<script src="components/Error/Error.js?<?php echo $lastInterfaceUpdate?>"></script>
	<link rel="stylesheet" href="components/Error/Error.css?<?php echo $lastInterfaceUpdate?>">

	<iframe name="dummyframe" id="dummyframe"></iframe>
	<script><?php echo "let JSONPath = '" . $path . "'"?></script>
	<script src="index.js"></script>
	<!-- <script id="amoforms_script" async="async" charset="utf-8" src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1611254025"></script> -->
</body>
</html>