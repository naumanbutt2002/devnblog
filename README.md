# DevNBlog Application

![Platform](https://img.shields.io/badge/platform-Web%20|%20MERN-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Architecture](#architecture)
- [Environment Variables](#environment-variables)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

**DevNBlog** is a comprehensive blog application developed using the **MERN stack** (MongoDB, Express, React, Node.js). It offers a dynamic and interactive experience, allowing users to manage posts, comments, and users through **CRUD operations**. The application also features **JWT-based authentication** and **Google OAuth** for secure user login, as well as a sleek **dark mode** interface and **advanced search** functionality. 

DevNBlog ensures a responsive and engaging community experience, designed to cater to both desktop and mobile users.

**Live Demo**: [DevNBlog Application](https://devnblog.up.railway.app/)

## Features

- **JWT-Based Authentication & Google OAuth**: Secure authentication using JSON Web Tokens and Google OAuth for seamless sign-in.
- **CRUD Operations**: Complete functionality for creating, reading, updating, and deleting blog posts, comments, and user profiles.
- **Dark Mode**: Sleek and responsive design with an optional dark mode for better user experience.
- **Dashboard for Admins**: Manage posts, comments, and users easily through a dedicated dashboard.
- **Advanced Search and Sorting**: Enhanced search functionality with options for sorting posts by date, popularity, or user preferences.
- **Community Engagement**: Users can interact with posts by leaving, editing, and deleting comments.

## Screenshots

| ![Home Screen](https://github.com/user-attachments/assets/e3593aea-b39a-4f1f-a0dc-2eaf743a97f8) | ![Admin Dashboard](https://github.com/user-attachments/assets/437fcfee-a36a-477d-8147-1e222e9c036d) |
|:---------------------------------------------:|:----------------------------------------------:|
| *Home Screen*                                 | *Admin Dashboard*                   |

| ![Post Page Mode](https://github.com/user-attachments/assets/3af53b05-8860-4c9a-be2b-a7c250d12ddf) | ![Post Details](https://github.com/user-attachments/assets/d1069be5-756d-4efa-a402-e5e1ecd81ef5) |
|:------------------------------------------------:|:--------------------------------------------:|
|  *Post Page Interface*                                | *Post Details with Comments*                        |
## Installation

### Prerequisites

- **Node.js**: Ensure Node.js is installed. You can download it from the [official website](https://nodejs.org/).
- **MongoDB**: You need MongoDB set up either locally or on a cloud service like MongoDB Atlas.
- **Firebase**: Set up Firebase for Google OAuth authentication.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/naumanbutt2002/devnblog.git
2. Navigate to the project directory:
   ```bash
   cd devnblog
3. Install server dependencies:
   ```bash
   npm install
4. Navigate to the client folder and install client dependencies:
   ```bash
   cd client
   npm install
5. Set up environment variables (See [Environment Variables](#environment-variables) section below).
6. Run the app:
   ```bash
   # Start the server
   npm run dev
   # In a new terminal, start the client
   cd client
   
## Usage
### Launching the App:

- Once the application is installed and running, you can access it by navigating to http://localhost:3000/ in your browser.
### Features:

- **Home Page**: Browse and search blog posts. Filter results by date, popularity, or author.
- **Post Details**: View detailed information about a post, along with comments from the community.
- **User Dashboard**: For admins, manage posts, comments, and users in a separate admin interface.
- **Commenting**: Users can leave comments, edit or delete their existing comments.
- **Authentication**: Log in using Google OAuth or create a new account with JWT-based authentication.

## Technologies Used
- **MongoDB**: NoSQL database for storing posts, users, and comments.
- **Express.js**: Backend framework to handle server-side logic.
- **React.js**: Frontend framework to create the user interface.
- **Node.js**: JavaScript runtime for server-side programming.
- **Redux**: State management for React.
- **Firebase**: For Google OAuth authentication.
- **JWT**: Token-based authentication for secure login.
  
## Architecture
The DevNBlog application follows a component-based architecture with separation of concerns. The backend follows REST principles, while the frontend is designed using reusable React components. The state management is handled by Redux for scalable and maintainable code.
 
### Folder Structure
   ```bash
client/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Pages (Home, PostDetails, etc.)
│   ├── redux/           # Redux actions, reducers
│   ├── utils/           # Utility functions and services
│   └── App.jsx           # Main app component

server/
├── .env/              # Env files for MongoDB, JWT
├── controllers/         # Express controllers for handling routes
├── models/              # Mongoose models (User, Post, Comment)
├── routes/              # Express routes (Auth, Posts, Comments)
└── index.js            # Main index file

```
## Environment Variables
To run this application, you need to set up two .env files with the following variables:
### Add .env file in the root of devnblog/ with variables:
   ```bash
MONGO= 'Your MONGODB connection string'
JWT_SECRET='Any type of letters or keys of your choice'
```
### Add .env file in devnblog/client/ with variables:
   ```bash
VITE_FIREBASE_API_KEY="Your Firebase API Key"
```
### External Services Setup
- Set up a MongoDB database either locally or online via [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database).
- Create a Firebase Account [here](https://firebase.google.com/).
- Create a new project on Google Cloud Platform for Google OAuth integration [here](https://console.cloud.google.com).



## Roadmap
- - [x] Initial release with core features.
- - [x] Add image upload functionality for posts.
- - [ ] Implement pagination for blog posts.
- - [ ] Integrate a notification system for comments and replies.
- - [ ] Add tagging functionality for posts.
- - [ ] Release version 1.0.

## Contributing
Contributions are welcome! Please follow the steps below:

1. Fork the repository.
2. Create a new branch ('**git checkout -b feature-branch**').
3. Make your changes.
4. Commit your changes ('**git commit -m 'Add some feature'**').
5. Push to the branch ('**git push origin feature-branch**').
6. Open a pull request.

Please ensure all contributions align with the Clean Architecture principles used in this project.

## License
Distributed under the [MIT](https://choosealicense.com/licenses/mit/) License. See LICENSE for more information.

## Contact
Muhammad Nauman</br>
naumanbutt2002@gmail.com</br>
[Linkedin](https://www.linkedin.com/in/muhammad-nauman-3746b718a//) | [Instagram](https://www.instagram.com/naumanbutt2002/)

You can also follow my GitHub Profile to stay updated about my latest projects: [Github](https://github.com/naumanbutt2002)

