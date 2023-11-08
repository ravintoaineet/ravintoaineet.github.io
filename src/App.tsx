import './App.css'
import ReactFlow, { Background, ConnectionLineType, ConnectionMode, Controls } from 'reactflow'

import 'reactflow/dist/style.css';
import VitaminNode from './components/VitaminNode';
import GroupNode from './components/GroupNode';
import MineralNode from './components/MineralNode';

function App() {
  const initialNodes = [
    {id:'ravintoaineet', position:{x:-200,y:25}, data:{
      label:'Ravintoaineet'
    }, style: {
      background: '#000',
      color: 'white',
      fontSize: 20,
      border: "solid 1px #000",
      borderRadius: "20px"
    }},

    {type:"subgroup", id:'energiaravintoaineet', position:{x:-700,y:0}, data:{name:'Energiaravintoaineet', icon:'⚡'}},
    {type:"subgroup", id:'suojaravintoaineet', position:{x:300,y:0}, data:{name:'Suojaravintoaineet', icon:'⚔️'}},


    {type:"subgroup", id:'vitamiinit', position:{x:375,y:-150}, data:{name:'Vitamiinit'}},

    {type:"subgroup", id:'rasvaliukoiset', position:{x:180,y:-300}, data:{name:'Rasvaliukoiset', icon:"🍔"}},
    {type:"vitamin", id:'a', position:{x:-120,y:-420}, data:{name:'A', group:"Rasvaliukoinen", icon:"🥕", color:"#ff1111"}},
    {type:"vitamin", id:'d', position:{x:80,y:-420}, data:{name:'D', group:"Rasvaliukoinen", icon:"🐟", color:"#ff1188"}},
    {type:"vitamin", id:'e', position:{x:280,y:-420}, data:{name:'E', group:"Rasvaliukoinen", icon:"🌻", color:"#ff11ff"}},
    {type:"vitamin", id:'k', position:{x:480,y:-420}, data:{name:'K', group:"Rasvaliukoinen", icon:"🥬", color:"#1111ff"}},


    {type:"subgroup", id:'vesiliukoiset', position:{x:560,y:-300}, data:{name:'Vesiliukoiset', icon:"💧"}},
    {type:"vitamin", id:'b', position:{x:700,y:-420}, data:{name:'B', group:"Vesiliukoinen", icon:"🥚", color:"#11aa11"}},
    {type:"vitamin", id:'c', position:{x:800,y:-320}, data:{name:'C', group:"Vesiliukoinen", icon:"🍊", color:"#aa11ff"}},

    {type:"subgroup", id:'hivenaineet', position:{x:450,y:275}, data:{name:'Hiven- ja kivennäisaineet'}},

    {type:"mineral", id:'kalsium', position:{x:165,y:140}, data:{name:'Kalsium', ab:"Ca", group:"Makrokivennäisaine"}},
    {type:"mineral", id:'magnesium', position:{x:65,y:240}, data:{name:'Magnesium', ab:"Mg", group:"Makrokivennäisaine"}},
    {type:"mineral", id:'natriumkalium', position:{x:120,y:370}, data:{name:'Natrium & Kalium', ab:"NaK", group:"Makrokivennäisaine"}},
    
    {type:"mineral", id:'rauta', position:{x:420,y:460}, data:{name:'Rauta', ab:"Fe", group:"Mikrokivennäisaine"}},
    {type:"mineral", id:'sinkki', position:{x:720,y:360}, data:{name:'Sinkki', ab:"Zn", group:"Mikrokivennäisaine"}},
    {type:"mineral", id:'jodi', position:{x:740,y:240}, data:{name:'Jodi', ab:"I", group:"Mikrokivennäisaine"}},
    {type:"mineral", id:'seleeni', position:{x:640,y:120}, data:{name:'Seleeni', ab:"Se", group:"Mikrokivennäisaine"}},
  ];
  const initialEdges = [
    {id:'root-energia', type:"straight", source:'ravintoaineet', target:'energiaravintoaineet'},
    {id:'root-suoja', type:"straight", source:'ravintoaineet', target:'suojaravintoaineet'},
    {id:'suoja-hiven', type:"straight", source:'suojaravintoaineet', target:'hivenaineet'},

    
    {id:"a", source:'hivenaineet', target:'kalsium'},
    {id:"b", source:'hivenaineet', target:'magnesium'},
    {id:"c", source:'hivenaineet', target:'natriumkalium'},
    {id:"d", source:'hivenaineet', target:'rauta'},
    {id:"e", source:'hivenaineet', target:'sinkki'},
    {id:"f", source:'hivenaineet', target:'jodi'},
    {id:"g", source:'hivenaineet', target:'seleeni'},

    {id:"h", type:"straight", source:'suojaravintoaineet', target:'vitamiinit'},
    {id:"i", type:"straight", source:'vitamiinit', target:'vesiliukoiset'},
    {id:"j", type:"straight", source:'vitamiinit', target:'rasvaliukoiset'},

    {id:"k", type:"straight", source:'rasvaliukoiset', target:'a'},
    {id:"l", type:"straight", source:'rasvaliukoiset', target:'d'},
    {id:"m", type:"straight", source:'rasvaliukoiset', target:'e'},
    {id:"n", type:"straight", source:'rasvaliukoiset', target:'k'},

    {id:"o", type:"straight", source:'vesiliukoiset', target:'b'},
    {id:"p", type:"straight", source:'vesiliukoiset', target:'c'},

  ];

  return (
    <div style={{width:"100vw", height:"100vh"}}>
      <ReactFlow fitView proOptions={{hideAttribution: true}}
          nodesConnectable={false}
          nodesFocusable={false}
          edgesFocusable={false}
          elementsSelectable={false}
          translateExtent={[[-2000, -1000],[2000, 1000]]}

          nodeTypes={{vitamin:VitaminNode, subgroup:GroupNode, mineral:MineralNode}}
          defaultEdgeOptions={{animated:true, style:{stroke:"black"}}}
          connectionLineType={ConnectionLineType.Straight}
          connectionMode={ConnectionMode.Loose}
          nodeOrigin={[0.5,0.5]}
          nodes={initialNodes} edges={initialEdges as any}>
        <Background color="#aaa" gap={16} />
        <Controls showInteractive={false}/>
      </ReactFlow>
    </div>
  )
}

export default App
