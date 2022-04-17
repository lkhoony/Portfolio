import React from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';

import {MainContainer, Menu, MenuImage, MenuDesc, MenuName, ViewProject} from "./MainStyles";

const Main = () => {
    return(
        <MainContainer as={motion.div} initial={{opacity : 0}} animate={{opacity : 1}} transition={{ duration: 1 }}>
            <Link href={"/about"}>
                <Menu>
                    <MenuImage src={"/images/profile2.jpg"}></MenuImage>
                    <MenuDesc>
                        <MenuName>About</MenuName>
                        <ViewProject>view about</ViewProject>
                    </MenuDesc>
                </Menu>
            </Link>
            <Link href={"/facts"}>
                <Menu>
                    <MenuImage src={"/images/profile2.jpg"}></MenuImage>
                    <MenuDesc>
                        <MenuName>Facts</MenuName>
                        <ViewProject>view facts</ViewProject>
                    </MenuDesc>
                </Menu>
            </Link>
            <Link href={"#projects"}>
                <Menu>
                    <MenuImage src={"/images/profile2.jpg"}></MenuImage>
                    <MenuDesc>
                        <MenuName>Skills</MenuName>
                        <ViewProject>view skills</ViewProject>
                    </MenuDesc>
                </Menu>
            </Link>
            <Link href={"#projects"}>
                <Menu>
                    <MenuImage src={"/images/profile2.jpg"}></MenuImage>
                    <MenuDesc>
                        <MenuName>Resume</MenuName>
                        <ViewProject>view resume</ViewProject>
                    </MenuDesc>
                </Menu>
            </Link>
            <Link href={"#projects"}>
                <Menu>
                    <MenuImage src={"/images/profile2.jpg"}></MenuImage>
                    <MenuDesc>
                        <MenuName>Portfolio</MenuName>
                        <ViewProject>view portfolio</ViewProject>
                    </MenuDesc>
                </Menu>
            </Link>
        </MainContainer>
    )
}

export default Main