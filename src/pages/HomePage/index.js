import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaUser, FaLock } from "react-icons/fa";
import logo from '../../images/logo.png';

import { InputGroup, FormControl } from 'react-bootstrap'
import ModalWrapperComponent from '../../components/ModalComponent/ModalWrapperComponent'
import ModalHeaderComponent from '../../components/ModalComponent/ModalHeaderComponent'
import ModalBodyComponent from '../../components/ModalComponent/ModalBodyComponent'
import ModalFooterComponent from '../../components/ModalComponent/ModalFooterComponent'


export default function HomePage() {
  const [showSignInModal, setShowSignInModal] = useState(false)

  return (
    <>
      <div className="home">
        <nav className="c-navbar fixed-top">
          <a className="navbar-brand" href="/"><img className="c-brand" src={logo} alt="Logo"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <button className="nav-link" onClick={() => setShowSignInModal(true)}>Entrar</button>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <button data-toggle="modal" data-target="#sign-in">Entrar</button>
                  <a className="dropdown-item" href="/">Outra ação</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">Algo mais aqui</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">Desativado</a>
              </li>
            </ul>
          </div>
        </nav>
      
        <div className="container">
          <div className="row">
            
          </div>
        </div>

        <footer className="c-footer fixed-bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="c-list-icons d-flex">
                <FaFacebook className="i-facebook mr-3" />
                <FaInstagram className="i-instagram" />
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
            <FormControl placeholder="Email" />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <FaLock />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="Senha" />
          </InputGroup>
        </ModalBodyComponent>
        <ModalFooterComponent
          confirmButton={{ text: 'Entrar', behaviour: () => {}}}
          cancelButton={{ behaviour: () => setShowSignInModal(false)}} 
        />
      </ModalWrapperComponent>
    </>
  )
}
