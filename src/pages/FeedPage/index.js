import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import { FaEdit, FaBars } from "react-icons/fa";

import TechnologyComponent from "../../components/TechnologyComponent";

import logo from "../../images/logo.png";

export default inject("rootStore")(
  observer(function FeedPage({ rootStore }) {
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
          <div className="c-avatar-mini d-flex align-items-center mr-5">
            <img className="mr-3 rounded-circle" src={avatar} alt="Avatar" />
            Editar perfil <FaEdit className="ml-3" />
          </div>
          <button className="c-login-bt mr-5">Sair</button>
        </nav>

        <div className="container">
          {rootStore.courseStore.all ? (
            rootStore.courseStore.all.map(course => (
              <div className="card m-3" key={course.id}>
                <div className="card-body">
                  <h5 className="card-title mr-3">{course.title}</h5>

                  <p className="card-text">{course.description}</p>
                  <a className="btn btn-success" href={course.url}>
                    Acessar
                  </a>
                  <hr />
                  <div className="d-flex flex-row">
                    {course.relatedTechnologies.map(technology => (
                      <TechnologyComponent
                        key={technology.id}
                        technology={technology}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </>
    );
  })
);
