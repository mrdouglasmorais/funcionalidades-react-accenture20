import React, { useState, FormEvent, isValidElement } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import Form from './form'

import { Container, Header, SectionOne } from "./style";
import Logo from "../../img/logo.png";

import api from '../../services/api';

const cpfMask = [
  /[1-9]/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/
]

const Home: React.FC = () => {

  const history = useHistory()




  const [ cpf, setCpf ] = useState('')
  const [ name, setName ] = useState('')
  const [ userName, setUserName ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPass, setConfirmPass ] = useState('')

  function createAccount( event: FormEvent<HTMLFormElement> ){
    event.preventDefault()

    const postData = {
      cpf,
      nome: name,
      login: userName,
      senha: password
    }
    
    if ( password !== confirmPass ) {
      toast.error('Sua senha está incorreta!') 
      return;
    }

    try {
      api.post(`usuarios`, postData ).then(
        response => { 
          if (response.status === 200){
            history.push('/login')
          } else {
            toast.error('Algo de errado, tente novamente em alguns minutos.')
          }
         }
      )
    } catch (err) {
      toast.error('Confirm seus dados')
    }
  }

  return (
    <>
    <Container>
      <Header>
        <Link to="/">
          <img className="logo-gama" src={Logo} alt=""/>
        </Link>
      </Header>
      <Form/>
    </Container>
    </>
    );
}

export default Home;