import React, { useEffect, useState, useCallback } from "react";
import GraphNode from "./GraphNode";
import {
  Controls,
  Edge,
  Node,
  NodeChange,
  ReactFlow,
  applyNodeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Loader } from "./Loader/Loader";
import { fetchHeroDetails } from "../api/axios";
import { Character } from "../types/character";
import {
  createFilmNodesAndEdges,
  createStarshipNodesAndEdges,
} from "../helpers/createNodes";

// CharacterGraph component to visualize the character graph
export const CharacterGraph: React.FC<{ heroId: string }> = ({ heroId }) => {
  // State to manage nodes, edges, and loading status
  const [nodes, setNodes] = useState<Node[]>([]); // State for nodes
  const [edges, setEdges] = useState<Edge[]>([]); // State for edges
  const [loading, setLoading] = useState(true); // State for loading status

  // Function to create a node for the hero
  const createHeroNode = (hero: Character) => ({
    id: heroId, // Set the hero's ID
    data: { label: <GraphNode label={hero.name} /> }, // Create a label using GraphNode component
    position: { x: 250, y: 0 }, // Set the initial position of the hero node
    draggable: true, // Allow the node to be draggable
  });

  // Function to load hero data asynchronously
  const loadHeroData = useCallback(async () => {
    setLoading(true); // Set loading state to true
    try {
      const hero = await fetchHeroDetails(heroId); // Fetch hero details from API
      const heroNode = createHeroNode(hero); // Create the hero node
      const filmData = await createFilmNodesAndEdges(hero, heroId); // Create film nodes and edges
      const starshipData = await createStarshipNodesAndEdges(hero); // Create starship nodes and edges

      // Update nodes and edges state with the new data
      setNodes([
        heroNode,
        ...filmData.map((data) => data.node),
        ...starshipData.map((data) => data.node),
      ]);
      setEdges([
        ...filmData.map((data) => data.edge),
        ...starshipData.map((data) => data.edge),
      ]);
    } catch (error) {
      console.error("Error loading hero data:", error); // Log any errors during data fetching
    } finally {
      setLoading(false); // Set loading state to false once the data is fetched
    }
  }, [heroId]); // Dependency array includes heroId to refetch data when it changes

  // useEffect to call loadHeroData on component mount or when heroId changes
  useEffect(() => {
    loadHeroData();
  }, [loadHeroData]);

  // Function to handle changes to nodes (dragging, etc.)
  const onNodesChange = (changes: NodeChange[]) => {
    setNodes((nds) => applyNodeChanges(changes, nds)); // Apply changes to the current nodes state
  };


  return (
    <section className="h-[100vh] w-full flex items-center justify-center">
      {loading ? (
        <Loader />
      ) : (
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodesConnectable={false}
          nodesDraggable={true} 
          onNodesChange={onNodesChange} 
        >
          <Controls /> 
        </ReactFlow>
      )}
    </section>
  );
};
