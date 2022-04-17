import Link from 'next/link';
import React, {useState} from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { Container, Navigation, Hamburger, HamburgerLine, LinkMenu, NavLink, SocialIcons, SocialIcon, Hero, LeftSection, RightSection, TitleWrap, Title, SubTitle, Button, Profile, Image, Blur} from './HeaderStyles';

const Header = (props) => {

    const {isShown, toggleHeader} = props;

    return(
        <Container isShown={isShown}>
            <Hamburger onClick={toggleHeader}>
                <HamburgerLine odd></HamburgerLine>
                <HamburgerLine></HamburgerLine>
                <HamburgerLine odd></HamburgerLine>
                <HamburgerLine></HamburgerLine>
                <HamburgerLine odd></HamburgerLine>
            </Hamburger>
            <LinkMenu>
                <li>
                    <Link href={"/about"}>
                        <NavLink>About</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href={"/facts"}>
                        <NavLink>Facts</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href={"/skills"}>
                        <NavLink>Skills</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href={"/resume"}>
                        <NavLink>Resume</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href={"/portfolio"}>
                        <NavLink>Portfolio</NavLink>
                    </Link>
                </li>
            </LinkMenu>
            <SocialIcons>
                <SocialIcon href={"https://github.com"}>
                    <AiFillGithub size={"2rem"}></AiFillGithub>
                </SocialIcon>
                <SocialIcon href={"https://linkedin.com"}>
                    <AiFillLinkedin size={"2rem"}></AiFillLinkedin>
                </SocialIcon>
                <SocialIcon href={"https://instagram.com"}>
                    <AiFillInstagram size={"2rem"}></AiFillInstagram>
                </SocialIcon>
            </SocialIcons>

            <Hero>
                <LeftSection>
                    <TitleWrap>
                        <Title color={"#686868"}>
                            Positive.<br/>
                            Learn.<br/>
                            Grow.<br/>
                        </Title>
                        <SubTitle>
                            긍정적인 태도로 끊임없이 배우는 웹 개발자 이광훈입니다.
                        </SubTitle>
                        <Button>Learn More</Button>
                    </TitleWrap>
                </LeftSection>
                <RightSection>
                    <Profile>
                        {/*<Blur></Blur>*/}
                        <Image src={"/images/hero-bg2.jpg"}></Image>
                    </Profile>
                </RightSection>
            </Hero>
        </Container>
    );
};

export default Header;
