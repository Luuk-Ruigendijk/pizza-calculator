var pizzaMargaritha = {
	pizza: "Margaritha",
	image: "MargarithaPicture",
	price: 6.50
};

var pizzaShoarma = {
	pizza: "Shoarma",
	image: "ShoarmaPicture",
	price: 8.50
};

var pizzaFunghi = {
	pizza: "Funghi",
	image: "FunghiPicture",
	price: 9.50
};

var pizzas = [pizzaMargaritha, pizzaShoarma, pizzaFunghi];
console.dir(pizzas[0]);
document.getElementById("listOfPizzas").innerHTML =
pizzas[0].pizza ; //+ " " + pizzas.pizzaMargaritha[0];



var q = pizzas.length;

var kaasChoose = 0;

var pepperoniChoose = 0;

var uiChoose = 0;

var olijvenChoose = 0;

var allPricesTogether = 0;

var currentSelectedPizza;




for (var i = 0; i < q; i++) {
	var p = pizzas[i].pizza;
	pizzaListLi = document.createElement("li");
	pizzaListLink = document.createElement("a");
	pizzaListLink.setAttribute('href', "#");

	pizzaListLink.innerHTML = pizzas[i].pizza;
	pizzaListLi.appendChild(pizzaListLink);
	listOfPizzas.appendChild(pizzaListLi);
	

	document.getElementById('listOfPizzas').appendChild(pizzaListLink);

	document.getElementsByTagName("a")[i].setAttribute("id", pizzas[i].pizza); 
	document.getElementsByTagName("a")[i].setAttribute("onclick", pizzas[i].pizza + "()"); 
}

function resetToppings()
{
	kaasChoose = 0;

	pepperoniChoose = 0;

	uiChoose = 0;

	olijvenChoose = 0;

	allPricesTogether = currentSelectedPizza + kaasChoose + pepperoniChoose + uiChoose + olijvenChoose;
	finalPrice.innerHTML = allPricesTogether;
}

function Margaritha()
{
	resetToppings();
	picture.src = "margaritha.png";
	document.getElementById("picture").style.display = "block";
	showPrice.innerHTML = pizzas[0].price;
	document.getElementById("hideForPizza").style.display = "block";
	allPricesTogether = pizzas[0].price + kaasChoose + pepperoniChoose + uiChoose + olijvenChoose;
	finalPrice.innerHTML = allPricesTogether;
	currentSelectedPizza = pizzas[0].price;
}

function Shoarma()
{
	resetToppings();
	picture.src = "shoarma.png";
	document.getElementById("picture").style.display = "block";
	showPrice.innerHTML = pizzas[1].price;
	document.getElementById("hideForPizza").style.display = "block";
	allPricesTogether =  pizzas[1].price + kaasChoose + pepperoniChoose + uiChoose + olijvenChoose;
	finalPrice.innerHTML = allPricesTogether;
	currentSelectedPizza = pizzas[1].price;
}

function Funghi()
{
	resetToppings();
	picture.src = "funghi.png";
	document.getElementById("picture").style.display = "block";
	showPrice.innerHTML = pizzas[2].price;
	document.getElementById("hideForPizza").style.display = "block";
	allPricesTogether = pizzas[2].price + kaasChoose + pepperoniChoose + uiChoose + olijvenChoose;
	finalPrice.innerHTML = allPricesTogether;
	currentSelectedPizza = pizzas[2].price;
}

function toppingKaas()
{
	kaasChoose = 1;
	allPricesTogether = currentSelectedPizza + kaasChoose + pepperoniChoose + uiChoose + olijvenChoose;
	document.getElementById("finalPrice").innerHTML = allPricesTogether;
}

function toppingPepperoni()
{
	pepperoniChoose = 1.25;
	allPricesTogether = currentSelectedPizza + kaasChoose + pepperoniChoose + uiChoose + olijvenChoose;
	document.getElementById("finalPrice").innerHTML = allPricesTogether;
}

function toppingUi()
{
	uiChoose = 0.75;
	allPricesTogether = currentSelectedPizza + kaasChoose + pepperoniChoose + uiChoose + olijvenChoose;
	document.getElementById("finalPrice").innerHTML = allPricesTogether;
}

function toppingOlijven()
{
	olijvenChoose = 2;
	allPricesTogether = currentSelectedPizza + kaasChoose + pepperoniChoose + uiChoose + olijvenChoose;
	document.getElementById("finalPrice").innerHTML = allPricesTogether;
}