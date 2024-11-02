import React from "react";

interface GraphNodeProps {
  label: string | undefined;
}

const GraphNode: React.FC<GraphNodeProps> = ({ label }) => {
  return <div className="graph-node">{label}</div>;
};

export default GraphNode;
