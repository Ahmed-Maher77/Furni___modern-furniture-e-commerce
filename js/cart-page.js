// Function to render cart items
function renderCartItems() {
	const cartItemsContainer = document.getElementById("cartItems");
	cartItemsContainer.innerHTML = "";

	if (cart.length === 0) {
		cartItemsContainer.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-5">
                    <h3>Your cart is empty</h3>
                    <p class="mb-0">Add some items to your cart to see them here.</p>
                </td>
            </tr>
        `;
		updateCartTotals();
		return;
	}

	cart.forEach((item) => {
		const product = products.find((p) => p.id === item.productId);
		if (!product) return;

		const total = product.price * item.quantity;
		const row = document.createElement("tr");
		row.innerHTML = `
            <td class="product-thumbnail">
                <img class="product-cart-image" src="${product.image}" alt="${
			product.name
		}" class="img-fluid" />
            </td>
            <td class="product-name">
                <h2 class="h5 text-black">${product.name}</h2>
            </td>
            <td>$${product.price.toFixed(2)}</td>
            <td class="quntity-container-cart">
                <div class="quntity-container input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px">
                    <button class="btn btn-outline-black decrease" type="button">&minus;</button>
                    <input type="text" class="form-control text-center quantity-amount" value="${
											item.quantity
										}" 
                           data-product-id="${
															product.id
														}" aria-label="Quantity" />
                    <button class="btn btn-outline-black increase" type="button">&plus;</button>
                </div>
            </td>
            <td>$${total.toFixed(2)}</td>
            <td>
                <button class="btn btn-black btn-sm remove-item" data-product-id="${
									product.id
								}">
                    <i class="fa fa-times"></i>
                </button>
            </td>
        `;
		cartItemsContainer.appendChild(row);
	});

	// Add event listeners for quantity controls
	setupQuantityControls();
	updateCartTotals();
}

// Function to setup quantity controls
function setupQuantityControls() {
	// Decrease quantity buttons
	document.querySelectorAll(".decrease").forEach((button) => {
		button.addEventListener("click", (e) => {
			const input = e.target.parentElement.querySelector(".quantity-amount");
			const currentValue = parseInt(input.value);
			if (currentValue > 1) {
				input.value = currentValue - 1;
				updateCartItemQuantity(input);
			}
		});
	});

	// Increase quantity buttons
	document.querySelectorAll(".increase").forEach((button) => {
		button.addEventListener("click", (e) => {
			const input = e.target.parentElement.querySelector(".quantity-amount");
			const currentValue = parseInt(input.value);
			if (currentValue < 10) {
				input.value = currentValue + 1;
				updateCartItemQuantity(input);
			}
		});
	});

	// Quantity input change
	document.querySelectorAll(".quantity-amount").forEach((input) => {
		input.addEventListener("change", () => {
			updateCartItemQuantity(input);
		});
	});

	// Remove item buttons
	document.querySelectorAll(".remove-item").forEach((button) => {
		button.addEventListener("click", (e) => {
			const productId = parseInt(e.target.dataset.productId);
			removeCartItem(productId);
		});
	});
}

// Function to update cart item quantity
function updateCartItemQuantity(input) {
	const productId = parseInt(input.dataset.productId);
	const newQuantity = parseInt(input.value);

	if (newQuantity < 1) {
		input.value = 1;
		return;
	}
	if (newQuantity > 10) {
		input.value = 10;
		return;
	}

	const cartItem = cart.find((item) => item.productId === productId);
	if (cartItem) {
		cartItem.quantity = newQuantity;
		saveCart();
		renderCartItems();
	}
}

// Function to remove cart item
function removeCartItem(productId) {
	// Store the productId for use in the confirmation
	window.productToRemove = productId;

	// Show the confirmation modal
	const modal = new bootstrap.Modal(
		document.getElementById("confirmationModal")
	);
	modal.show();
}

// Function to handle the actual removal after confirmation
function handleConfirmedRemove() {
	const productId = window.productToRemove;
	if (productId) {
		cart = cart.filter((item) => item.productId !== productId);
		saveCart();
		renderCartItems();
		updateCartCount();

		// Show success message
		const successMessage = document.createElement("div");
		successMessage.className = "alert alert-success mt-3";
		successMessage.textContent = "Item removed from cart successfully!";
		document
			.querySelector(".untree_co-section .container")
			.insertBefore(successMessage, document.querySelector(".row.mb-5"));

		// Remove success message after 3 seconds
		setTimeout(() => {
			successMessage.remove();
		}, 3000);

		// Clear the stored productId
		window.productToRemove = null;
	}
}

// Function to update cart totals
function updateCartTotals() {
	const subtotal = cart.reduce((total, item) => {
		const product = products.find((p) => p.id === item.productId);
		return total + (product ? product.price * item.quantity : 0);
	}, 0);

	document.getElementById("cartSubtotal").textContent = `$${subtotal.toFixed(
		2
	)}`;
	document.getElementById("cartTotal").textContent = `$${subtotal.toFixed(2)}`;
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
	renderCartItems();

	// Update Cart button
	document.getElementById("updateCart").addEventListener("click", () => {
		if (cart.length === 0) {
			const emptyCartModal = new bootstrap.Modal(
				document.getElementById("emptyCartModal")
			);
			emptyCartModal.show();
			return;
		}
		renderCartItems();
	});

	// Continue Shopping button
	document.getElementById("continueShopping").addEventListener("click", () => {
		window.location.href = "shop.html";
	});

	// Proceed to Checkout button
	document.getElementById("proceedToCheckout").addEventListener("click", () => {
		if (cart.length === 0) {
			// Show empty cart modal instead of alert
			const emptyCartModal = new bootstrap.Modal(
				document.getElementById("emptyCartModal")
			);
			emptyCartModal.show();
			return;
		}
		window.location.href = "checkout.html";
	});

	// Confirm Remove button in modal
	document.getElementById("confirmRemove").addEventListener("click", () => {
		handleConfirmedRemove();
		// Hide the modal
		const modal = bootstrap.Modal.getInstance(
			document.getElementById("confirmationModal")
		);
		modal.hide();
	});
});
