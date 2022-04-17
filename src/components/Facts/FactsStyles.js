import styled from "styled-components";
import {motion} from "framer-motion";

export const FactsContainer = styled(motion.div)`
    width : 100%;
    display : flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding : 85px 30px;

    @media ${(props)=>props.theme.breakpoints.md} {
        padding : 30px;
    }
`

export const Fact = styled.div`
    width : 100%;
    display : flex;
    padding : 2vw;
`

export const FactLeft = styled.div`
    width : 30%;
`

export const FactRight = styled.div`
    width : 70%;
`


export const FactIcon = styled.div`
    // padding : 3vw;
    text-align : center;
`

export const FactNumber = styled.h2`
    text-align : center;
    // padding : 3vw;
    font-size : 4vw;
`

export const FactName = styled.h2`
    text-align : center;
    // padding : 2vw;
    font-size : 1vw;
`