import React, { FunctionComponent } from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact: FunctionComponent = () => (
  <Wrapper as={Container} id="contact">
    <h2>Contact Me</h2>
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m Cameron and I’m an engineer" />
    </Thumbnail>
  </Wrapper>
);
