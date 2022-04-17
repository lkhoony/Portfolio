import React from 'react'
import {AiOutlineProject, AiFillGithub} from 'react-icons/ai';
import {BsAward} from 'react-icons/bs';
import {HiOutlineIdentification} from 'react-icons/hi';
import {BiChevronRight} from 'react-icons/bi';
import {PageContainer, SectionTitle, Column, SectionDivider, SectionSubText} from '../../styles/GlobalComponents';
import {motion} from "framer-motion";
import {Fact, FactIcon, FactNumber, FactName, FactLeft, FactRight, FactList} from "./FactsStyles";
import {AboutList, Icon, AboutText} from '../About/AboutStyles';

const Facts = () => {

    return(
        <PageContainer as={motion.div} initial={{opacity : 0}} animate={{opacity : 1}} transition={{ duration: 1 }}>
            <Column>
                <SectionTitle>Facts</SectionTitle>
                <SectionDivider></SectionDivider>
                <SectionSubText>지금까지 대표적으로 5번의 개인 및 팀 프로젝트를 진행하였고 이 중 경진대회에서 3번의 수상을 했습니다. 이렇게 진행했던 프로젝트를 Github에 업로드하여 소스코드를 관리하고 있습니다. 또한 3개의 기사 자격증을 취득하여 CS를 포함하는 전공 지식을 채웠습니다.</SectionSubText>
            </Column>
            <Column half>
                <Fact>
                    <FactLeft>
                        <FactIcon><AiOutlineProject size="5vw"></AiOutlineProject></FactIcon>
                        <FactNumber>5</FactNumber>
                        <FactName>Projects</FactName>
                    </FactLeft>
                    <FactRight>
                        <AboutList>
                            <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                            <AboutText>제주 관광지 소개 웹 사이트</AboutText>
                        </AboutList>
                        <AboutList>
                            <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                            <AboutText>제주 전기차 충전소 정보제공 웹 서비스</AboutText>
                        </AboutList>
                        <AboutList>
                            <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                            <AboutText>전력 사용량 분석 및 CCHP 발전 스케줄링 웹 어플리케이션</AboutText>
                        </AboutList>
                        <AboutList>
                            <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                            <AboutText>사내 클라우드 빌링 시스템 개발</AboutText>
                        </AboutList>
                        <AboutList>
                            <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                            <AboutText>사내 업무 전화 Client 어플리케이션 개발</AboutText>
                        </AboutList>
                    </FactRight>
                </Fact>
            </Column>
            <Column half>
                <Fact>
                    <FactLeft>
                        <FactIcon><BsAward size="5vw"></BsAward></FactIcon>
                        <FactNumber>3</FactNumber>
                        <FactName>Awards</FactName>
                    </FactLeft>
                    <FactRight>
                        <AboutList>
                            <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                            <AboutText>소프트웨어 융합대학 창의설계경진대회 (최우수상)</AboutText>
                        </AboutList>
                        <AboutList>
                            <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                            <AboutText>문화데이터 활용 경진대회 (최우수상)</AboutText>
                        </AboutList>
                        <AboutList>
                            <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                            <AboutText>교내 공학인증 창의설계경진대회 (동상)</AboutText>
                        </AboutList>
                    </FactRight>
                </Fact>
            </Column>
            <Column half>
                <Fact>
                    <FactLeft>
                        <FactIcon><AiFillGithub size="5vw"></AiFillGithub></FactIcon>
                        <FactNumber>23</FactNumber>
                        <FactName>Repositories</FactName>
                    </FactLeft>
                    <FactRight>
                        <AboutList>
                            <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                            <AboutText>React, Redux Develope and Production Bolierplate</AboutText>
                        </AboutList>
                        <AboutList>
                            <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                            <AboutText>Electron Develope and Production Boilerplate</AboutText>
                        </AboutList>
                        <AboutList>
                            <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                            <AboutText>WebRTC Audio Handler Module</AboutText>
                        </AboutList>
                        <AboutList>
                            <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                            <AboutText>프로젝트를 정리한 Repositories</AboutText>
                        </AboutList>
                        <AboutList>
                            <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                            <AboutText>알고리즘, CS 스터디 Repositories</AboutText>
                        </AboutList>
                    </FactRight>
                </Fact>
            </Column>
            <Column half>
                <Fact>
                    <FactLeft>
                        <FactIcon><HiOutlineIdentification size="5vw"></HiOutlineIdentification></FactIcon>
                        <FactNumber>3</FactNumber>
                        <FactName>Certifications</FactName>
                    </FactLeft>
                    <FactRight>
                        <AboutList>
                            <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                            <AboutText>정보처리기사</AboutText>
                        </AboutList>
                        <AboutList>
                            <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                            <AboutText>측량및지형공간정보기사</AboutText>
                        </AboutList>
                        <AboutList>
                            <Icon><BiChevronRight size="2.5vw"></BiChevronRight></Icon>
                            <AboutText>정보처리기능사</AboutText>
                        </AboutList>
                    </FactRight>
                </Fact>
            </Column>
        </PageContainer>
    )
}

export default Facts;


