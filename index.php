<?php
	include_once 'dbh.inc.php'
?>

<!DOCTYPE html>
<html>
<head>
	<title>Pizza calculator</title>
	<link rel="stylesheet" type="text/css" href="pizza.css">
</head>
<body>
<h1 id="topTitle">Pizza calculator</h1>
<div class="collectionOfPizzaDivs">
	<div id="pizzaListId" class="firstDiv pizzaDivBox">
		<ol id="listOfPizzas">
			<p id="justtest"></p>
		</ol>
	</div>
	<div class="secondDiv pizzaDivBox">
		<img src="#" id="picture">
		<p id="showPrice"></p>
		<div id="hideForPizza">
			<h2>Toppings:</h2>
			<ul id="listOfToppings">
				
			</ul>
			<a href="#" onclick="resetChosenToppings()">Reset toppings</a>
			<h2>Hoe groot wil je je pizza?</h2>
			<img src="images/pizza-fractions-one-fourth.jpg" onclick="pizzaSizeChosen(0.25)">1/4
			<img src="images/pizza-fractions-half.jpg"onclick="pizzaSizeChosen(0.5)">1/2
			<img src="images/pizza-fractions-three-fourth.jpg"onclick="pizzaSizeChosen(0.75)">3/4
			<img src="images/pizza-fractions-whole.jpg"onclick="pizzaSizeChosen(1)">1
			<p>Eindprijs: <p id="finalPrice"></p></p>
		</div>
		<span style="display: none">€</span>
	</div>
</div>

<script src="pizza.js"></script>
</body>
</html>