import styled from "styled-components";
import {motion} from "framer-motion";

export const AboutContainer = styled(motion.div)`
    width : 100%;
    display : flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding : 85px 30px;

    @media ${(props)=>props.theme.breakpoints.md} {
        padding : 30px;
    }
`

export const Column = styled.div`
    width : ${({ half }) => (half ? '50%' : '100%')};

    @media ${(props)=>props.theme.breakpoints.sm} {
        width : 100%;
    }
`

export const AboutList = styled.li`
    width : 100%;
    display : flex;
    padding-bottom : 0.5vw;

    @media ${(props)=>props.theme.breakpoints.sm}{
        padding-bottom : 1vh;
    }
`

export const Icon = styled.div`
    color : #686868;
    line-height : 1.5vw;
`

export const AboutText = styled.div`
    font-size : 1.2vw;
    line-height : 2.5vw;
    font-weight : ${({ bold }) => (bold ? 'bold' : 'inherit')};
    padding-right : 1vw;

    @media ${(props)=>props.theme.breakpoints.sm}{
        line-height : ;
    }

    
`