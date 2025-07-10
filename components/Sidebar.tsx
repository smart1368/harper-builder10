// components/Sidebar.tsx
import { Button } from "@/components/ui/button";

const blockTypes = [
  { type: "Condition", options: ["If", "While", "For"] },
  { type: "Indicator", options: ["EMA", "SMA", "MACD"] },
  { type: "Operator", options: ["<", ">", "+", "-"] },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4 space-y-4">
      {blockTypes.map((block) => (
        <div key={block.type}>
          <h2 className="font-bold mb-2">{block.type}</h2>
          {block.options.map((opt) => (
            <Button
              key={opt}
              variant="secondary"
              className="w-full mb-1"
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData("application/reactflow", opt)
              }
            >
              {opt}
            </Button>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
