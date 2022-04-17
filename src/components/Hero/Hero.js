import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection, Image, Tooltip, TooltipName, TooltipPosition} from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
        <SectionTitle main>
            Positive.<br/>
            Learn.<br/>
            Grow.<br/>
        </SectionTitle>
        <SectionText>
            긍정적인 태도로 끊임없이 배우는 FrontEnd 개발자 이광훈입니다.
        </SectionText>
        <Button onClick={()=>window.location = 'https://google.com'}>Learn More</Button>
      </LeftSection>
      <RightSection>
          <Image src={"/images/hero-bg.jpg"}></Image>
          <Tooltip>
              <TooltipName>KWANGHUN LEE</TooltipName>
              <TooltipPosition>FrontEnd Developer</TooltipPosition>
          </Tooltip>
      </RightSection>
  </Section>
);

export default Hero;