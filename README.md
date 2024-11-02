# Star Wars Heroes Explorer "STARWEB"
This project is a Star Wars character catalog and details explorer built with data from the StarNavi Star Wars API. Users can browse a list of Star Wars heroes and view detailed, graph-based information about each character, including related films and spaceships.

## Project Overview
Heroes List: Displays a list of Star Wars characters fetched from the StarNavi API.
The list can be paginated or implemented with infinite scroll, depending on your preference.
Character Details: Provides detailed information on each character in a graph visualization:
The main node represents the selected hero.
Connections branch out from the hero to the films they appear in.
Each film node links to spaceships the hero traveled on.
Getting Started
Follow these steps to set up and run the project on your local machine.

## Prerequisites
Node.js (v14 or higher)
npm or yarn as the package manager

## Installation

- Clone the repository:

`git clone https://github.com/yourusername/star-wars-heroes-explorer.git`
`cd star-wars-heroes-explorer`

- Install dependencies:

`npm install`
# or
`yarn install`

## Set up environment variables:

- Create a .env file in the root directory.
- Add the API endpoint, as provided by StarNavi, for the Star Wars API.
- Example:
  
`REACT_APP_STAR_WARS_API_URL=https://sw-api.starnavi.io`

## Run the development server:

`npm run dev`
# or
`yarn dev`

The application should be running at http://localhost:5173.

## Technologies Used

- React for the front-end framework.
- Redux Toolkit for state management.
- React Router for navigation and routing.
- React Flow for graph-based visualization of character details.
- Axios for API requests to the StarNavi Star Wars API.
- TailwindCSS for styling components.

## Features

- Paginated/Infinite Scroll Hero List: Browse a list of characters with dynamic loading options.
- Detailed Graph View: Click on a hero to view an interactive graph with related films and spaceships.
- Error Handling: Displays appropriate messages for errors encountered during data fetches.
- Responsive Design: Optimized for both desktop and mobile views.
