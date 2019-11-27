import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import { FaEdit, FaStar, FaPlus } from "react-icons/fa";

export default inject("rootStore")(
  observer(function ProfilePage({ rootStore }) {
    useEffect(() => {
      rootStore.userStore.loadOne(0);
    }, [rootStore.userStore]);

    return (
      <>
        <div className="profile-header">
          <img
            src={`https://www.google.com/search?q=avatar+example&tbm=isch&source=univ&sa=X&ved=2ahUKEwiqhJLns4nmAhVuILkGHZKwC4wQsAR6BAgIEAE&biw=730&bih=968#imgrc=OQbB11BB_JBVAM`}
            alt=""
          />
          <span>
            Editar perfil <FaEdit />
          </span>
          <span>
            Patente <FaStar />
          </span>
        </div>
        <div className="profile-info">
          <span>
            {rootStore.userStore.one ? rootStore.userStore.one.fullName : "kk"}
          </span>
          <span>Campinas-SP</span>
          <span>Front-end JavasScript</span>
          <span>
            Olá sou Enzo Soares Strazzacappa, sou apaixonado por programação
            javascript, e por todo ecossistema em volta dessa stack
          </span>
          <span>Dev Skill's:</span>
          <button>
            Add More <FaPlus />
          </button>
          <span>React, React Native, styled-components, Redux</span>
        </div>
        <div className="profile-post">
          <div className="box-post">POST 1</div>
          <div className="box-post">POST 2</div>
          <div className="box-post">POST 3</div>
          <div className="box-post">POST 4</div>
        </div>
      </>
    );
  })
);
