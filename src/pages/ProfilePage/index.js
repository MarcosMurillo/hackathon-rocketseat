import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import { FaEdit, FaStar, FaPlus, FaBars } from "react-icons/fa";

import logo from "../../images/logo.png";

export default inject("rootStore")(
  observer(function ProfilePage({ rootStore }) {
    useEffect(() => {}, [rootStore.userStore]);

    function handleAddSkill() {
      return alert(`Parabéns, você clicou no botão`);
    }
    const fullName = rootStore.userStore.user
      ? rootStore.userStore.user.fullName
      : "";
    const avatar = rootStore.userStore.user
      ? rootStore.userStore.user.avatar
      : "";

    return (
      <>
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

        <div className="container">
          <div className="row">
            <div className="d-flex flex-column w-50">
              <h1 className="c-tit-primary">Perfil</h1>

              <div className="c-profile-header d-flex flex-row">
                
                <div className="d-flex flex-column">
                  <img className="mr-3 mb-3" src={avatar} alt="Avatar" />
                  <p className="d-flex align-items-center">
                    <span className="mr-3 c-stars"><FaStar className="mr-2" /><FaStar className="mr-2" /><FaStar className="mr-2" /><FaStar className="mr-2" /></span>
                  </p>
                </div>

                <div className="d-flex flex-column">
                  <p>{fullName}</p>
                  <p>Campinas-SP</p>
                  <p>Front-end JavasScript</p>
                  <p>
                    {`Olá sou ${fullName}, sou apaixonado por programação
                    javascript, e por todo ecossistema em volta dessa stack`}
                  </p>
                </div>

              </div>

              <div className="profile-info">
                
                <h2 className="c-tit-primary">Dev Skill's:</h2>
                {/* <button onClick={handleAddSkill}>
                  Add More <FaPlus />
                </button> */}
                <p>React, React Native, styled-components, Redux</p>
              </div>

              <div className="profile-post">
              <h2 className="c-tit-primary">Atividade do perfil</h2>  
                <div className="box-post">POST 1</div>
                <div className="box-post">POST 2</div>
                <div className="box-post">POST 3</div>
                <div className="box-post">POST 4</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  })
);
