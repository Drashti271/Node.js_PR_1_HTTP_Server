# Node.js_PR_1_HTTP_Server

Node.js HTTP Server

This project is a simple HTTP server built using Node.js. It serves multiple static HTML pages (Home, About, Blog, Contact) and includes a custom 404 error page.

📂 Project Structure
Node.js_PR_1_HTTP_Server/
│
├── 404.html        # Custom 404 error page
├── about.html      # About page
├── blog.html       # Blog page
├── contact.html    # Contact page
├── home.html       # Home page
├── index.html      # Default landing page
├── index.js        # Node.js server file
└── README.md       # Documentation

🚀 Features

Serves static HTML pages (home, about, blog, contact).

Default route loads index.html.

Handles invalid routes with a custom 404.html page.

Built without external frameworks (only Node.js core modules).

⚙️ Setup & Installation

Clone this repository:

git clone <repo-url>
cd Node.js_PR_1_HTTP_Server


Install Node.js (if not already installed):
Download Node.js

Start the server:

node index.js


Open your browser and go to:

http://localhost:3000

🛠 How It Works

The server listens on port 3000 (can be changed in index.js).

Routes:

/ → index.html

/home → home.html

/about → about.html

/blog → blog.html

/contact → contact.html

Any other route → 404.html
