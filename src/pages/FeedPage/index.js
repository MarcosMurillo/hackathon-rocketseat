import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { FaSearch } from "react-icons/fa";

import logo from "../../images/logo.png";

export default inject("rootStore")(
  observer(function FeedPage({ rootStore }) {
    useEffect(() => {
      rootStore.userStore.loadOne(0);
    }, [rootStore.userStore]);

    const fullName = rootStore.userStore.one
      ? rootStore.userStore.one.fullName
      : "";
    const avatar = rootStore.userStore.one
      ? rootStore.userStore.one.avatar
      : "";

    return (
      <>
        <div className="profile-header">
          <a className="navbar-brand" href="/">
            <img className="c-brand" src={logo} alt="Logo" />
          </a>

          <img src={avatar} alt={fullName} style={{ borderRadius: "50%" }} />
          <Link to="/profile">{fullName}</Link>

          <div className="search-box">
            <input type="search" name="search" placeholder="Pesquisar" />
            <button>
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="profile-info"></div>
      </>
    );
  })
);
