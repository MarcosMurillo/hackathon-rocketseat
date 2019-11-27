import React, { useState } from "react";
import { inject, observer } from 'mobx-react'
import { FaFacebook, FaInstagram, FaUser, FaLock, FaTwitter, FaBars } from "react-icons/fa";
import logo from '../../images/logo.png';

import { InputGroup, FormControl } from 'react-bootstrap'
import ModalWrapperComponent from '../../components/ModalComponent/ModalWrapperComponent'
import ModalHeaderComponent from '../../components/ModalComponent/ModalHeaderComponent'
import ModalBodyComponent from '../../components/ModalComponent/ModalBodyComponent'
import ModalFooterComponent from '../../components/ModalComponent/ModalFooterComponent'


export default inject("rootStore")(
  observer(function HomePage({ rootStore }) {

  const [showSignInModal, setShowSignInModal] = useState(false)
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loginError, setLoginError] = useState('')

  const handleLogin = async () => {
    try {
      const response = await rootStore.userStore.login(loginEmail, loginPassword)
      if (response) {
        localStorage.setItem('loggedUserId', response.id)
        setLoginError('')
      }
      else setLoginError('Senha incorreta ou conta inexistente.')
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <>
      <div className="home">
        <nav className="c-navbar navbar-expand-lg fixed-top">
          <a className="navbar-brand" href="/"><img className="c-brand" src={logo} alt="Logo"/></a>
          <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
            <FaBars className="i-bars" />
          </button>

          <div className="collapse navbar-collapse ml-5" id="conteudoNavbarSuportado">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="c-nav-link" href="/">Home<span className="sr-only">(página atual)</span></a>
              </li>
              <li className="nav-item">
                <a className="c-nav-link" href="/">Como funciona</a>
              </li>
              <li className="nav-item">
                <a className="c-nav-link" href="/">API</a>
              </li>
              <li className="nav-item">
                <a className="c-nav-link" href="/">Contato</a>
              </li>
            </ul>
          </div>

          <button className="c-login-bt mr-5" onClick={() => setShowSignInModal(true)}>Login</button>
        </nav>
      
        <div className="container">
          <div className="row">
            <div className="c-intro d-flex flex-column justify-content-center">
              <h1 className="c-intro__tit">Aprenda. Ensine. Trabalhe.</h1>
              <h2 className="c-intro__sub-tit mt-3">O plataforma definitiva para iniciantes até sêniors da programação.</h2>
              <a className="c-big-bt mt-4" href="/">Cadastre-se</a>
            </div>
          </div>
        </div>

        <footer className="c-footer fixed-bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="c-list-icons d-flex">
                <FaFacebook className="i-facebook mr-3" />
                <FaInstagram className="i-instagram mr-3" />
                <FaTwitter className="i-twitter" />
              </div>
            </div>
          </div>
        </footer>
      </div>

      <ModalWrapperComponent id="sign-in" show={showSignInModal} handleClose={() => setShowSignInModal(false)}>
        <ModalHeaderComponent title="Fazer Login" />
        <ModalBodyComponent>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <FaUser />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="Email" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <FaLock />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="Senha" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} />
          </InputGroup>
          <span className="text-danger">{loginError}</span>
        </ModalBodyComponent>
        <ModalFooterComponent
          confirmButton={{ text: 'Entrar', behaviour: handleLogin}}
          cancelButton={{ behaviour: () => setShowSignInModal(false)}} 
        />
      </ModalWrapperComponent>
    </>
  )
}))
