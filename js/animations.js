// Initialize GSAP animations when the page loads
document.addEventListener("DOMContentLoaded", () => {
	// Register ScrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);

	// Brand name animation
	gsap.from(".navbar-brand", {
		duration: 0.8,
		y: -50,
		opacity: 0,
		ease: "power3.out",
	});

	// Navigation links animation
	gsap.from(".custom-navbar-nav li", {
		duration: 0.5,
		y: -30,
		opacity: 0,
		stagger: 0.1,
		ease: "power2.out",
		delay: 0.3,
	});

	// Cart icon animation
	gsap.from(".custom-navbar-cta li", {
		duration: 0.5,
		y: -30,
		opacity: 0,
		ease: "power2.out",
		delay: 0.8,
	});

	// Hero section animations
	gsap.from(".hero .intro-excerpt h1", {
		duration: 1,
		y: 50,
		opacity: 0,
		ease: "power3.out",
		delay: 1,
	});

	gsap.from(".hero .intro-excerpt p", {
		duration: 1,
		y: 30,
		opacity: 0,
		ease: "power3.out",
		delay: 1.3,
	});

	gsap.from(".hero .btn", {
		duration: 0.8,
		y: 20,
		opacity: 0,
		stagger: 0.2,
		ease: "power2.out",
		delay: 1.6,
	});

	gsap.from(".hero .hero-img-wrap", {
		duration: 1.2,
		x: 100,
		opacity: 0,
		ease: "power3.out",
		delay: 1.2,
	});

	// Product section first column animations
	gsap.from(".product-section .section-title", {
		duration: 0.8,
		y: 30,
		opacity: 0,
		scrollTrigger: {
			trigger: ".product-section",
			start: "top 80%",
			toggleActions: "play none none reverse",
		},
	});

	gsap.from(".product-section .col-md-12.col-lg-3 p", {
		duration: 0.8,
		y: 30,
		opacity: 0,
		scrollTrigger: {
			trigger: ".product-section",
			start: "top 70%",
			toggleActions: "play none none reverse",
		},
	});

	gsap.from(".product-section .col-md-12.col-lg-3 .btn", {
		duration: 0.8,
		y: 20,
		opacity: 0,
		scrollTrigger: {
			trigger: ".product-section",
			start: "top 70%",
			toggleActions: "play none none reverse",
		},
	});

	// Why Choose Us section animations
	gsap.from(".why-choose-section .section-title", {
		duration: 1,
		y: 30,
		opacity: 0,
		scrollTrigger: {
			trigger: ".why-choose-section",
			start: "top 80%",
			toggleActions: "play none none reverse",
		},
	});

	gsap.from(".why-choose-section .col-lg-6 > p", {
		duration: 1,
		y: 30,
		opacity: 0,
		scrollTrigger: {
			trigger: ".why-choose-section",
			start: "top 60%",
			toggleActions: "play none none reverse",
		},
	});

	gsap.from(".why-choose-section .feature", {
		duration: 1,
		y: 40,
		opacity: 0,
		stagger: 0.2,
		scrollTrigger: {
			trigger: ".why-choose-section",
			start: "top 45%",
			toggleActions: "play none none reverse",
		},
	});

	gsap.from(".why-choose-section .img-wrap", {
		duration: 1,
		x: 50,
		opacity: 0,
		scrollTrigger: {
			trigger: ".why-choose-section",
			start: "top 70%",
			toggleActions: "play none none reverse",
		},
	});

	// We Help section animations
	gsap.from(".we-help-section .section-title", {
		duration: 1,
		y: 30,
		opacity: 0,
		scrollTrigger: {
			trigger: ".we-help-section",
			start: "top 80%",
			toggleActions: "play none none reverse",
		},
	});

	gsap.from(".we-help-section .col-lg-5 > p", {
		duration: 1,
		y: 30,
		opacity: 0,
		scrollTrigger: {
			trigger: ".we-help-section",
			start: "top 60%",
			toggleActions: "play none none reverse",
		},
	});

	gsap.from(".we-help-section .custom-list li", {
		duration: 1,
		x: -30,
		opacity: 0,
		stagger: 0.2,
		scrollTrigger: {
			trigger: ".we-help-section",
			start: "top 45%",
			toggleActions: "play none none reverse",
		},
	});

	gsap.from(".we-help-section .btn", {
		duration: 1,
		y: 20,
		opacity: 0,
		scrollTrigger: {
			trigger: ".we-help-section",
			start: "top 45%",
			toggleActions: "play none none reverse",
		},
	});

	gsap.from(".we-help-section .grid", {
		duration: 1,
		scale: 0.9,
		opacity: 0,
		stagger: 0.3,
		scrollTrigger: {
			trigger: ".we-help-section",
			start: "top 60%",
			toggleActions: "play none none reverse",
		},
	});

	// Popular Product section animations
	gsap.from(".popular-product .product-item-sm", {
		duration: 1,
		y: 50,
		opacity: 0,
		stagger: 0.3,
		scrollTrigger: {
			trigger: ".popular-product",
			start: "top 70%",
			toggleActions: "play none none reverse",
		},
	});

	gsap.from(".popular-product .thumbnail", {
		duration: 1,
		scale: 0.9,
		opacity: 0,
		stagger: 0.3,
		scrollTrigger: {
			trigger: ".popular-product",
			start: "top 70%",
			toggleActions: "play none none reverse",
		},
	});

	gsap.from(".popular-product h3", {
		duration: 1,
		y: 20,
		opacity: 0,
		stagger: 0.3,
		scrollTrigger: {
			trigger: ".popular-product",
			start: "top 70%",
			toggleActions: "play none none reverse",
		},
	});

	gsap.from(".popular-product p", {
		duration: 1,
		y: 20,
		opacity: 0,
		stagger: 0.3,
		scrollTrigger: {
			trigger: ".popular-product",
			start: "top 70%",
			toggleActions: "play none none reverse",
		},
	});

	// Testimonials section animations
	gsap.from(".testimonial-section .section-title", {
		duration: 1,
		y: 30,
		opacity: 0,
		scrollTrigger: {
			trigger: ".testimonial-section",
			start: "top 80%",
			toggleActions: "play none none reverse",
		},
	});

	gsap.from(".testimonial-block blockquote", {
		duration: 1,
		y: 40,
		opacity: 0,
		scrollTrigger: {
			trigger: ".testimonial-section",
			start: "top 70%",
			toggleActions: "play none none reverse",
		},
	});

	gsap.from(".testimonial-block .author-info", {
		duration: 1,
		y: 30,
		opacity: 0,
		scrollTrigger: {
			trigger: ".testimonial-section",
			start: "top 70%",
			toggleActions: "play none none reverse",
		},
	});

	// Blog section animations
	gsap.from(".blog-section .section-title", {
		duration: 1,
		y: 30,
		opacity: 0,
		scrollTrigger: {
			trigger: ".blog-section",
			start: "top 80%",
			toggleActions: "play none none reverse",
		},
	});

	gsap.from(".blog-section .more", {
		duration: 1,
		y: 30,
		opacity: 0,
		scrollTrigger: {
			trigger: ".blog-section",
			start: "top 80%",
			toggleActions: "play none none reverse",
		},
	});

	gsap.from(".post-entry", {
		duration: 1,
		y: 50,
		opacity: 0,
		stagger: 0.3,
		scrollTrigger: {
			trigger: ".blog-section",
			start: "top 70%",
			toggleActions: "play none none reverse",
		},
	});

	// Footer section animations
	gsap.from(".footer-section .sofa-img", {
		duration: 1.2,
		y: 50,
		opacity: 0,
		scrollTrigger: {
			trigger: ".footer-section",
			start: "top 90%",
			toggleActions: "play none none reverse",
		},
	});

	gsap.from(".subscription-form", {
		duration: 1,
		y: 40,
		opacity: 0,
		scrollTrigger: {
			trigger: ".footer-section",
			start: "top 80%",
			toggleActions: "play none none reverse",
		},
	});

	gsap.from(".footer-logo-wrap", {
		duration: 1,
		y: 30,
		opacity: 0,
		scrollTrigger: {
			trigger: ".footer-section",
			start: "top 80%",
			toggleActions: "play none none reverse",
		},
	});

	gsap.from(".footer-section .links-wrap", {
		duration: 1,
		y: 40,
		opacity: 0,
		stagger: 0.2,
		scrollTrigger: {
			trigger: ".footer-section",
			start: "top 70%",
			toggleActions: "play none none reverse",
		},
	});

	gsap.from(".custom-social li", {
		duration: 0.8,
		y: 20,
		opacity: 0,
		stagger: 0.1,
		scrollTrigger: {
			trigger: ".footer-section",
			start: "top 80%",
			toggleActions: "play none none reverse",
		},
	});
});
