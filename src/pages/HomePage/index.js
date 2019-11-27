import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaBars } from "react-icons/fa";
import logo from '../../images/logo.png';


export default function HomePage() {
  return (
    <>
      <div className="home">
        <nav className="c-navbar navbar-expand-lg fixed-top">
          <a className="navbar-brand" href="/"><img class="c-brand" src={logo} alt="Logo"/></a>
          <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
            <FaBars className="i-bars" />
          </button>

          <div className="collapse navbar-collapse ml-5" id="conteudoNavbarSuportado">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="c-nav-link" href="/">Home<span className="sr-only">(página atual)</span></a>
              </li>
              <li className="nav-item">
                <a className="c-nav-link" href="/">Quem somos</a>
              </li>
              <li className="nav-item">
                <a className="c-nav-link" href="/">Contato</a>
              </li>
            </ul>
          </div>
        </nav>
      
        <div className="container">
          <div className="row">
            <div className="c-intro d-flex flex-column justify-content-center">
              <h1 className="c-intro__tit">Aprenda. Ensine. Trabalhe.</h1>
              <h2 className="c-intro__sub-tit">O plataforma definitiva para iniciantes e sêniors da programação.</h2>
            </div>
          </div>
        </div>

        <footer class="c-footer fixed-bottom">
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
    </>
  )
}
