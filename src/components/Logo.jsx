import { Link } from "react-router-dom";
import style from "./Logo.module.css";
function Logo() {
  return (
    <Link to="/">
      <img src="./../../public/logo.png" className={`${style.img}`}></img>
    </Link>
  );
}

export default Logo;
