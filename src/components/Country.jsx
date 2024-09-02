import PropTypes from "prop-types";
import style from "./Country.module.css";
Country.propTypes = {
  countryItem: PropTypes.object,
};

function Country({ countryItem }) {
  const { country: countryName, emoji } = countryItem;
  return (
    <li className={`${style.countryStyle}`}>
      <span>{emoji}</span>
      <span>{countryName}</span>
    </li>
  );
}

export default Country;
