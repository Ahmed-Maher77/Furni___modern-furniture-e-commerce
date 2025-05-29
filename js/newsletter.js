// Newsletter form validation and submission using Bootstrap's .was-validated

document.addEventListener("DOMContentLoaded", function () {
	const newsletterForm = document.getElementById("newsletterForm");

	if (newsletterForm) {
		newsletterForm.addEventListener("submit", function (event) {
			event.preventDefault();
			this.classList.remove("was-validated");

			if (!this.checkValidity()) {
				event.stopPropagation();
				this.classList.add("was-validated");
				return;
			}

			// Get form data
			const name = document.getElementById("name").value;

			// Show Bootstrap toast for success
			const toast = document.createElement("div");
			toast.className =
				"toast align-items-center text-white bg-success border-0 position-fixed top-0 start-50 translate-middle-x mt-3";
			toast.setAttribute("role", "alert");
			toast.setAttribute("aria-live", "assertive");
			toast.setAttribute("aria-atomic", "true");

			toast.innerHTML = `
				<div class=\"d-flex\">
					<div class=\"toast-body\">
						<strong>Thank you, ${name}!</strong> You have successfully subscribed to our newsletter.
					</div>
					<button type=\"button\" class=\"btn-close btn-close-white me-2 m-auto\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>
				</div>
			`;

			document.body.appendChild(toast);
			const bsToast = new bootstrap.Toast(toast);
			bsToast.show();

			// Remove toast after it's hidden
			toast.addEventListener("hidden.bs.toast", function () {
				toast.remove();
			});

			// Reset form and validation state
			this.reset();
			this.classList.remove("was-validated");
		});
	}
});
