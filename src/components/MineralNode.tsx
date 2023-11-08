import { Handle, Position } from "reactflow";

function MineralNode({data}: any) {
    return <div style={{
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      borderRadius: "0.375rem", 
      borderWidth: "2px",
      backgroundColor: "#ffffff", 
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    }}>
      <div style={{display:"flex"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"9999px",width:"3rem",height:"3rem",backgroundColor:"#F3F4F6"}}>
          {data.ab}
        </div>
        <div style={{display:"flex", flexDirection:"column", marginLeft:"0.5rem"}}>
          <span style={{color:data.color, fontSize:"1.125rem",lineHeight:"1.75rem",fontWeight:700}}>{data.name}</span>
          <span style={{color:"#6B7280"}}>{data.group}</span>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} style={{width:"4rem"}} />
    </div>
}

export default MineralNode;