import { Handle, Position } from "reactflow";
import styled from "styled-components";

const Container = styled.div`
& {
  cursor: pointer;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.375rem; 
  border-width: 2px;
  background-color: #ffffff; 
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: 0.1s ease;
}

&:hover {
  transform: scale(1.1);
}
`;

function GroupNode({data}: any) {
    return <Container>
      <div style={{display:"flex"}}>
        {data.icon == null ||
          <div style={{fontSize:18, display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"100%",width:"48px",height:"48px",backgroundColor:"#F3F4F6"}}>
            {data.icon}
          </div>
        }
        <div style={{display:"flex", flexDirection:"column", marginLeft:data.icon == undefined ? "0" : "0.5rem"}}>
          {data.group != null ? <>
              <span style={{color:data.color, fontSize:"18px",lineHeight:"28px",fontWeight:700}}>{data.name}</span>
              <span style={{color:"#6B7280"}}>{data.group}</span>
            </> : <span style={{color:data.color, fontSize:"18px",lineHeight:"48px",fontWeight:700}}>{data.name}</span>
          }
        </div>
      </div>

      <Handle type="source" position={Position.Bottom} style={{cursor:"pointer", width:"1px"}} />
      
    </Container>
}

export default GroupNode;