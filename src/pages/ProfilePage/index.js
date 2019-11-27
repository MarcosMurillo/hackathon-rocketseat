import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import { FaEdit, FaStar, FaPlus } from "react-icons/fa";

export default inject("rootStore")(
  observer(function ProfilePage({ rootStore }) {
    useEffect(() => {
      rootStore.userStore.loadOne(0);
    }, [rootStore.userStore]);

    function handleAddSkill() {
      return alert(`Parabéns, você clicou no botão`);
    }
    const fullName = rootStore.userStore.one
      ? rootStore.userStore.one.fullName
      : "kk";
    const avatar = rootStore.userStore.one
      ? rootStore.userStore.one.avatar
      : "";

    return (
      <>
        <div className="profile-header">
          <img src={avatar} alt="" />
          <span>
            Editar perfil <FaEdit />
          </span>
          <span>
            Patente <FaStar />
          </span>
        </div>
        <div className="profile-info">
          <span>{fullName}</span>
          <span>Campinas-SP</span>
          <span>Front-end JavasScript</span>
          <span>
            {`Olá sou ${fullName}, sou apaixonado por programação
            javascript, e por todo ecossistema em volta dessa stack`}
          </span>
          <span>Dev Skill's:</span>
          <button onClick={handleAddSkill}>
            Add More <FaPlus />
          </button>
          <span>React, React Native, styled-components, Redux</span>
        </div>
        <div className="profile-post">
          Atividade do perfil
          <div className="box-post">POST 1</div>
          <div className="box-post">POST 2</div>
          <div className="box-post">POST 3</div>
          <div className="box-post">POST 4</div>
        </div>
      </>
    );
  })
);
