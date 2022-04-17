import { IoIosArrowDropdown } from 'react-icons/io';
import styled, { withTheme } from 'styled-components';

// export const Container = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   grid-template-rows: 1fr;
//   grid-column-gap: 2rem;
//   padding: 1rem;
//   padding-top: 2rem;
//
//   @media ${(props) => props.theme.breakpoints.sm} {
//     display: grid;
//     grid-template-columns: repeat(5, 1fr);
//     grid-template-rows: repeat(2, 60px);
//     grid-column-gap: 0.5rem;
//     grid-row-gap: 0.5rem;
//   }
// `;
//
// export const Span = styled.span`
//   font-size : 2rem;
//   padding-left : 1rem;
// `;
// export const Div1 = styled.div`
//   // row start / col start / row end / col end
//   // [ row start, row end ] , [col start, col end] 까지의 영역을 차지
//   grid-area: 1 / 1 / 2 / 2;
//   display: flex;
//   flex-direction: row;
//   align-content: center;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     grid-area: 1 / 1 / 2 / 3;
//   }
// `;
// export const Div2 = styled.div`
//   grid-area: 1 / 2 / 2 / 5;
//   display: flex;
//   justify-content: space-around;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     grid-area: 2 / 1 / 3 / 6;
//   }
// `;
// export const Div3 = styled.div`
//   grid-area: 1 / 5 / 2 / 6;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     align-items: center;
//     grid-area: 1 / 4 / 2 / 6;
//   }
// `;
//
// // Navigation Links
// export const NavLink = styled.a`
//   font-size: 1.6rem;
//   line-height: 32px;
//   color: #24282C;
//   transition: 0.4s ease;
//   &:hover {
//     color: #9f9f9f;
//     opacity: 1;
//     cursor: pointer;
//   }
//   @media ${(props) => props.theme.breakpoints.sm} {
//     padding: 0.5rem;
//   }
// `;
//
// /// DropDown Contact
// export const ContactDropDown = styled.button`
//   border: none;
//   display: flex;
//   position: relative;
//   background: none;
//   font-size: 1.7rem;
//
//   line-height: 32px;
//   color: rgba(255, 255, 255, 0.75);
//   cursor: pointer;
//   transition: 0.3s ease;
//
//   &:focus {
//     outline: none;
//   }
//   &:hover {
//     color: #fff;
//   }
//
//   @media ${(props) => props.theme.breakpoints.sm} {
//     padding: 0.4rem 0;
//   }
//   @media ${(props) => props.theme.breakpoints.md} {
//     padding: 0;
//   }
// `;
//
// export const NavProductsIcon = styled(IoIosArrowDropdown)`
//   margin-left: 8px;
//   display: flex;
//   align-self: center;
//   transition: 0.3s ease;
//   opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
//   transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};
//
//   &:hover {
//     opacity: 1;
//   }
//
//   @media ${(props) => props.theme.breakpoints.sm} {
//     margin: 2px 0 0 2px;
//     width: 15px;
//   }
// `;
//
//
// // Social Icons
//

export const Container = styled.div`

    width: ${({ isShown }) => (isShown ? '90%' : '120px')};
    background: ${props => props.theme.colors.background1};
    height : 100%;
    display : grid;
    grid-template-columns : 120px 1fr 1fr 1fr 1fr;
    grid-template-rows: 120px 1fr;
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    transition: 1s;
    overflow-x: hidden;
    white-space: nowrap;
    
    // 768px에서 상단 바로 이동
    @media ${(props)=>props.theme.breakpoints.md} {
        width : 100%;
        position : relative;
        height : fit-content;
        grid-template-columns : repeat(5, 1fr);
        grid-template-rows: 60px;
    }

    // 640px에서 상단바, hover시 dropdown (height 100%)
    @media ${(props)=> props.theme.breakpoints.sm}{
        display : block;
        width : 100%;
        height : ${({ isShown }) => (isShown ? '100%' : '60px')};
        overflow : ${({ isShown }) => (isShown ? 'auto' : 'hidden')};
    }


`
//
// export const Navigation = styled.div`
//     grid-area : 1 / 1 / 2 / 6;
//     // width : 100%;
//     // height : 100%;
//     background : yellow;
//     grid-template-columns : 120px 1fr 1fr 1fr 1fr;
//     grid-template-rows: 120px 1fr;
// //   grid-column-gap: 2rem;
// `

