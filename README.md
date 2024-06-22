Prime News
Prime News is a responsive web application that provides users with top headlines and articles across various categories. It utilizes the News API to fetch real-time news data and allows users to explore articles, save favorites, and filter by category or search term.


Features
Top Stories: Display top headlines from various news sources.
Category Filtering: Navigate through categories like Politics, Business, Sports, and more.
Search Functionality: Search for articles by keywords.
Detailed View: View full details of an article, including images and content.
Favorites: Save favorite articles using localStorage.
Pagination: Navigate through different pages of articles.
Technologies Used
Frontend: React.js, Redux Toolkit, React Router DOM, Axios
Styling: Tailwind CSS
API: News API
Build Tools: Vite (for fast development and optimized builds)
Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
cd prime-news-app
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory.

Add your News API key:

plaintext
Copy code
REACT_APP_NEWS_API_KEY=your_api_key_here
Start the development server:

bash
Copy code
npm start
Open http://localhost:3000 to view the app in the browser.

Usage
Select a category from the navbar to view related articles.
Use the search bar to find articles by keywords.
Click on "Read More" on any article to view its detailed content.
Favorite articles by clicking the "Favorite" button on each news card.
Folder Structure
plaintext
Copy code
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
Responsiveness
Prime News is designed to be fully responsive, ensuring a seamless experience across desktop, tablet, and mobile devices. The layout adapts fluidly to different screen sizes, providing consistent usability and readability.

Contributing
Contributions are welcome! Please fork the repository and create a pull request with your improvements. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License - see the LICENSE file for details.