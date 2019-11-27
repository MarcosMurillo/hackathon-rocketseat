import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import { FaEdit, FaStar, FaPlus, FaBars } from "react-icons/fa";
import Navbar from '../../components/Navbar';

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
        <Navbar />

        <div className="container">
          <div className="row">
            <div className="d-flex flex-column">
              <h1 className="c-tit-primary">Perfil</h1>

              <div className="c-profile-header d-flex flex-row">
                <img className="mr-3" src={avatar} alt="Avatar" />
                <div className="d-flex flex-column">
                  <p className="d-flex align-items-center">
                    <span className="mr-3">Patente</span> <FaStar />
                  </p>
                </div>
              </div>

              <div className="profile-info">
                <p>{fullName}</p>
                <p>Campinas-SP</p>
                <p>Front-end JavasScript</p>
                <p>
                  {`Olá sou ${fullName}, sou apaixonado por programação
                  javascript, e por todo ecossistema em volta dessa stack`}
                </p>
                <p>Dev Skill's:</p>
                <button onClick={handleAddSkill}>
                  Add More <FaPlus />
                </button>
                <p>React, React Native, styled-components, Redux</p>
              </div>

              <div className="profile-post">
                Atividade do perfil
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
