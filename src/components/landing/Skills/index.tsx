import React, { useContext, FunctionComponent } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills: FunctionComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m an engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h2>More about me</h2>
          <p>
            My passion for open source technologies has allowed me to take products and applications from conception to
            production. I am a trusted communicator between technical and non-technical staff which allows me to architect
            solutions that are both rapid to deploy and easily scalable
          </p>
          <p>
            I am a full stack engineer specializing in Node.
            I have worked on devops, backend and frontend teams individually and I enjoy web technologies such as React, GraphQL and library development.
          </p>
          <Button as={AnchorLink} href="#contact">
            Contact me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
