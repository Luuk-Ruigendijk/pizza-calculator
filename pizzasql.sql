CREATE TABLE pizzas (
	pizzaId int AUTO_INCREMENT PRIMARY KEY not null,
	pizzaName varchar(255) not null,
	pizzaPicture varchar(255) not null,
	pizzaPrice varchar(255) not null
);

INSERT INTO pizzas (pizzaName, pizzaPicture, pizzaPrice)
	VALUES ('Margaritha', 'images/margaritha.png', '6.50'), 
	('Shoarma', 'images/shoarma.png', '8.50'), 
	('Funghi', 'images/funghi.png', '9.50');

CREATE TABLE toppings (
	toppingId int AUTO_INCREMENT PRIMARY KEY not null,
	toppingName varchar(255) not null,
	toppingPrice varchar(255) not null
);

INSERT INTO toppings (toppingName, toppingPrice)
	VALUES ('Kaas', '1'), 
	('Pepperoni', '1.25'), 
	('Ui', '0.75'), 
	('Olijven', '2');