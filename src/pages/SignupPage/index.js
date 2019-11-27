import React from "react";
import { Link } from "react-router-dom";

// import { Container } from './styles';
// import "./styles.css";

export default function SignupPage() {
  return (
    <div className="master">
      <form action="" className="signupForm">
        <span>Cadastrar</span>
        <div>
          <label htmlFor="fullName">Nome:</label>
          <input type="text" placeholder="Nome" name="fullName" id="fullName" />
        </div>
        <div>
          <label htmlFor="city">Cidade:</label>
          <input type="text" placeholder="Cidade" name="city" id="city" />
        </div>
        <div>
          <label htmlFor="avatar">Avatar:</label>
          <input type="text" placeholder="Avatar" name="avatar" id="avatar" />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="text" placeholder="E-mail" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            placeholder="Senha"
            name="password"
            id="password"
          />
        </div>
        <button>Cadastrar</button>
        <Link to="/">Voltar</Link>
      </form>
    </div>
  );
}
