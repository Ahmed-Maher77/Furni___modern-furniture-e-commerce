// Blog posts data
const blogPosts = [
	{
		id: 1,
		title: "Essential Furniture for First-Time Homeowners",
		image: "images/post-1.jpg",
		author: "Sarah Johnson",
		date: "Mar 15, 2024",
		excerpt:
			"Discover the must-have furniture pieces for your new home and how to arrange them for maximum comfort and style.",
	},
	{
		id: 2,
		title: "Complete Guide to Furniture Maintenance",
		image: "images/post-2.jpg",
		author: "Michael Chen",
		date: "Mar 10, 2024",
		excerpt:
			"Learn the best practices for maintaining and preserving your furniture to ensure it lasts for years to come.",
	},
	{
		id: 3,
		title: "Maximizing Small Spaces with Smart Furniture",
		image: "images/post-3.jpg",
		author: "David Rodriguez",
		date: "Mar 5, 2024",
		excerpt:
			"Creative solutions and furniture choices that make the most of limited living spaces.",
	},
	{
		id: 4,
		title: "Sustainable Furniture: Making Eco-Friendly Choices",
		image: "images/post-4.jpg",
		author: "David Wilson",
		date: "Feb 28, 2024",
		excerpt:
			"How to choose environmentally conscious furniture that doesn't compromise on style or quality.",
	},
	{
		id: 5,
		title: "Creating the Perfect Home Office Setup",
		image: "images/post-5.jpg",
		author: "Lisa Thompson",
		date: "Feb 20, 2024",
		excerpt:
			"Essential furniture and layout tips for a productive and comfortable home office environment.",
	},
	{
		id: 6,
		title: "Seasonal Furniture Updates for Spring 2024",
		image: "images/post-6.jpg",
		author: "James Anderson",
		date: "Feb 15, 2024",
		excerpt:
			"Fresh ideas and trends to update your home's furniture for the spring season.",
	},
];

// Function to render blog posts
function renderBlogPosts() {
	const blogSection = document.querySelector(".blog-section .row");
	if (!blogSection) return;

	// Clear existing content
	blogSection.innerHTML = "";

	// Render each post
	blogPosts.forEach((post) => {
		const postHTML = `
            <div class="col-12 col-sm-6 col-md-4 mb-5">
                <div class="post-entry">
                    <a href="blog-post.html?id=${post.id}" class="post-thumbnail">
                        <img src="${post.image}" alt="${post.title}" class="img-fluid" />
                    </a>
                    <div class="post-content-entry">
                        <h3><a href="blog-post.html?id=${post.id}">${post.title}</a></h3>
                        <div class="meta">
                            <span>by <a href="#">${post.author}</a></span>
                            <span>on <a href="#">${post.date}</a></span>
                        </div>
                    </div>
                </div>
            </div>
        `;
		blogSection.innerHTML += postHTML;
	});
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", renderBlogPosts);
