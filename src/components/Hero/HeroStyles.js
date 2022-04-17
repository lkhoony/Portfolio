import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 50%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;

    //margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 50%;
    display: flex;
    flex-direction: column;

    //margin: 0 auto;
  }
`;

export const RightSection = styled.div`
  width: 50%;
  text-align : center;
  position : relative;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 50%;
    //display: flex;
    //flex-direction: row;

    //margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 50%;
    //display: flex;
    //flex-direction: column;

    //margin: 0 auto;
  }
`;

export const Image = styled.img`
  width : 320px;
  height : 320px;
  background : yellow;
  margin-top : 58px; 
  border-radius : 50%;
  z-index : 9;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 250px;
    height : 250px;
    margin-top : 40px; 
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 50%;
    //display: flex;
    //flex-direction: row;

    //margin: 0 auto;
  }
`

export const Tooltip = styled.div`
  width : 150px;
  margin : 0 auto;
  background : #ededed;
  z-index : 10;
  position : relative;
  margin-top : -40px;
  border-radius : 20px;
`

export const TooltipName = styled.div`
  font-size : 14px;
  font-weight : bold;
  padding : 10px;
`

export const TooltipPosition = styled.div`
  font-size : 10px;
  color : #a3a3a3;
  padding-bottom : 10px;
`