export const Hamburger = styled.div`
    width : 120px;
    height : 120px;
    grid-area : 1 / 1 / 2 / 2;
    box-sizing : border-box;
    padding : 50px 42px;
    transition: 0.4s ease;
    &:hover {
        background: rgba(255,255,255,0.05);
        cursor: pointer;
    }

    @media ${(props)=>props.theme.breakpoints.md}{
        display : none;
    }

    @media ${(props)=>props.theme.breakpoints.sm}{
        width : 100%;
        height : 60px;
        display : block;
        padding : 15px;
        text-align : center;
        box-sizing : border-box;
        
    }
`

export const HamburgerLine = styled.div`
    width : 100%;
    height : 20%;
    background: ${({ odd }) => (odd ? '#ffffff' : 'transparent')};
    @media ${(props)=>props.theme.breakpoints.sm}{
        width : 40px;
        margin : 0 auto;
    }
`

export const LinkMenu = styled.div`
    grid-area: 1 / 2 / 2 / 5;
    display: flex;
    justify-content: space-around;
    overflow : hidden;

    @media ${(props)=> props.theme.breakpoints.md}{
        grid-area: 1 / 1 / 2 / 5
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        display : block;
        text-align : center;
    }
`

export const NavLink = styled.a`
    width : 10%;
    font-size: 1.6rem;
    line-height: 120px;
    color: #ffffff;
    transition: 0.4s ease;
    &:hover {
        color: #9f9f9f;
        opacity: 1;
        cursor: pointer;
    }

    @media ${(props)=>props.theme.breakpoints.md}{
        line-height : 60px;
    }

    @media ${(props)=>props.theme.breakpoints.sm}{
        font-size: 3rem;
        line-height : 10rem;
    }

`;

export const SocialIcons = styled.div`
    grid-area: 1 / 5 / 2 / 6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow : hidden;

    @media ${(props)=>props.theme.breakpoints.sm}{
        display : block;
        padding : 20px;
        text-align : center;
    }
`;

export const SocialIcon = styled.div`
    grid-area : 1/4/2/5
  transition: 0.3s ease;
  color: #ffffff;
  // padding: 8px;
  &:hover {
    // background-color: #212d45;
    color : #9f9f9f;
    // transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props)=>props.theme.breakpoints.sm}{
    display : inline-block;
    padding : 30px;
}
`;

export const Hero = styled.div`
    grid-area : 2/2/3/6;
    display : flex;

    @media ${(props)=>props.theme.breakpoints.md} {
        display : none;
    }
`

export const LeftSection = styled.div`
    width : 40%;
    height : 100%;
    display: flex;
  /*위에서 아래로 수직 배치*/
  flex-direction: column;
  /*중앙정렬*/
  justify-content: center;
}
`

export const TitleWrap = styled.div`
    color : #ffffff;
`

export const Title = styled.div`
    font-weight : bold;
    font-size : 6vw;
    color : ${({color}) => (color ? color : "#24282C")};
`

export const SubTitle = styled.div`
    padding : 30px 0;
    color : #686868;
    font-size : 1vw;
`

export const Button = styled.div`

    position : relative;
    display : inline-block;
    font-weight : bold;
    font-size : 1.5vw;
    transition: 0.5s;
    &:after {
        content: ' ';
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 0;
        height: 3px;
        background: #fff;
        transition: width 0.3s;   
    }
    
    &:hover {
        cursor : pointer;
    }
    
    &:hover:after {
        width: 100%;
        transition: width 0.3s;
    }
`

export const RightSection = styled.div`
    width : 60%;
    height : 100%;
    display: flex;
  /*위에서 아래로 수직 배치*/
  flex-direction: column;
  /*중앙정렬*/
  justify-content: center;
`

export const Profile = styled.div`
    width : 100%;
    height : 100%;
    position : relative;
    text-align : center;
    display: flex;
  /*위에서 아래로 수직 배치*/
  flex-direction: column;
  /*중앙정렬*/
  justify-content: center;
    // background-image: url("/images/profile2.jpg");
    // background-size: cover;
}
`

export const Blur = styled.div`
    position : absolute;
    width : 100%;
    height : 100%;
    background : rgba(0,0,0,0.4);
    z-index : 2;
`

export const Image = styled.img`
    width : 100%;
    height : 100%;
    // filter: brightness(70%);
  // @media ${(props) => props.theme.breakpoints.md} {
  //   width: 250px;
  //   height : 250px;
  //   margin-top : 40px; 
  // }
  //
  // @media ${(props) => props.theme.breakpoints.sm} {
  //   width: 50%;
  //   //display: flex;
  //   //flex-direction: row;
  //
  //   //margin: 0 auto;
  // }
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