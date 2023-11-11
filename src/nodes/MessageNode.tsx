import { Handle, Position } from "reactflow";
import styled from "styled-components";

const Container = styled.div`
& {
  cursor: pointer;
  padding: 24px;
  border-radius: 0.375rem; 
  border-width: 2px;
  background-color: #ffffff; 
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-family: "Source Sans Pro", "Arial", sans-serif;
  font-size: 18px;
  transition: 0.1s ease;
}

&:hover {
  transform: scale(0.975);
  opacity: 60%;
}
&:active {
  transform: scale(0.75);
  opacity: 15%;
}
`;

function MessageNode({data}: any) {
    return <Container>
      <div style={{display:"flex", flexDirection:"column", width:data.width, gap:16}}>
        <strong>{data.header}</strong>
        <span>{data.text}</span>
      </div>

      <Handle type="source" position={Position.Bottom} style={{width:"1px"}} />
      
    </Container>
}

export default MessageNode;