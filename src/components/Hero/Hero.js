import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello I'm <br />
        <strong>Abdul Haseeb</strong>
      </SectionTitle>
      <SectionText>
        I am a full stack engineer and have experience of more than 3 years in programming. I have worked in different technologies and solved multiple problems.
      </SectionText>
      <Button onClick={() => console.log('')}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;