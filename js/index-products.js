// Function to render featured products
function renderFeaturedProducts() {
	const productsContainer = document.querySelector(".product-section .row");
	if (!productsContainer) return; // Exit if not on a page with products

	productsContainer.innerHTML = ""; // Clear existing content

	// Get first 4 products for featured section
	const featuredProducts = products.slice(0, 4);

	featuredProducts.forEach((product) => {
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
                    <span class="icon-cross">
                        <img src="images/cross.svg" class="img-fluid" />
                    </span>
                </a>
            </div>
        `;
		productsContainer.innerHTML += productHTML;
	});
}

// Call renderFeaturedProducts when the DOM is loaded
document.addEventListener("DOMContentLoaded", renderFeaturedProducts);
