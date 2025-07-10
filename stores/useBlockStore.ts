// stores/useBlockStore.ts
import { create } from "zustand";
import { Node, Edge } from "reactflow";

interface BlockStore {
  nodes: Node[];
  edges: Edge[];
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
}

const useBlockStore = create<BlockStore>((set) => ({
  nodes: [],
  edges: [],
  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),
}));

export default useBlockStore;
