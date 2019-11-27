import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import { FaEdit, FaStar, FaPlus } from "react-icons/fa";

// import { Container } from './styles';

export default function FeedPage() {
  // observer(function ProfilePage({ rootStore }) {
  //   useEffect(() => {
  //     rootStore.userStore.loadOne(0);
  //   }, [rootStore.userStore]);

  //   function handleAddSkill() {
  //     return alert(`Parabéns, você clicou no botão`);
  //   }
  //   const fullName = rootStore.userStore.one
  //     ? rootStore.userStore.one.fullName
  //     : "";
  //   const avatar = rootStore.userStore.one
  //     ? rootStore.userStore.one.avatar
  //     : "";

  return (
    <>
      <div className="profile-header">
        {/* <img src={} alt="" /> */}
        <span>
          Editar perfil <FaEdit />
        </span>
        <span>
          Patente <FaStar />
        </span>
      </div>
    </>
  );
}
