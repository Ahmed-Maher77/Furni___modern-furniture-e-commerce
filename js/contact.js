// Contact form validation and submission
document.addEventListener("DOMContentLoaded", function () {
	const contactForm = document.getElementById("contactForm");

	if (contactForm) {
		contactForm.addEventListener("submit", function (event) {
			event.preventDefault();

			// Reset previous validation states
			this.classList.remove("was-validated");

			// Check form validity
			if (!this.checkValidity()) {
				event.stopPropagation();
				this.classList.add("was-validated");
				return;
			}

			// Get form data
			const firstName = document.getElementById("fname").value;
			const lastName = document.getElementById("lname").value;
			const email = document.getElementById("email").value;
			const message = document.getElementById("message").value;

			// Here you would typically send the data to your server
			// For now, we'll just show a success message

			// Create and show success message
			const successMessage = document.createElement("div");
			successMessage.className =
				"alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3";
			successMessage.style.zIndex = "9999";
			successMessage.innerHTML = `
                <strong>Thank you, ${firstName}!</strong> Your message has been sent successfully. We'll get back to you soon.
            `;
			document.body.appendChild(successMessage);

			// Clear form
			this.reset();

			// Remove success message after 3 seconds
			setTimeout(() => {
				successMessage.remove();
			}, 3000);
		});
	}
});
