import './App.css'
import ReactFlow, { Background, ConnectionLineType, ConnectionMode, Controls, Node, ReactFlowInstance } from 'reactflow'

import 'reactflow/dist/style.css';
import NodeModal from './NodeModal';
import { useEffect, useState } from 'react';
import { connections, nodeTypes, nodes } from './nodes';

function App() {
  const [instance, setInstance] = useState<ReactFlowInstance | undefined>(undefined);
  const [modal, setModal] = useState({shown:false, data:null as any});
  const closeModal = () => {
    setModal({shown:false, data:null});
    window.history.back();
  }
  const openModal = (node: Node<any, string | undefined>) => {
    if (node.id == "message") {
      instance!.setNodes(nodes => nodes.filter(b => b.id !== node.id));
      localStorage.setItem("message", "false");
      return;
    }
    setModal({shown:true, data:node.data});
    window.history.pushState({id:node.id}, node.data.name, "?" + node.id);
  }

  useEffect(() => {
    const keyListener = (e: KeyboardEvent) => {
      if (e.key == "Escape") closeModal();
    };
    const popListener = (e: PopStateEvent) => {
      if (e.state != null) {
        if (instance == null)
          return;
        const node = instance.getNode(e.state.id);
        if (node != null) {
          setModal({shown:true, data:node.data})
          return;
        } else console.log("Node with id " + e.state.id + " not found");
      }
      setModal({shown:false, data:null});
    };
    document.addEventListener('keydown', keyListener);
    window.addEventListener('popstate', popListener);
    return () => {
      document.removeEventListener("keydown", keyListener);
      window.removeEventListener("popstate", popListener);
    }
  });

  return (<>
    <div style={{width:"100vw", height:"100svh"}}>
      <ReactFlow fitView fitViewOptions={{padding:0.04}} proOptions={{hideAttribution: true}}
          nodesConnectable={false}
          nodesFocusable={false}
          edgesFocusable={false}
          elementsSelectable={false}
          nodesDraggable={false}
          translateExtent={[[-2000, -1000], [2000, 1000]]}
          onNodeClick={(_, node) => openModal(node)}
          onNodeContextMenu={(e, node) => {
            e.preventDefault();
            instance?.setCenter(node.position!.x, node.position!.y , { duration: 800 });
          }}
          onPaneContextMenu={(e) => e.preventDefault()}
          onInit={flow => {
            setInstance(flow);

            if (!window.location.search)
              return;
            const node = flow.getNode(window.location.search.substring(1));
            if (node != null) setModal({shown:true, data:node.data});
            else window.location.href = window.location.origin;
          }}
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
