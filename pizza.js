//pizza object created

var pizzas = [
	{
		pizzaName: "Margaritha",
		image: "margaritha.png",
		price: 6.50
	}, {
		pizzaName: "Shoarma",
		image: "shoarma.png",
		price: 8.50
	}, {
		pizzaName: "Funghi",
		image: "funghi.png",
		price: 9.50
	}
];

var toppings = [
	{
		name: "Kaas",
		price: 1,
		chosen: false
	},
	{
		name: "Pepperoni",
		price: 1.25,
		chosen: false
	},
	{
		name: "Ui",
		price: 0.75,
		chosen: false
	},
	{
		name: "Olijven",
		price: 2,
		chosen: false
	}
];

var q = pizzas.length;

//var kaasPrice = 0;

//var pepperoniPrice = 0;

//var uiPrice = 0;

//var olijvenPrice = 0;

var allPricesTogether = 0;

var currentSelectedPizza;

var currentSelectedPizzaPrice;

var chosenToppingPrice = 0
function showPizzaList()
{
	for (var i = 0; i < q; i++) {
		var p = pizzas[i].pizzaName;
		pizzaListLi = document.createElement("li");
		//pizzaListLink = document.createElement("a");
		//pizzaListLink.setAttribute('href', "#");

		pizzaListLi.innerHTML = pizzas[i].pizzaName;
		//pizzaListLi.setAttribute("onclick", `doPizza(${i})` ); 
		pizzaListLi.pizzaNr = i;
		pizzaListLi.onclick = doPizza;
		//pizzaListLi.appendChild(pizzaListLink);
		document.getElementById('listOfPizzas').appendChild(pizzaListLi);
		
		//document.getElementById('listOfPizzas').appendChild(pizzaListLink);

		//document.getElementsByTagName("a")[i].setAttribute("id", pizzas[i].pizzaName); 
		//document.getElementsByTagName("a")[i].setAttribute("onclick", pizzas[i].pizzaName + "()"); 
		//document.getElementsByTagName("a")[i].setAttribute("onclick", `doPizza(${i})` ); 
	}
}

function createToppingList()
{
	for (var z = 0; z < toppings.length; z++) {
		shortElementCreate = document.createElement("li");
		shortElementCreate.innerHTML = toppings[z].name + ": " + toppings[z].price;
		shortElementCreate.setAttribute("onclick", `pickTopping(${z})` ); 
		document.getElementById('listOfToppings').appendChild(shortElementCreate);
	}
}

createToppingList()

showPizzaList()

function resetChosenToppings()
{
	document.getElementById("finalPrice").innerHTML = currentSelectedPizzaPrice;
	chosenToppingPrice = 0;
	for (var z = 0; z < toppings.length; z++) {
		toppings[z].chosen = false
	}
	//allPricesTogether = currentSelectedPizza + kaasPrice + pepperoniPrice + uiPrice + olijvenPrice;
	//finalPrice.innerHTML = allPricesTogether;
}

function doPizza(event)
{
	for (var i = 0; i < pizzas.length; i++) {
		//document.getElementById(pizzas[i].pizza).style.background="none";
	}
	pizzaNr = event.target.pizzaNr;
	resetChosenToppings();
	for (var n = 0; n < 2; n++) {
		document.getElementsByTagName("li")[n].style
	}
	
	document.getElementsByTagName("li")[pizzaNr].style
	picture.src = pizzas[pizzaNr].image;
	document.getElementById("picture").style.display = "block";
	showPrice.innerHTML = pizzas[pizzaNr].price;
	document.getElementById("hideForPizza").style.display = "block";
	//allPricesTogether = pizzas[pizzaNr].price + kaasPrice + pepperoniPrice + uiPrice + olijvenPrice;
	//finalPrice.innerHTML = allPricesTogether;
	currentSelectedPizzaPrice = pizzas[pizzaNr].price;
	document.getElementById("finalPrice").innerHTML = pizzas[pizzaNr].price;
	document.getElementById(pizzas[pizzaNr].pizza).style.backgroundColor="grey";
}

function pickTopping(toppingNr)
{
	if (toppings[toppingNr].chosen == false) {
		chosenToppingPrice += toppings[toppingNr].price;
		//chosenToppingPrice = toppings[toppingNr].price;
		showPriceForChosenItems();
		toppings[toppingNr].chosen = true
}
	//toppings[toppingNr].price
	
}

function showPriceForChosenItems()
{
	allPricesTogether = currentSelectedPizzaPrice + chosenToppingPrice;
	document.getElementById("finalPrice").innerHTML = allPricesTogether;
}

//function toppingKaas()
//{
//	kaasPrice = 1;
//	allPricesTogether = currentSelectedPizza + kaasPrice + pepperoniPrice + uiPrice + olijvenPrice;
//	document.getElementById("finalPrice").innerHTML = allPricesTogether;
//}

//function toppingPepperoni()
//{
//	pepperoniPrice = 1.25;
//	allPricesTogether = currentSelectedPizza + kaasPrice + pepperoniPrice + uiPrice + olijvenPrice;
//	document.getElementById("finalPrice").innerHTML = allPricesTogether;
//}

//function toppingUi()
//{
//	uiPrice = 0.75;
//	allPricesTogether = currentSelectedPizza + kaasPrice + pepperoniPrice + uiPrice + olijvenPrice;
//	document.getElementById("finalPrice").innerHTML = allPricesTogether;
//}

//function toppingOlijven()
//{
//	olijvenPrice = 2;
//	allPricesTogether = currentSelectedPizza + kaasPrice + pepperoniPrice + uiPrice + olijvenPrice;
//	document.getElementById("finalPrice").innerHTML = allPricesTogether;
//}