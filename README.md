# Prime News App

Prime News App is a React-based web application that allows users to browse and read news articles from various categories. It integrates with the News API to fetch real-time news data and provides features such as favorite articles, detailed article view, weather information, and more.

![Prime News App Screenshot](./demo/screenshot.png)

## Features

- **Top Stories**: Display top news stories with a scrolling ticker for headlines.
- **Category Navigation**: Navigate through different news categories such as Politics, Business, Sports, Fashion, etc., using the navbar.
- **Search**: Search functionality to filter news articles based on keywords.
- **Detailed Article View**: View detailed information about each article, including the full content and the option to visit the original source.
- **Favorites**: Mark articles as favorites and store them locally using localStorage.
- **Pagination**: Navigate through pages of articles for seamless browsing.
- **Weather Information**: Display current weather information based on the user's location input.

## Technologies Used

- **React**: Front-end JavaScript library for building user interfaces.
- **Redux Toolkit**: State management library for managing application state.
- **React Router**: Declarative routing for React applications.
- **Axios**: Promise-based HTTP client for making API requests.
- **News API**: Source of real-time news data.
- **Tailwind CSS**: Utility-first CSS framework for styling the UI.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version >= 12.0.0)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/prime-news-app.git

2. Navigate into the project directory:

    cd prime-news-app

3. Install dependencies:

    npm install
    # or
    yarn install

4. Start the development server:

    npm start
    # or
    yarn start

5. Open your browser and navigate to http://localhost:5173 to view the app.

# Folder Structure
src/
|-- components/
|   |-- Navbar.jsx
|   |-- TopStories.jsx
|   |-- LocationAndWeather.jsx
|   |-- Highlights.jsx
|   |-- NewsCard.jsx
|   |-- DetailedView.jsx
|-- slices/
|   |-- newsSlice.js
|-- App.jsx
|-- index.js
|-- store.js

# Contributing
    Contributions are welcome! Please feel free to fork the repository and submit pull requests.

# Authors - Suman Saha

# Acknowledgments
Inspiration: News API
Icons: Google Icons

# Note
    Please note that this project uses a public and free version of the News API, which may occasionally encounter issues or have limitations in terms of data availability and rate limits.


