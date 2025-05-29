document.addEventListener("DOMContentLoaded", function () {
	// Show loader immediately
	const loader = document.querySelector(".loader-wrapper");
	if (loader) {
		loader.style.display = "flex";
	}

	// Hide loader when page is fully loaded
	window.addEventListener("load", function () {
		if (loader) {
			loader.classList.add("fade-out");
			setTimeout(() => {
				loader.style.display = "none";
			}, 500);
		}
	});
});
