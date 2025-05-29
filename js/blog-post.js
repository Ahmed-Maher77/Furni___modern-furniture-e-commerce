// Function to get post ID from URL
function getPostIdFromUrl() {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get("id");
}

// Function to find post by ID
function findPostById(id) {
	return blogPosts.find((post) => post.id === parseInt(id));
}

// Function to render blog post
function renderBlogPost() {
	const postId = getPostIdFromUrl();
	if (!postId) {
		window.location.href = "blog.html";
		return;
	}

	const post = findPostById(postId);
	if (!post) {
		window.location.href = "blog.html";
		return;
	}

	// Update page title
	document.title = `${post.title} - Furni Blog`;

	// Update post content
	const postTitle = document.querySelector(".post-title");
	const postAuthor = document.querySelector(".post-author");
	const postDate = document.querySelector(".post-date");
	const postImage = document.querySelector(".post-image img");
	const postContent = document.querySelector(".post-content");

	postTitle.textContent = post.title;
	postAuthor.textContent = `by ${post.author}`;
	postDate.textContent = `on ${post.date}`;
	postImage.src = post.image;
	postImage.alt = post.title;

	// Generate full post content
	postContent.innerHTML = `
        <p class="lead">${post.excerpt}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2>Key Points</h2>
        <ul>
            <li>First important point about ${post.title}</li>
            <li>Second key aspect to consider</li>
            <li>Third valuable insight</li>
            <li>Fourth practical tip</li>
        </ul>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <blockquote class="blockquote">
            <p class="mb-0">"The best furniture is the one that makes you feel at home."</p>
            <footer class="blockquote-footer">${post.author}</footer>
        </blockquote>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    `;
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", renderBlogPost);
