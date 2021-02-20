import React from 'react';
import { Link } from 'react-router-dom';

import Form from './form'

import { Container, Header } from "./style";
import Logo from "../../img/logo.png";

const Home: React.FC = () => {
  return (
    <>
    <Container>
      <Header>
        <Link to="/">
          <img className="logo-gama" src={Logo} alt=""/>
        </Link>
      </Header>
      <Form />
    </Container>
    </>
    );
}

export default Home;