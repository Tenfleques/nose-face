import React from 'react';
import {Link} from 'react-router-dom';
import AppConfig from "../../Configs/package";

const NavBar = (props) => {
  return (
    <nav className={"navbar navbar-dark bg-primary fixed-top " + props.className} >
      <Link className="nav-item text-white no-underline" to="/nose-face">
        {AppConfig.appname}
      </Link>
      {/* <Link className="nav-item text-white" to="/models">
        Модели
      </Link>
      <Link className="nav-item text-white" to="/noses">
        Электроные носы
      </Link> */}
      <Link className="nav-item text-white no-underline" to="/nose-face/upload">
        Загрузка файлов носа
      </Link>
    </nav>
  );
}

export default NavBar;