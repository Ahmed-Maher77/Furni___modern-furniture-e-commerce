// Function to get URL parameters
function getUrlParameter(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
	var results = regex.exec(location.search);
	return results === null
		? ""
		: decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Function to display product details
function displayProductDetails() {
	const productId = getUrlParameter("id");
	if (!productId) {
		window.location.href = "shop.html";
		return;
	}

	const product = products.find((p) => p.id === parseInt(productId));
	if (!product) {
		window.location.href = "shop.html";
		return;
	}

	// Update page title
	document.title = `${product.name} - Furni`;

	// Update product details
	document.getElementById("productImage").src = product.image;
	document.getElementById("productName").textContent = product.name;
	document.getElementById(
		"productPrice"
	).textContent = `$${product.price.toFixed(2)}`;

	// Update product description based on the product
	const description = document.getElementById("productDescription");
	switch (product.name) {
		case "Nordic Chair":
			description.textContent =
				"Experience the perfect blend of comfort and style with our Nordic Chair. Crafted with premium materials and ergonomic design, this chair offers exceptional support for long hours of sitting.";
			break;
		case "Kruzo Aero Chair":
			description.textContent =
				"The Kruzo Aero Chair combines modern aesthetics with superior comfort. Its innovative design features breathable mesh back and adjustable lumbar support, making it ideal for both home and office use.";
			break;
		case "Ergonomic Chair":
			description.textContent =
				"Our Ergonomic Chair is designed with your comfort in mind. Featuring adjustable height, tilt mechanism, and premium padding, it provides optimal support for your back and promotes healthy posture.";
			break;
		default:
			description.textContent =
				"A beautifully crafted piece of furniture that combines style, comfort, and durability. Perfect for any modern living space.";
	}

	// Setup quantity controls
	setupQuantityControls(product);
}

// Function to setup quantity controls
function setupQuantityControls(product) {
	const quantityInput = document.querySelector(".input-group input");
	const minusBtn = document.querySelector(".js-btn-minus");
	const plusBtn = document.querySelector(".js-btn-plus");
	const addToCartBtn = document.querySelector(".btn-primary");

	// Set minimum and maximum values
	const minQuantity = 1;
	const maxQuantity = 10;

	// Function to update quantity
	function updateQuantity(newValue) {
		newValue = Math.max(minQuantity, Math.min(maxQuantity, newValue));
		quantityInput.value = newValue;
	}

	// Minus button click handler
	minusBtn.addEventListener("click", () => {
		const currentValue = parseInt(quantityInput.value);
		updateQuantity(currentValue - 1);
	});

	// Plus button click handler
	plusBtn.addEventListener("click", () => {
		const currentValue = parseInt(quantityInput.value);
		updateQuantity(currentValue + 1);
	});

	// Input change handler
	quantityInput.addEventListener("change", () => {
		const currentValue = parseInt(quantityInput.value);
		updateQuantity(currentValue);
	});

	// Add to cart button click handler
	addToCartBtn.addEventListener("click", (e) => {
		e.preventDefault();
		const quantity = parseInt(quantityInput.value);
		addToCart(product.id, quantity);

		// Show success message
		const successMessage = document.createElement("div");
		successMessage.className = "alert alert-success mt-3";
		successMessage.textContent = "Product added to cart successfully!";
		addToCartBtn.parentNode.appendChild(successMessage);

		// Remove success message after 3 seconds
		setTimeout(() => {
			successMessage.remove();
		}, 3000);
	});
}

// Call the function when the DOM is loaded
document.addEventListener("DOMContentLoaded", displayProductDetails);
