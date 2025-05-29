(function () {
	"use strict";

	var tinyslider = function () {
		var el = document.querySelectorAll(".testimonial-slider");

		if (el.length > 0) {
			var slider = tns({
				container: ".testimonial-slider",
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false,
			});
		}
	};
	tinyslider();

	var sitePlusMinus = function () {
		var value,
			quantity = document.getElementsByClassName("quantity-container");

		function createBindings(quantityContainer) {
			var quantityAmount =
				quantityContainer.getElementsByClassName("quantity-amount")[0];
			var increase = quantityContainer.getElementsByClassName("increase")[0];
			var decrease = quantityContainer.getElementsByClassName("decrease")[0];
			increase.addEventListener("click", function (e) {
				increaseValue(e, quantityAmount);
			});
			decrease.addEventListener("click", function (e) {
				decreaseValue(e, quantityAmount);
			});
		}

		function init() {
			for (var i = 0; i < quantity.length; i++) {
				createBindings(quantity[i]);
			}
		}

		function increaseValue(event, quantityAmount) {
			value = parseInt(quantityAmount.value, 10);

			console.log(quantityAmount, quantityAmount.value);

			value = isNaN(value) ? 0 : value;
			value++;
			quantityAmount.value = value;
		}

		function decreaseValue(event, quantityAmount) {
			value = parseInt(quantityAmount.value, 10);

			value = isNaN(value) ? 0 : value;
			if (value > 0) value--;

			quantityAmount.value = value;
		}

		init();
	};
	sitePlusMinus();

	// Team Members Data
	const teamMembers = [
		{
			id: 1,
			name: "Sarah Johnson",
			position: "Creative Director",
			image: "images/person_1.jpg",
			bio: "With over 10 years of experience in interior design, Sarah leads our creative vision and ensures every piece tells a story.",
			social: {
				linkedin: "https://linkedin.com",
				twitter: "https://twitter.com",
				instagram: "https://instagram.com",
			},
		},
		{
			id: 2,
			name: "Michael Chen",
			position: "Lead Designer",
			image: "images/person_2.jpg",
			bio: "Michael brings innovative design solutions and a passion for sustainable furniture to our team.",
			social: {
				linkedin: "https://linkedin.com",
				twitter: "https://twitter.com",
				instagram: "https://instagram.com",
			},
		},
		{
			id: 3,
			name: "Emma Rodriguez",
			position: "Product Manager",
			image: "images/person_3.jpg",
			bio: "Emma ensures our furniture meets the highest standards of quality and customer satisfaction.",
			social: {
				linkedin: "https://linkedin.com",
				twitter: "https://twitter.com",
				instagram: "https://instagram.com",
			},
		},
		{
			id: 4,
			name: "David Kim",
			position: "Customer Experience",
			image: "images/person_4.jpg",
			bio: "David leads our customer service team, making sure every client receives exceptional support.",
			social: {
				linkedin: "https://linkedin.com",
				twitter: "https://twitter.com",
				instagram: "https://instagram.com",
			},
		},
	];

	// Function to render team members
	function renderTeamMembers() {
		const teamContainer = document.querySelector(".team-section .row");
		if (!teamContainer) return;

		teamContainer.innerHTML = teamMembers
			.map(
				(member) => `
			<div class="member-card-container col-12 col-md-6 col-lg-4 col-xxl-3 mb-5 mb-md-0">
				<div class="team-member-card">
					<div class="member-image">
						<img src="${member.image}" alt="${member.name}" class="img-fluid" />
						<div class="social-links">
							<a href="${member.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
							<a href="${member.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
							<a href="${member.social.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
						</div>
					</div>
					<div class="member-info">
						<h3 class="member-name">
							<a href="#">${member.name}</a>
						</h3>
						<span class="position">${member.position}</span>
						<p class="bio">${member.bio}</p>
					</div>
				</div>
			</div>
		`
			)
			.join("");
	}

	// Call the function when DOM is loaded
	document.addEventListener("DOMContentLoaded", function () {
		renderTeamMembers();
	});

	// Newsletter Form Handler
	const newsletterForm = document.getElementById("newsletterForm");
	const newsletterMessage = document.getElementById("newsletterMessage");

	if (newsletterForm) {
		newsletterForm.addEventListener("submit", function (e) {
			e.preventDefault();

			const nameInput = this.querySelector('input[type="text"]');
			const emailInput = this.querySelector('input[type="email"]');

			// Basic validation
			if (!nameInput.value.trim()) {
				showNewsletterMessage("Please enter your name", "error");
				return;
			}

			if (!emailInput.value.trim()) {
				showNewsletterMessage("Please enter your email", "error");
				return;
			}

			if (!isValidEmail(emailInput.value)) {
				showNewsletterMessage("Please enter a valid email address", "error");
				return;
			}

			// Simulate subscription success
			showNewsletterMessage(
				"Thank you for subscribing to our newsletter!",
				"success"
			);

			// Clear form
			nameInput.value = "";
			emailInput.value = "";
		});
	}

	function showNewsletterMessage(message, type) {
		if (newsletterMessage) {
			newsletterMessage.textContent = message;
			newsletterMessage.className = type;
			newsletterMessage.style.display = "block";

			// Hide message after 5 seconds
			setTimeout(() => {
				newsletterMessage.style.display = "none";
			}, 5000);
		}
	}

	function isValidEmail(email) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}
})();
