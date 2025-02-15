# URL Shortener

## overview
A lightweight and efficient URL shortener built using Node.js, Express.js, and MongoDB Atlas. This service enables users to shorten long URLs, share them easily, and track click analytics.

## 📂 Project Structure

```bash
url-shortener/
│-- config/
│   └── db.js            # Database connection setup
│-- controller/
│   └── url.controller.js # Handles business logic for URL operations
│-- models/
│   └── url.model.js      # Mongoose schema/model for storing URLs
│-- routes/
│   └── url.routes.js     # Defines API endpoints for URL operations
│-- views/
│   └── index.ejs         # Frontend template for rendering pages
│-- node_modules/         # Dependencies (ignored in Git)
│-- .env.example          # Example environment file (safe to upload)
│-- .gitignore            # Ignore node_modules, env files
│-- package.json          # Project metadata and dependencies
│-- package-lock.json     # Lock file for dependencies
│-- server.js             # Main entry point (starts Express server)
│-- url-image.jpg         # Example image for documentation

