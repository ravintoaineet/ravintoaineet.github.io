import { Handle, Position } from "reactflow";
import styled from "styled-components";

const Container = styled.div`
& {
  background: #000;
  color: white;
  font-size: 26px;
  padding: 12px;
  border: solid 1px #000;
  border-radius: 24px;
  transition: 0.1s ease;
}

&:hover {
  transform: scale(1.1);
}
`;

function RootNode({data}: any) {
    return <Container>
      <span style={{fontWeight:700}}>{data.name}</span>
      <Handle type="source" position={Position.Bottom} style={{width:"1px"}} />
      
    </Container>
}

export default RootNode;