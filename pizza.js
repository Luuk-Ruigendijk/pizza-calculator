var pizzas = [
	{
		pizzaId: 1,
		pizzaName: "Margaritha",
		pizzaPicture: "images/margaritha.png",
		pizzaPrice: 6.50
	}, {
		pizzaId: 2,
		pizzaName: "Shoarma",
		pizzaPicture: "images/shoarma.png",
		pizzaPrice: 8.50
	}, {
		pizzaId: 3,
		pizzaName: "Funghi",
		pizzaPicture: "images/funghi.png",
		pizzaPrice: 9.50
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

var allPricesTogether = 0;

var currentSelectedPizza;

var finalPrice;

var currentSelectedPizzaPrice;

var chosenToppingPrice = 0;

function showPizzaList()
{
	for (var i = 0; i < q; i++) {
		pizzaListLi = document.createElement("li");
		
		pizzaListLi.innerHTML = pizzas[i].pizzaName;
		
		pizzaListLi.id=pizzas[i].pizzaId;
		pizzaListLi.pizzaNr = i;
		pizzaListLi.onclick = doPizza;
		
		document.getElementById('listOfPizzas').appendChild(pizzaListLi);
	}
}

function createToppingList()
{
	for (var z = 0; z < toppings.length; z++) {
		shortElementCreate = document.createElement("li");
		shortElementCreate.innerHTML = toppings[z].name + ": €" + toppings[z].price;
		shortElementCreate.setAttribute("onclick", `pickTopping(${z})` ); 
		document.getElementById('listOfToppings').appendChild(shortElementCreate);
	}
}

createToppingList()

showPizzaList()

function resetChosenToppings()
{
	document.getElementById("finalPrice").innerHTML = "€" + currentSelectedPizzaPrice;
	chosenToppingPrice = 0;
	for (var z = 0; z < toppings.length; z++) {
		toppings[z].chosen = false
	}
}

function doPizza(event)
{
	
	pizzaNr = event.target.pizzaNr;
	resetChosenToppings();
	for (var n = 0; n < pizzas.length; n++) {
		document.getElementsByTagName("li")[n].classList.remove("backgroundGrey");
	}

	//for (var n = 0; n < pizzas.length; n++) {
	//	document.getElementsByTagName("li")[n].classList.remove("backgroundGrey");
	//	document.getElementsByTagName("li")[n].classList.add("backgroundYellow");
	//}

	document.getElementsByTagName("li")[pizzaNr].style
	document.getElementById("picture").src = pizzas[pizzaNr].pizzaPicture;
	document.getElementById("picture").style.display = "block";
	showPrice.innerHTML = "€" + pizzas[pizzaNr].pizzaPrice;
	document.getElementById("hideForPizza").style.display = "block";
	//allPricesTogether = pizzas[pizzaNr].pizzaPrice + kaasPrice + pepperoniPrice + uiPrice + olijvenPrice;
	//finalPrice.innerHTML = allPricesTogether;
	currentSelectedPizzaPrice = pizzas[pizzaNr].pizzaPrice;
	finalPrice = pizzas[pizzaNr].pizzaPrice;
	showPriceForChosenItems();
	document.getElementById(pizzas[pizzaNr].pizzaId).classList.add("backgroundGrey");
}

function pizzaSizeChosen(pizzaSize)
{
	finalPrice = allPricesTogether * pizzaSize;
	document.getElementById("finalPrice").innerHTML = finalPrice.toFixed(2);
}

function pickTopping(toppingNr)
{
	if (toppings[toppingNr].chosen == false) {
		chosenToppingPrice += toppings[toppingNr].price;
		//chosenToppingPrice = toppings[toppingNr].price;
		showPriceForChosenItems();
		toppings[toppingNr].chosen = true
	}
}

function showPriceForChosenItems()
{
	allPricesTogether = currentSelectedPizzaPrice + chosenToppingPrice;
	finalPrice = allPricesTogether.toFixed(2);
	document.getElementById("finalPrice").innerHTML = finalPrice;
}

try {
            // Try Connect to the DB with new MySqli object - Params {hostname, userid, password, dbname}
            $mysqli = new mysqli("localhost", "root", "mysql", "pizza_database");

            
            $statement = $mysqli->prepare("select pizzaId, pizzaName, pizzaPicture, pizzaPrice from pizzas limit 10");


            $statement->execute(); // Execute the statement.
            $result = $statement->get_result(); // Binds the last executed statement as a result.

            echo json_encode(($result->fetch_assoc())); // Parse to JSON and print.
  
        } catch (mysqli_sql_exception $e) { // Failed to connect? Lets see the exception details..
            echo "MySQLi Error Code: " . $e->getCode() . "<br />";
            echo "Exception Msg: " . $e->getMessage();
            exit(); // exit and close connection.
        }

        $mysqli->close(); // finally, close the connection