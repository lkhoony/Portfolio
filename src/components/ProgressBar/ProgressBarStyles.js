import styled from 'styled-components'

export const Wrap = styled.div`
    width : 100%;
    padding : 10px 0;
`

export const Container = styled.div`
    width : 100%;
    position : relative;
    background : black;
`;

export const Bar = styled.div`
    width : ${({value})=> value ? `${value}%` : '1%'};
    top : 0;
    left : 0;
    height : 10px;
    background : white;
`;

export const Labels = styled.div`
    display : grid;
    grid-template-columns: repeat(3, 1fr);
    padding-bottom : 5px;
    font-size : 1.5vw;
`

export const Name = styled.div`
    grid-area: 1 / 1 / 2 / 3;
    color : white;
    text-align : left;
`

export const Value = styled.div`
    grid-area: 1 / 3 / 2 / 4;
    text-align : right;
    color : white;
`