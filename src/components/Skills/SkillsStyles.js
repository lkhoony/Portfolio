import styled from 'styled-components';

export const SkillsWrap = styled.div`
    // width : 100%;
    // max-width : 100%;
    // background-color: #00d2d3;
    // padding: 10px;
    // display: grid;
    // grid-template-columns: repeat(2, 1fr);

    width : 90%;
    // column-count : 3;
    // column-gap: 15px;
    margin : 0 auto;


    display: grid;                                                /* 1 */
    grid-template-columns: repeat(3, 1fr);
    grid-gap : 2%;
    // grid-auto-rows : 450px;

    @media ${(props)=>props.theme.breakpoints.sm} {
        // grid-template-columns: repeat(1, 1fr);
        // grid-gap : 1%;
        display : block;
        width : 100%;
    }
`

export const Skill = styled.div`
    // display: inline-block;
    border:1px solid rgba(0,0,0,0.2);
    // // margin:0;
    // margin-bottom: 15px;
    padding:0 15px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
    width : 100%;
    text-align : center;


    // display : block;
    display : flex;
    flex-direction : column;
    grid-row : ${({ span }) => (`span ${span}`)};

    position : relative;

    @media ${(props)=>props.theme.breakpoints.sm} {
        // grid-template-columns: repeat(1, 1fr);
        // grid-gap : 1%;
        display : block;
        margin-bottom : 30px;
    }
`

export const SkillName = styled.div`
    font-size : 1.5vw;
    padding : 1.5vw 0;
    font-weight : bold;

    color : ${({ color }) => (color ? color : 'inherit')};

    @media ${props => props.theme.breakpoints.sm}{
        font-size: 18px;
        line-height: 32px;
      }
`

export const SkillImage = styled.img`
    width : 50%;
    height : 100%;
    margin : 0 auto;
`

export const Proficiencies = styled.div`
    position : absolute;
    top : 0;
    left : 0;
    z-index : 3;
    width : 100%;
    height : 100%;
    opacity : 0;
    background : ${props => props.theme.colors.background1};
    padding : 0 15px;
    transition: opacity 0.5s;
    
    &:hover{
        opacity : 0.9;
    }
` 