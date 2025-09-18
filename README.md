<h1>Pure Cinema: Your gateWay to Movies</h1>
Effortlessly explore, discover, and stay updated on the world of cinema.

<h2>Overview</h2>
<p>CineFind is a dynamic web application built for movie enthusiasts. 
  It allows users to effortlessly search for movies from a vast database and discover what's currently trending based on popular search queries. 
  This project highlights efficient data fetching and a seamless user experience</p>

<h2>Key Features</h2>
Extensive Movie Search: Search for any movie using a comprehensive search bar
Real-time Trending Movies: A dedicated section displaying currently trending movies, driven by a custom logic based on search count
Responsive Design: Enjoy a consistent experience across various devices, from mobile to desktop
Efficient Data Handling: Implemented debouncing on the search input for optimized API calls and improved performance

<h2>Technologies Used</h2>
Frontend: React, Tailwind CSS
Movie Data API: The Movie Database (TMDB) API
Backend: Appwrite (for managing search counts and trending logic)
Version Control: Git, GitHub

<h2>Challenges and Learning</h2>
<p>Efficient Search: Managing rapid user input for the search bar was a key learning. 
Implementing debouncing was a really cool discovery – it significantly optimized API calls to TMDB, preventing unnecessary requests and improving the responsiveness of the search feature.</p>
<p>Backend Integration for Trending: Designing and implementing the logic in Appwrite to track search counts and dynamically display
trending movies was a valuable experience in full-stack integration and custom backend development</p>

<h2>How to run project</h2>

<h2>Step 1: Backend Setup with Appwrite</h2>
The "trending" feature of the app relies on an Appwrite backend to track movie search counts. You'll need to set this up first.

<li>Launch Appwrite: Open your terminal and run the following command to start your Appwrite instance. You will need to choose your preferred platform (e.g., Linux, macOS, or Windows). Refer to the official Appwrite installation guide for full details.</li>

<li>Create a Project: Navigate to your Appwrite console and create a new project.</li>

<li>Create a Database and Collection: Within your new project, go to the Databases section.</li>

<li>Create a new database for your project.</li>

<li>Inside the database, create a collection (e.g., movieSearches). This collection will store the search queries.</li>

<h3>Add two attributes to this collection:</h3>

<li>A string attribute for the movieTitle.</li>

<li>An integer attribute for the searchCount.</li>

<h2>Step 2: Get API Keys and Environment Variables</h2>
CineFind needs API keys to fetch movie data and connect to your Appwrite backend.

<li>TMDB API Key: Register for a free account at The Movie Database (TMDB). After creating your account, you can find your personal API key under the API section of your settings.</li>

<li>Appwrite Credentials: In your Appwrite console, locate the Settings section of your project. Here you will find your Project ID and API Endpoint.</li>

<li>Create .env.local file: In the root directory of the project, create a new file named .env.local. This file will store your private credentials.</li>

<li>Add Credentials to .env.local: Add the following lines to your .env.local file, replacing the placeholder values with your actual keys and IDs.</li>

```Bash
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
```
<h2>Step 3: Clone and Install Dependencies</h2>
Now you're ready to get the project code and install its dependencies.

Clone the Repository:

```Bash

git clone https://github.com/your-username/CineFind.git
```

Install Packages:

```Bash

npm install
# or
yarn install
```
<h2>Step 4: Run the Application</h2>
The final step is to start the development server.

Start the Server:

```Bash

npm run dev
# or
yarn dev
```
Access the Application: Your application should now be running. Open your web browser and navigate to http://localhost:3000 to view it.


