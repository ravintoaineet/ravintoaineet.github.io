import styled from "styled-components";


interface Props {
    modalData: {shown: boolean, data: any};
    close: () => void;
}

const BackgroundBlur = styled.div`
& {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(4px);
    animation: appear .3s linear;
}
@keyframes appear {
    0% {
        backdrop-filter: blur(0px);
        opacity: 0;
    }
    100% {
        backdrop-filter: blur(4px);
        opacity: 100%;
    }
}
`;

const Container = styled.div`
& {
    animation: zoom .25s ease-in-out;
}

@keyframes zoom {
    0% {
        transform: scale(0.3);
        opacity: 50%;
    }
    100% {
        transform: scale(1);
        opacity: 100%;
    }
}
`;

const Box = styled.div`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 2.5rem;
    border-radius: 0.375rem;
    border-width: 2px;
    background: #ffffffcc;
    box-shadow: 0 4px 6px 0px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.4);
`;

const CloseButton = styled.button`
& {
    position: absolute;
    width: 40px; 
    height: 40px;
    right: 0;
    top: 0;

    user-select: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 900;
    text-align: center;
    
    border-radius: 0.375rem; 
    border-width: 2px;
    background: #ffffff;
    box-shadow: 0 4px 6px 0px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.4);
    border: none;
    
    transition: 0.1s ease;
}

&:hover {
    color: #ee0000;
}

&:active {
    transform: scale(0.9);
    color: #ee5555;
    font-size: 24px;
}
`;

function NodeModal({modalData, close}: Props) {
    if (!modalData.shown)
        return;
    const data = modalData.data;
    const content = data.description != null ?
        data.description : "Ei lisättyä tietoa . . . . ";
    return <>
        <BackgroundBlur onMouseDown={close}/>
        <Container style={{position:"absolute", display:"flex", flexDirection:"column", top:"20vh", left:"10vw", width:"80vw", gap:24 }}>
            <div onMouseDown={e => {
                    if (e.currentTarget == e.target) close();
                }} style={{display:"flex", gap:32}}>
                <Box style={{
                    minWidth:"5%",
                    width: "max-content",
                    maxWidth:"70%",
                }}>
                    <div style={{display:"flex"}}>
                        {data.icon == null ||
                            <div style={{userSelect:"none", display:"flex",fontSize:"2.5rem", justifyContent:"center",alignItems:"center",borderRadius:"9999px",width:"6rem",height:"6rem",backgroundColor:"#F3F4F6"}}>
                                {data.icon}
                            </div>
                        }
                        { data.group != null ?
                            <div style={{display:"flex", flexDirection:"column", marginLeft:"1.5rem"}}>
                                <span style={{fontSize:32, marginTop:15, fontWeight:700, color:data.color}}>{data.name}</span>
                                <span style={{fontSize:30, color:"#6B7280"}}>{data.group}</span>
                            </div>
                        : <h1 style={{color:data.color, marginLeft:"1.5rem", lineHeight:"3.5rem"}}>{data.name}</h1>}
                    </div>
                    <CloseButton onClick={close}>X</CloseButton>
                </Box>
                {data.formula == null ||
                    <Box><h1 style={{color:data.color, marginLeft:"1.5rem", lineHeight:"3.5rem"}}>{data.formula}</h1></Box>
                }
            </div>
            <Box style={{
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
                paddingLeft: "3rem",
                paddingRight: "3rem",
                fontSize: "20px"
            }}>
                <div style={{display:"flex"}}>
                    <span style={{lineHeight:"1.75rem"}}>
                        {content}
                    </span>
                </div>
            </Box>
        </Container>
    </>
}

export default NodeModal;