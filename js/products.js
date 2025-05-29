const products = [
	{
		id: 1,
		name: "Nordic Chair",
		price: 50.0,
		image: "images/product-3.png",
	},
	{
		id: 2,
		name: "Nordic Chair",
		price: 50.0,
		image: "images/product-1.png",
	},
	{
		id: 3,
		name: "Kruzo Aero Chair",
		price: 78.0,
		image: "images/product-2.png",
	},
	{
		id: 4,
		name: "Ergonomic Chair",
		price: 43.0,
		image: "images/product-3.png",
	},
	{
		id: 5,
		name: "Nordic Chair",
		price: 50.0,
		image: "images/product-3.png",
	},
	{
		id: 6,
		name: "Nordic Chair",
		price: 50.0,
		image: "images/product-1.png",
	},
	{
		id: 7,
		name: "Kruzo Aero Chair",
		price: 78.0,
		image: "images/product-2.png",
	},
	{
		id: 8,
		name: "Ergonomic Chair",
		price: 43.0,
		image: "images/product-3.png",
	},
];

function renderProducts() {
	const productsContainer = document.querySelector(".product-section .row");
	if (!productsContainer) return; // Exit if not on a page with products

	productsContainer.innerHTML = ""; // Clear existing content

	products.forEach((product) => {
		const productHTML = `
            <div class="col-12 col-md-4 col-lg-3 mb-5">
                <a class="product-item" href="productPage.html?id=${
									product.id
								}">
                    <img src="${
											product.image
										}" class="img-fluid product-thumbnail" />
                    <h3 class="product-title">${product.name}</h3>
                    <strong class="product-price">$${product.price.toFixed(
											2
										)}</strong>
                    <span class="icon-cross" data-product-id="${product.id}">
                        <img src="images/cross.svg" class="img-fluid" />
                    </span>
                </a>
            </div>
        `;
		productsContainer.innerHTML += productHTML;
	});

	// Add click event listeners to all icon-cross elements
	document.querySelectorAll(".icon-cross").forEach((icon) => {
		icon.addEventListener("click", (e) => {
			e.preventDefault(); // Prevent the link from being followed
			e.stopPropagation(); // Prevent event bubbling

			const productId = parseInt(icon.dataset.productId);
			addToCart(productId, 1); // Add one item to cart

			// Show success message
			const successMessage = document.createElement("div");
			successMessage.className =
				"alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3";
			successMessage.style.zIndex = "9999";
			successMessage.textContent = "Product added to cart successfully!";
			document.body.appendChild(successMessage);

			// Remove success message after 3 seconds
			setTimeout(() => {
				successMessage.remove();
			}, 3000);
		});
	});
}

function addToCart(productId, quantity) {
	// Get existing cart from localStorage
	let cart = JSON.parse(localStorage.getItem("cart")) || [];

	// Check if product already exists in cart
	const existingProduct = cart.find((item) => item.productId === productId);

	if (existingProduct) {
		// Show message that product is already in cart
		const message = document.createElement("div");
		message.className =
			"alert alert-warning position-fixed top-0 start-50 translate-middle-x mt-3";
		message.style.zIndex = "9999";
		message.textContent = "This product is already in your cart!";
		document.body.appendChild(message);

		// Remove message after 3 seconds
		setTimeout(() => {
			message.remove();
		}, 3000);
		return;
	}

	// If product doesn't exist, add it to cart
	cart.push({
		productId: productId,
		quantity: quantity,
	});

	// Save updated cart to localStorage
	localStorage.setItem("cart", JSON.stringify(cart));

	// Show success message
	const successMessage = document.createElement("div");
	successMessage.className =
		"alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3";
	successMessage.style.zIndex = "9999";
	successMessage.textContent = "Product added to cart successfully!";
	document.body.appendChild(successMessage);

	// Remove success message after 3 seconds
	setTimeout(() => {
		successMessage.remove();
	}, 3000);

	// Update cart count
	updateCartCount();
}

// Call renderProducts when the DOM is loaded
document.addEventListener("DOMContentLoaded", renderProducts);

document.addEventListener("DOMContentLoaded", function () {
	// Add click event listeners to all "Add to Cart" buttons
	document.querySelectorAll(".icon-cross").forEach((icon) => {
		icon.addEventListener("click", (e) => {
			e.preventDefault(); // Prevent the link from being followed
			e.stopPropagation(); // Prevent event bubbling

			const productId = parseInt(
				icon.closest("[data-product-id]").dataset.productId
			);
			addToCart(productId, 1); // Add one item to cart
		});
	});

	// Add click event listener to the product page "Add to Cart" button
	const addToCartBtn = document.querySelector(".btn-primary");
	if (addToCartBtn) {
		addToCartBtn.addEventListener("click", (e) => {
			e.preventDefault();
			const urlParams = new URLSearchParams(window.location.search);
			const productId = parseInt(urlParams.get("id"));
			if (productId) {
				addToCart(productId, 1);
			}
		});
	}
});
