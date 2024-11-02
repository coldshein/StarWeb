import { Character } from "../types/character";
import { fetchFilmDetails, fetchStarshipDetails } from "../api/axios";
import GraphNode from "../components/GraphNode";

// Function to create nodes and edges for the films in which the hero appears
export const createFilmNodesAndEdges = async (hero: Character, heroId: string) => {
  // Define the fixed Y position for film nodes
  const filmPositionY = 400;
  // Define the starting X position for the first film node
  const filmPositionXStart = 100;
  // Define the offset for the X position for each subsequent film node
  const offsetX = 200;

  // Map over the hero's films to create an array of promises for fetching film details
  const filmPromises = hero.films.map((filmId, index) =>
    // Fetch film details and create a node and edge object
    fetchFilmDetails(filmId).then((film) => ({
      // Create the film node with its position and draggable property
      node: {
        id: `film-${filmId}`, // Unique ID for the film node
        data: { label: <GraphNode label={film.title} /> }, // Label for the node using the GraphNode component
        position: { x: filmPositionXStart + index * offsetX, y: filmPositionY }, // Calculate the position based on the index
        draggable: true, // Allow the node to be draggable
      },
      // Create the edge connecting the hero to the film node
      edge: {
        id: `${heroId}-film-${filmId}`, // Unique ID for the edge
        source: heroId, // The source is the hero's ID
        target: `film-${filmId}`, // The target is the film node's ID
      },
    }))
  );

  // Wait for all film promises to resolve and return the result
  return Promise.all(filmPromises);
};

// Function to create nodes and edges for the starships associated with the hero
export const createStarshipNodesAndEdges = async (hero: Character) => {
  // Define the fixed Y position for starship nodes
  const starshipPositionY = 800;
  // Define the starting X position for the first starship node
  const starshipPositionXStart = 150;
  // Define the offset for the X position for each subsequent starship node
  const offsetX = 200;

  // Map over the hero's starships to create an array of promises for fetching starship details
  const starshipPromises = hero.starships.map((starshipId, index) =>
    // Fetch starship details and create a node and edge object
    fetchStarshipDetails(starshipId).then((starship) => ({
      // Create the starship node with its position and draggable property
      node: {
        id: `starship-${starshipId}`, // Unique ID for the starship node
        data: { label: <GraphNode label={starship.name} /> }, // Label for the node using the GraphNode component
        position: {
          x: starshipPositionXStart + index * offsetX, // Calculate the position based on the index
          y: starshipPositionY, // Fixed Y position for starship nodes
        },
        draggable: true, // Allow the node to be draggable
      },
      // Create the edge connecting the film node to the starship node
      edge: {
        id: `film-${hero.films[index]}-starship-${starshipId}`, // Unique ID for the edge
        source: `film-${hero.films[index]}`, // The source is the film node's ID
        target: `starship-${starshipId}`, // The target is the starship node's ID
      },
    }))
  );

  // Wait for all starship promises to resolve and return the result
  return Promise.all(starshipPromises);
};
