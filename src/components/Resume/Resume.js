import React from 'react';
import {Layout} from '../../layout/Layout';
import {motion} from "framer-motion";
import { Column, PageContainer, SectionDivider, SectionTitle, SectionSubText } from '../../styles/GlobalComponents';

const Resume = () => {

    return(
        <Layout>
            <PageContainer as={motion.div} initial={{opacity : 0}} animate={{opacity : 1}} transition={{ duration: 1 }}>
                <Column>
                    <SectionTitle>Resume</SectionTitle>
                    <SectionDivider />
                    <SectionSubText>지금까지 대표적으로 5번의 개인 및 팀 프로젝트를 진행하였고 이 중 경진대회에서 3번의 수상을 했습니다. 이렇게 진행했던 프로젝트를 Github에 업로드하여 소스코드를 관리하고 있습니다. 또한 3개의 기사 자격증을 취득하여 CS를 포함하는 전공 지식을 채웠습니다.</SectionSubText>
                </Column>
            </PageContainer>
        </Layout>
    )
}

export default Resume;