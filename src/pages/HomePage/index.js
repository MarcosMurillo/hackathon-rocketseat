import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from '../../images/logo.png';


export default function HomePage() {
  return (
    <>
      <div className="home">
        <nav className="c-navbar fixed-top">
          <a className="navbar-brand" href="/"><img class="c-brand" src={logo} alt="Logo"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(página atual)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/">Ação</a>
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

        <footer class="c-footer fixed-bottom">
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
    </>
  )
}
