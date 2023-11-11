import './App.css'
import ReactFlow, { Background, ConnectionLineType, ConnectionMode, Controls } from 'reactflow'

import 'reactflow/dist/style.css';
import GroupNode from './nodes/GroupNode';
import NodeModal from './NodeModal';
import { useEffect, useState } from 'react';
import { connections, nodes } from './nodes';
import RootNode from './nodes/RootNode';

const nodeTypes = {root:RootNode, subgroup:GroupNode};

function App() {
  const [modal, setModal] = useState({shown:false, data:null as any});
  const closeModal = () => setModal({shown:false, data:null});

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key == "Escape") closeModal();
    };
    document.addEventListener('keydown', listener);
    return () => document.removeEventListener("keydown", listener);
  });

  
  return (<>
    <div style={{width:"100vw", height:"100svh"}}>
      <ReactFlow fitView proOptions={{hideAttribution: true}}
          nodesConnectable={false}
          nodesFocusable={false}
          edgesFocusable={false}
          elementsSelectable={false}
          nodesDraggable={false}
          translateExtent={[[-2000, -1000], [2000, 1000]]}
          onNodeClick={(_, node) => setModal({shown:true, data:node.data})}
          onNodeContextMenu={(e, node) => {
            e.preventDefault();
            setModal({shown:true, data:node.data});
          }}
          onPaneContextMenu={(e) => e.preventDefault()}
          zoomOnPinch={true}
          zoomOnDoubleClick={false}

          nodeTypes={nodeTypes}
          defaultEdgeOptions={{animated:true, style:{stroke:"black"}}}
          connectionLineType={ConnectionLineType.Straight}
          connectionMode={ConnectionMode.Loose}
          nodeOrigin={[0.5,0.5]}
          nodes={nodes} edges={connections}>
        <Background color="#aaa" gap={16} />
        <Controls showInteractive={false}/>
      </ReactFlow>
      <NodeModal modalData={modal} close={closeModal}/>
    </div>
  </>)
}

export default App
