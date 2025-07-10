// components/CanvasBuilder.tsx
"use client";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Connection,
  Edge,
} from "reactflow";
import "reactflow/dist/style.css";
import Sidebar from "./Sidebar";
import { useCallback } from "react";
import useBlockStore from "@/stores/useBlockStore";

const CanvasBuilder = () => {
  const { nodes, setNodes, edges, setEdges } = useBlockStore();

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="flex h-screen">
      <Sidebar />
      <ReactFlowProvider>
        <div className="w-full h-full">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={setNodes}
            onEdgesChange={setEdges}
            onConnect={onConnect}
            fitView
          >
            <Background gap={16} size={1} />
            <Controls />
            <MiniMap />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default CanvasBuilder;
