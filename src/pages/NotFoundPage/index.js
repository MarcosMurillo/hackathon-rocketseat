import React from "react";
import logo from "../../images/logo.png";

export default function HomePage() {
  return (
    <>
      <div className="home">
        <nav className="c-navbar navbar-expand-lg fixed-top">
          <a className="navbar-brand" href="/">
            <img className="c-brand" src={logo} alt="Logo" />
          </a>
        </nav>

        <div className="container">
          <div className="row">
            <div className="c-intro d-flex flex-column justify-content-center">
              <h1 className="c-intro__tit">404</h1>
              <h2 className="c-intro__sub-tit mt-3">Página não encontrada.</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
