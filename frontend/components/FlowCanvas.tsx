import { useState, useCallback, useRef } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, NodeChange, EdgeChange, Connection, Node, Edge, reconnectEdge,Background,useNodesState,useEdgesState,Controls,} from '@xyflow/react';
import '@xyflow/react/dist/style.css';


const initialNodes: Node<{ label: string }>[] = [
   { id: '1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
   { id: '2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
];
const initialEdges: Edge[] = [{ id: '1-2', source: '1', target: '2' }];

export default function FlowCanvas() {
   const [nodes, setNodes] = useState<Node<{ label: string }>[]>(initialNodes);
   const [edges, setEdges] = useState<Edge[]>(initialEdges);

   const onNodesChange = useCallback(
      (changes: NodeChange[]) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)as Node<{ label: string }>[]),[])

   const onEdgesChange = useCallback(
      (changes: EdgeChange[]) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
      [],
   );
   // const onConnect = useCallback(
   //    (params: Connection) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
   //    [],
   // );

   // Add remove edge feature:
   const edgeReconnectSuccessful = useRef(true);
  const onConnect = useCallback(
    (params:Connection) => setEdges((els) => addEdge(params, els)),
    [],
  );
 
  const onReconnectStart = useCallback(() => {
    edgeReconnectSuccessful.current = false;
  }, []);
 
  const onReconnect = useCallback((oldEdge:Edge, newConnection:Connection) => {
    edgeReconnectSuccessful.current = true;
    setEdges((els) => reconnectEdge(oldEdge, newConnection, els));
  }, []);
 
  const onReconnectEnd = useCallback((_:React.PointerEvent, edge:Edge) => {
    if (!edgeReconnectSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }
 
    edgeReconnectSuccessful.current = true;
   },[])

   return (
      <div style={{ width: '70vw', height: '70vh' }} className='border-2 border-amber-600'>
         <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
         />
      </div>
   );
}