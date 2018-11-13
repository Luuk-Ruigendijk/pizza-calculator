//pizza objects created

var pizzaMargaritha = {
	pizzaName: "Margaritha",
	image: "margaritha.png",
	price: 6.50
};

var pizzaShoarma = {
	pizzaName: "Shoarma",
	image: "shoarma.png",
	price: 8.50
};

var pizzaFunghi = {
	pizzaName: "Funghi",
	image: "funghi.png",
	price: 9.50
};

//pizza object created

var pizzas = [pizzaMargaritha, pizzaShoarma, pizzaFunghi];



var q = pizzas.length;

var kaasPrice = 0;

var pepperoniPrice = 0;

var uiPrice = 0;

var olijvenPrice = 0;

var allPricesTogether = 0;

var currentSelectedPizza;


function showPizzaList()
{
	for (var i = 0; i < q; i++) {
		var p = pizzas[i].pizzaName;
		pizzaListLi = document.createElement("li");
		//pizzaListLink = document.createElement("a");
		//pizzaListLink.setAttribute('href', "#");

		pizzaListLi.innerHTML = pizzas[i].pizzaName;
		pizzaListLi.setAttribute("onclick", `doPizza(${i})` ); 
		//pizzaListLi.appendChild(pizzaListLink);
		document.getElementById('listOfPizzas').appendChild(pizzaListLi);
		
		//document.getElementById('listOfPizzas').appendChild(pizzaListLink);

		//document.getElementsByTagName("a")[i].setAttribute("id", pizzas[i].pizzaName); 
		//document.getElementsByTagName("a")[i].setAttribute("onclick", pizzas[i].pizzaName + "()"); 
		//document.getElementsByTagName("a")[i].setAttribute("onclick", `doPizza(${i})` ); 
	}
}

showPizzaList()

function resetChosenToppings()
{
	kaasPrice = 0;

	pepperoniPrice = 0;

	uiPrice = 0;

	olijvenPrice = 0;

	//allPricesTogether = currentSelectedPizza + kaasPrice + pepperoniPrice + uiPrice + olijvenPrice;
	//finalPrice.innerHTML = allPricesTogether;
}

function doPizza(pizzaNr)
{
	//console.log(pizzas[pizzaNr].pizzaName);
	resetToppings();
	picture.src = pizzas[pizzaNr].image;
	document.getElementById("picture").style.display = "block";
	showPrice.innerHTML = pizzas[pizzaNr].price;
	document.getElementById("hideForPizza").style.display = "block";
	//allPricesTogether = pizzas[pizzaNr].price + kaasPrice + pepperoniPrice + uiPrice + olijvenPrice;
	//finalPrice.innerHTML = allPricesTogether;
	//currentSelectedPizza = pizzas[pizzaNr].price;
}

function topping(pizzaNr)
{
	
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