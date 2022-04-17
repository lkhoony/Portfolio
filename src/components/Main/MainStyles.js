import styled from "styled-components";
import {motion} from "framer-motion";

export const MainContainer = styled(motion.div)`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const Menu = styled.a`
    position : relative;
    width : 50%;
    height : 80%;
    &:hover{
        cursor : pointer
    }

    @media ${(props)=>props.theme.breakpoints.md}{
        width : 100%;
        // height : inherit;
    }
`

export const MenuImage = styled.img`
    width : 100%;
    height : 100%;
    position : absolute;
`

export const MenuDesc = styled.div`
    position : absolute;
    z-index : 2;
    width : 100%;
    height : 100%;
    background : transparent;
    display: flex;
    // display : none;
    /*위에서 아래로 수직 배치*/
    flex-direction: column;
    /*중앙정렬*/
    justify-content: center;
    text-align : center;
    opacity : 0;
    background : black;
    transition: opacity 0.5s;
    
    &:hover{
        opacity : 1;
    }
`

export const MenuName = styled.div`
    color : white;
    padding : 10px;
`

export const ViewProject = styled.div`
    color : #686868;
`