import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
// import { Container } from './styles';
// import "./styles.css";

export default function SignupPage() {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">

        <div className="d-flex align-items-center flex-column justify-content-center w-100 mt-5">

          <img src={logo} alt="Logo"/>

          <form action="" className="c-signup-form d-flex flex-column w-50">
            <h1 className="c-signup-form__tit">Cadastrar</h1>
            <input className="c-signup-form__input mb-3" type="text" placeholder="Nome" name="fullName" id="fullName" />
            <input className="c-signup-form__input mb-3" type="text" placeholder="Cidade" name="city" id="city" />
            <input className="c-signup-form__input mb-3" type="text" placeholder="Avatar" name="avatar" id="avatar" />
            <input className="c-signup-form__input mb-3" type="text" placeholder="E-mail" name="email" id="email" />
            <input 
              className="c-signup-form__input mb-3"
              type="password"
              placeholder="Senha"
              name="password"
              id="password"
            />
            <button className="c-signup-bt mb-3">Cadastrar</button>
            <Link className="c-signup-form__link" to="/">Voltar</Link>
          </form>
        </div>

      </div>
    </div>
  );
}
