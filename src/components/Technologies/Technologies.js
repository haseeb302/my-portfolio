import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <div>
    <Section id="technologies">
      <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range of technologies in web development including both front-end and backend.        
      </SectionText>
      <List>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Front End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js  
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Back End</ListTitle>
            <ListParagraph>
              Experience with <br />
              NodeJS and Database  
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br />
              Figma  
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  </div>
);

export default Technologies;
