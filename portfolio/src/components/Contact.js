import React from 'react'
import { Container } from "react-bootstrap";
import Particle from './Particle';
import ContactForm from './ContactForm';
import Social from './Social';

const Contact = () => {
  return (
    <Container style={{padding: '60px', top: '50px'}}>
      <Particle />
      <ContactForm />
      <Social />
    </Container>
  )
}

export default Contact