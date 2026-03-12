### Course Selling App - Backend

A simple Node.js backend setup for a Course Selling App. This README explains how to set up the project and push it to GitHub.

# 🛠️ Setup Instructions

Initialize Node.js project:

npm init -y

# Create the main file:

index.js

# Install required dependencies:

npm i express mongoose jsonwebtoken

# Write skeleton code for your server and routes.

# 💾 GitHub Workflow- keep pushing to github

Go to your project folder:

cd "Course Selling App - Backend"

Initialize Git:

git init

Stage and commit your files:

git add .
git commit -m "Initial commit"

Connect to GitHub:

git remote add origin https://github.com/The-AarushiSingh/Coursera-Backend.git

Push your code:

git push -u origin master  # or main if your branch is named main

For future updates:

git add .
git commit -m "update message"
git push
📌 Git Command Reference
Command	Purpose
git init	Start Git in the project
git add .	Stage files
git commit -m "message"	Save snapshot of changes
git remote add origin <url>	Connect local repo to GitHub
git push	Upload code to GitHub

# ✅ Notes
Make sure .gitignore includes node_modules/ and .env to avoid pushing unnecessary files.

Always commit small changes often to keep your history clean.

### create skeleton routes 
signup
login
see all courses
see purchased couses
purchase a course

### Added Routers -> express.router

### create DB schema
