import { useLayoutEffect, useState } from "react";
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
& {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 2.5rem;
    border-radius: 0.375rem;
    border-width: 2px;
    background: #ffffffcc;
    box-shadow: 0 4px 6px 0px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.4);
    box-sizing: border-box;
}

td, th {
    font-size: 18px;
    border: 1px solid #777;
    padding: 3px;
    padding-left: 8px;
    padding-right: 8px;
    text-align: center;
}
    
table {
    border-collapse: collapse;
}
    
tbody tr:nth-child(odd) {
    background: #eee;
}
caption {
    font-size: 0.8rem;
}
`;

const CloseButton = styled.button`
& {
    position: absolute;
    transform: translate(-52px, -18px);
    width: 38px; 
    height: 38px;

    user-select: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 900;
    text-align: center;
    
    border-radius: 8px; 
    border-width: 2px;
    background: #ffffff;
    box-shadow: 0 4px 6px 0px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.4);
    border: none;
    
    transition: 0.1s ease;
}

&:hover {
    color: #ee0000;
    transform: translate(-52px, -18px) scale(1.1);
}

&:active {
    transform: translate(-52px, -18px) scale(0.8);
    color: #ee5555;
}
`;

function useMobile() {
    const [mobile, setMobile] = useState(window.innerWidth <= 800);
    useLayoutEffect(() => {
      const updateSize = () => {
        setMobile(window.innerWidth <= 800)
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return mobile;
  }

function NodeModal({modalData, close}: Props) {
    if (!modalData.shown)
        return;
    const mobile = useMobile();


    const data = modalData.data;
    const content = data.description != null ?
        data.description : "Ei lisättyä tietoa . . . . ";
    const titleSize = mobile && (data.name.length > 16 || (data.group != null && data.group.length > 16)) ? 22
        : mobile && (data.name.length > 14 || (data.group != null && data.group.length > 14)) ? 26 : mobile ? 28 : 32;
    const adjustForTable = !mobile && data.table != undefined;
    return <>
        <BackgroundBlur onMouseDown={close}/>
        <Container style={{
            position:"absolute", display:"flex", flexDirection:"column", gap:24, width:"100%", boxSizing: "border-box",
            top:0, paddingTop:mobile ? "48px" : "4%", paddingLeft:mobile ? "5vw" : "10vw", paddingRight:mobile ? "5vw" : "10vw", paddingBottom:mobile ? "24px" : undefined
        }} onMouseDown={e => {
            if (e.currentTarget == e.target) close();
        }} >
            <div style={{width:"inherit", display:mobile ? undefined : "flex", gap:32}} onMouseDown={e => {
                if (e.currentTarget == e.target) close();
            }}>
                <Box style={{
                    width: mobile ? "inherit" : "max-content",
                    maxWidth:mobile ? undefined : "70%",
                    paddingRight:mobile ? 0 : undefined
                }}>
                    <div style={{display:"flex"}}>
                        {data.icon == null ||
                            <div style={{
                                userSelect:"none", width:mobile ? titleSize * 3 : "90px", height:mobile ? titleSize * 3 : "90px", fontSize:titleSize * 1.3,
                                display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"100%", backgroundColor:"#F3F4F6"
                            }}> {data.icon} </div>
                        }
                        { data.group != null ?
                            <div style={{display:"flex", flexDirection:"column", marginLeft: "22px", marginTop:"auto", marginBottom:"auto"}}>
                                <span style={{fontSize:titleSize, letterSpacing:1, fontWeight:700, color:data.color}}>{data.name}</span>
                                <span style={{fontSize:titleSize - 2, color:"#6B7280"}}>{data.group}</span>
                            </div>
                        : <h1 style={{fontSize:titleSize, letterSpacing:1, color:data.color, marginLeft:mobile ? "16px" : "22px", marginTop: "auto", marginBottom:"auto"}}>{data.name}</h1>}
                    </div>
                </Box>
                { mobile || <div style={{position:"relative"}}>
                    <CloseButton onClick={close}>X</CloseButton>
                </div> }
                {(data.formula == null || mobile) ||
                    <Box><h1 style={{color:data.color, marginLeft:"16px"}}>{data.formula}</h1></Box>
                }
            </div>
            <Box style={{
                width: "inherit",
                padding: mobile ? "8px" : "24px",
                fontSize: "20px"
            }}>
                <div style={{display:"flex", flexDirection:adjustForTable ? "row" : "column", gap: 32}}>
                    <div style={{padding:16, width:adjustForTable ? "70%" : undefined}}>
                        <span style={{lineHeight: "28px"}}>
                            {content}
                        </span>
                    </div>
                    {data.table}
                </div>
            </Box>
            {data.sources == null || <div style={{  display: "flex", justifyContent: "center"}}><div style={{
                width: mobile ? "100%" : "max-content", boxSizing: "border-box", padding: mobile ? 8 : 16, paddingTop: 16, paddingBottom: 16,
                display: "flex", flexWrap: "wrap", gap: mobile ? 8 : 12, justifyContent: "center",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", borderRadius: 16, background: "rgba(0, 0, 0, 0.1)"
            }}>
                {data.sources.map((source: string) => (
                    <div key={source} style={{background:"#fff", boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px", borderRadius:10, padding:8}}>
                        <span style={{letterSpacing:mobile ? 0 : 1}}>{source}</span>
                    </div>
                ))}
            </div> </div>}
        </Container>
    </>
}

export default NodeModal;