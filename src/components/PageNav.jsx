import { Link } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";
function pageNav() {
  return (
    <nav className={`${styles.nav}`}>
      <Logo />
      <ul>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li className={`${styles.loginLink}`}>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default pageNav;
