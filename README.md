

MERN Stack Coding Challenge - Frontend
This project implements a frontend application for displaying transaction data fetched from APIs provided by a backend server. It includes a table, statistics section, and bar chart for visualizing transaction details based on selected months.

Screenshots



Prerequisites
Before running this project locally, ensure you have the following installed:

Node.js (v14.0.0 or higher)
npm (v6.0.0 or higher)
Git
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/prachinayakal/Roxiler-Task.git
cd Roxiler-Task/frontend
Install dependencies:

bash
Copy code
npm install
Usage
Running the Development Server
To start the development server:

bash
Copy code
npm start
Open http://localhost:3000 to view it in the browser.

Building for Production
To build the project for production deployment:

bash
Copy code
npm run build
This will create an optimized build of your application in the build folder.

Deploying to GitHub Pages
To deploy the application to GitHub Pages:

Ensure you have gh-pages installed:

bash
Copy code
npm install gh-pages --save-dev
Update package.json with your GitHub Pages URL:

json
Copy code
{
  "homepage": "https://prachinayakal.github.io/Roxiler-Task",
  "scripts": {
    "deploy": "gh-pages -d build"
  }
}
Deploy using:

bash
Copy code
npm run deploy
Features
Transactions Table: Displays transaction data with search and pagination functionalities.
Transactions Statistics: Shows total sale amount, sold items, and not sold items for the selected month.
Transactions Bar Chart: Visualizes price ranges and corresponding item counts for the selected month.
APIs Used
Transactions API: Fetches and displays transaction data.
Statistics API: Retrieves total sale amount, sold items, and not sold items for a selected month.
Bar Chart API: Provides data for displaying price range vs. number of items in a bar chart.
Technologies Used
React.js
Axios for API requests
Recharts for chart visualizations
CSS for styling
Acknowledgments
This project is part of a coding challenge to demonstrate MERN stack development skills.
Backend APIs are assumed to be provided and implemented separately.
