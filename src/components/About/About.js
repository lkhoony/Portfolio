import React from 'react';
import {BiChevronRight} from 'react-icons/bi';
import {AboutContainer, Column, AboutList, Icon, AboutText} from './AboutStyles';
import {motion} from "framer-motion";
import {TitleWrap,Title, SubTitle, Profile, Image} from '../Header/HeaderStyles';
import {SectionTitle, SectionDivider, SectionText, SectionSubText} from '../../styles/GlobalComponents/index';
const About = () => {

    return(
        <AboutContainer as={motion.div} initial={{opacity : 0}} animate={{opacity : 1}} transition={{ duration: 1 }}> 
            <Column half>
                <TitleWrap>
                    <Title>
                        Positive.<br/>
                        Learn.<br/>
                        Grow.<br/>
                    </Title>
                    <SubTitle>
                        긍정적인 태도로 끊임없이 배우는 웹 개발자 이광훈입니다.
                    </SubTitle>
                </TitleWrap>
            </Column>
            <Column half>
                <Profile>
                    <Image src={"/images/profile4.jpg"}></Image>
                </Profile>
            </Column>
            <Column>
                <SectionTitle>About</SectionTitle>
                <SectionDivider></SectionDivider>
                <SectionText color="#686868">Web Front End & Back End Developer.</SectionText>
                <SectionSubText>React를 사용한 Front End 개발과 SpringBoot를 사용한 Back End 개발에 관심있습니다.</SectionSubText>
            </Column>
            <Column></Column>
            <Column half>
                <AboutList>
                    <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                    <AboutText bold>Name: </AboutText>
                    <AboutText>LEE KWANGHUN</AboutText>
                </AboutList>
                <AboutList>
                    <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                    <AboutText bold>Birthday: </AboutText>
                    <AboutText>7 April 1995</AboutText>
                </AboutList>
                <AboutList>
                    <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                    <AboutText bold>Age: </AboutText>
                    <AboutText>27</AboutText>
                </AboutList>
                <AboutList>
                    <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                    <AboutText bold>Degree: </AboutText>
                    <AboutText>Bachelor</AboutText>
                </AboutList>
                
            </Column>
            <Column half>
                <AboutList>
                    <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                    <AboutText bold>Phone: </AboutText>
                    <AboutText>+82 10-2852-0975</AboutText>
                </AboutList>
                <AboutList>
                    <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                    <AboutText bold>Email: </AboutText>
                    <AboutText>lkh14011424@gmail.com</AboutText>
                </AboutList>
                <AboutList>
                    <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                    <AboutText bold>City: </AboutText>
                    <AboutText>Seoul, South Korea</AboutText>
                </AboutList>
                <AboutList>
                    <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                    <AboutText bold>Website: </AboutText>
                    <AboutText>www.github.com/lkhoony</AboutText>
                </AboutList>
            </Column>
            <Column> 
                <SectionSubText>
                    저는 성실함을 토대로 흥미를 느낀 분야에 대해서는 전문가가 되고자 하는 성격입니다. 
                    <br/><br/>학부연구생으로 근무할 때 실시간 위치 정보를 제공해주는 웹 기반 툴을 개발하면서 웹 분야에 흥미를 느껴서 휴학까지 불사하며 이에 대한 지식을 채웠고 회사를 다니면서 퇴근 후에도 React와 SpringBoot 스터디를 진행하기도 했습니다. 최근에는 가상 업무 회의실을 개발하면서 Metaverse에도 흥미를 느껴 웹 기반 Metaverse 플랫폼을 개발하고 있습니다.
                    <br/><br/>이러한 저의 성격으로 채운 웹 지식으로 제가 필요한 곳에서 전문가로써 능력을 발휘할 수 있을 것으로 자신합니다. 
                </SectionSubText>
            </Column>
        </AboutContainer>
    )
}

export default About;