// Cart state
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to save cart to localStorage
function saveCart() {
	localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to add item to cart
function addToCart(productId, quantity) {
	const existingItem = cart.find((item) => item.productId === productId);

	if (existingItem) {
		existingItem.quantity += quantity;
	} else {
		cart.push({
			productId,
			quantity,
		});
	}

	saveCart();
	updateCartCount();
}

// Function to update cart count in the UI
function updateCartCount() {
	const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
	const cartIcon = document.querySelector(
		'.custom-navbar-cta .nav-link[href="cart.html"]'
	);

	if (cartIcon) {
		// Remove existing badge if any
		const existingBadge = cartIcon.querySelector(".cart-badge");
		if (existingBadge) {
			existingBadge.remove();
		}

		// Add new badge if there are items
		if (cartCount > 0) {
			const badge = document.createElement("span");
			badge.className = "cart-badge";
			badge.textContent = cartCount;
			badge.style.cssText = `
                position: absolute;
    top: -5px;
    right: -5px;
    background-color: rgb(255, 107, 107);
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
    width: 27px;
    height: 27px;
    display: flex
;
    align-items: center;
    justify-content: center;
            `;
			cartIcon.style.position = "relative";
			cartIcon.appendChild(badge);
		}
	}
}

// Initialize cart count on page load
document.addEventListener("DOMContentLoaded", updateCartCount);
