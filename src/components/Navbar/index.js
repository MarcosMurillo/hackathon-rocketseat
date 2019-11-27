import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";

import logo from '../../images/logo.png';
import { FaEdit, FaBars } from "react-icons/fa";

export default inject("rootStore")(
  observer(function Navbar({ rootStore, setShowSignInModal }) {
    useEffect(() => {
    }, [rootStore.userStore]);

  // const fullName = rootStore.userStore.user
  //   ? rootStore.userStore.user.fullName
  //   : "";
  const avatar = rootStore.userStore.user
    ? rootStore.userStore.user.avatar
    : "";

  return (
    <>
      { localStorage.loggedUserId ? 
        <nav className="c-navbar navbar-expand-lg">
          <a className="navbar-brand" href="/">
            <img className="c-brand" src={logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#conteudoNavbarSuportado"
            aria-controls="conteudoNavbarSuportado"
            aria-expanded="false"
            aria-label="Alterna navegação"
          >
            <FaBars className="i-bars" />
          </button>
    
          <div
            className="collapse navbar-collapse ml-5"
            id="conteudoNavbarSuportado"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="c-nav-link" href="/">
                  Home<span className="sr-only">(página atual)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="c-nav-link" href="/">
                  Como funciona
                </a>
              </li>
              <li className="nav-item">
                <a className="c-nav-link" href="/">
                  API
                </a>
              </li>
              <li className="nav-item">
                <a className="c-nav-link" href="/">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div className="c-avatar-mini d-flex align-items-center mr-5"><img className="mr-3 rounded-circle" src={avatar} alt="Avatar" />Editar perfil <FaEdit className="ml-3" /></div>
          <button className="c-login-bt mr-5">Sair</button> 
        </nav>

        :

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
      }
    </>
    
  )
}))