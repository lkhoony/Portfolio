import React, {useState} from 'react'
import {motion} from "framer-motion";
import { Column, PageContainer, SectionDivider, SectionTitle, SectionSubText } from '../../styles/GlobalComponents';
import {SkillsWrap, Skill, SkillImage, SkillName, Proficiencies} from './SkillsStyles';
import ProgressBar from '../ProgressBar/ProgressBar';
import {SkillsData} from '../../constants/constants';

/**
 * 요구사항
 * 1. Skill mouse over시 progress bar 나타남
 * 2. mouse over시 부터 progress bar 채워짐
 * 3. progress bar 숙련도 0부터 증가 
 * 
 */

const Skills = () => {

    const [active, setActive] = useState(-1);

    const onMouseEnter = (id) => {
        setActive(id);
    }

    const onMouseLeave = () => {
        setActive(-1);
    }

    const createSkillList = (skills) => {

        return skills.map(({id,category,img,span,skills})=>(

            <Skill span={span} key={id} onMouseEnter={()=>onMouseEnter(id)} onMouseLeave={onMouseLeave}>
                <Proficiencies>
                    <SkillName color={"white"}>{category}</SkillName>
                    <SectionDivider color={"white"}></SectionDivider>
                    {
                        active === id ? 
                        skills.map(({id,name,proficiency})=>(
                            <ProgressBar key={id} name={name} max={proficiency}></ProgressBar>
                        )) : null
                    }
                </Proficiencies>
                <SkillName>{category}</SkillName>
                <SectionDivider></SectionDivider>
                <SkillImage src={img} />
            </Skill>
        ))

    }

    return(
        <PageContainer as={motion.div} initial={{opacity : 0}} animate={{opacity : 1}} transition={{ duration: 1 }}>
            <Column>
                <SectionTitle>Skills</SectionTitle>
                <SectionDivider />
                <SectionSubText>지금까지 대표적으로 5번의 개인 및 팀 프로젝트를 진행하였고 이 중 경진대회에서 3번의 수상을 했습니다. 이렇게 진행했던 프로젝트를 Github에 업로드하여 소스코드를 관리하고 있습니다. 또한 3개의 기사 자격증을 취득하여 CS를 포함하는 전공 지식을 채웠습니다.</SectionSubText>
            </Column>

            <SkillsWrap>
                {createSkillList(SkillsData)}
                
            </SkillsWrap>
        </PageContainer>
    )
}

export default Skills;