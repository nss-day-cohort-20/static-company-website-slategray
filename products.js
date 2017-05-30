 // create a product using hardcoded attributes
 function createProduct(name, description, price, imgURL, animal){
 	
 	// create the object
 	var product = {};

 	// create the various attributes of the object and assign them
 	product.name = name
 	product.description = description;
 	product.price = price;
 	product.imgURL = imgURL;
 	product.animal = animal;

 	addProduct(product);
 }

//add a product to the catalog
function addProduct(product){
	productCatalog.push(product);
}

// 
function createCard(product){

	// create variables for card elements
	var cardElement, imgElement, image, nameElement, descriptionElement, productCategory;

	// get proper div id for appending later
	productCategory = document.getElementById(product.animal + "Products");

	// create a div of class productCard
	cardElement = document.createElement("div");
	cardElement.className = "productCard";

	// create image div for card
	imgElement = document.createElement("div");
	imgElement.className = "cardImg";


	// create image for product card
	image = document.createElement("img");
	image.src = product.imgURL;
	// image.className = "cardImg";
	image.alt = product.name;

	// create nameElement for name of product on card
	nameElement = document.createElement("p");
	nameElement.innerHTML = product.name;

	// create descriptionElement for description of product on card
	descriptionElement = document.createElement("p");
	descriptionElement.innerHTML = product.description;

	// append elements in hopefully correct order
	imgElement.appendChild(image);
	cardElement.appendChild(imgElement);
	cardElement.appendChild(nameElement);
	cardElement.appendChild(descriptionElement);
	productCategory.appendChild(cardElement);

}

function displayCatalog(){
	for (var i = 0; i < productCatalog.length; i++) {
		console.log(productCatalog[i]);
	}
}

// creates and appends elements in order to diplay procucts cards for each product
function displayCards(){

	// iterate through each product
	for (var i = 0; i < productCatalog.length; i++) {
		
		// run createCard function to create a card for each product
		createCard(productCatalog[i]);
	}
}

var productCatalog = [];

createProduct("Bowtie", "A bowtie for a dog", 17.99, "https://img0.etsystatic.com/000/0/5939383/il_fullxfull.238627372.jpg", "dog");
createProduct("Mane", "A mane that fits on a cat's head", 19.99, "data:image/jpeg;base64,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", "cat");
createProduct("Hoodie", "Black hoodie for a dog that says Addidog", 6.99, "data:image/jpeg;base64,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", "dog");
createProduct("Hoodie", "Purple Hoodie for a cat. Looks like drug rug", 18.99, "https://img1.etsystatic.com/071/0/6445377/il_fullxfull.815805717_4ovu.jpg", "cat");
createProduct("Minion Costume", "Despicable me minion costume for dog", 14.99, "https://i.ytimg.com/vi/ViSAhGnEAKY/maxresdefault.jpg", "dog");
createProduct("Minion Costume", "Despicable me minion costume for cat", 14.99, "data:image/jpeg;base64,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", "cat");
createProduct("Tuxedo", "Bird tuxedo costume WITH hat", 9.99, "http://www.perchfactory.com/images/gallery-pics/bird-handling-wear/parrot-bird-costumes/Bird-Tuxedo-costume-by-Jungle-Wear.gif", "bird");
createProduct("Bee", "Bird costume that makes them look like a bee", 9.99, "http://www.perchfactory.com/images/gallery-pics/bird-handling-wear/parrot-bird-costumes/bird-in-bee-costume.gif", "bird");


displayCatalog();
displayCards();