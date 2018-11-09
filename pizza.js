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

function Margaritha()
{
	picture.src = "margaritha.png";
	document.getElementById("picture").style.display = "block";
	showPrice.innerHTML = pizzas[0].price;
	document.getElementById("hideForPizza").style.display = "block";
	var allPricesTogether = pizzas[0].price + kaasChoose + pepperoniChoose + uiChoose + olijvenChoose;
}

function Shoarma()
{
	picture.src = "shoarma.png";
	document.getElementById("picture").style.display = "block";
	showPrice.innerHTML = pizzas[1].price;
	document.getElementById("hideForPizza").style.display = "block";
}

function Funghi()
{
	picture.src = "funghi.png";
	document.getElementById("picture").style.display = "block";
	showPrice.innerHTML = pizzas[2].price;
	document.getElementById("hideForPizza").style.display = "block";
}

function toppingKaas()
{
	kaasChoose = 1;
}

function toppingPepperoni()
{
	pepperoniChoose = 1.25;
}

function toppingUi()
{
	uiChoose = 0.75;
}

function toppingOlijven()
{
	olijvenChoose = 2;
}

function resetToppings()
{
	cheeseChoose = 0;

	pepperoniChoose = 0;

	uiChoose = 0;

	olijvenChoose = 0;
}