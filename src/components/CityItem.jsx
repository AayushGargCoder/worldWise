import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import style from "./CityItem.module.css";
import { useCities } from "../context/CitiesContext";
CityItem.propTypes = {
  city: PropTypes.object,
};

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentSelectedCity, DeleteCity } = useCities();
  const { emoji, cityName, date, id, position } = city;

  function handleDelete(e) {
    e.preventDefault();
    DeleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${style.cityLink} ${
          currentSelectedCity.id === id ? style["city-selected--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span>{emoji}</span>
        <h3>{cityName}</h3>
        <time>({formatDate(date)})</time>
        <button onClick={handleDelete}>x</button>
      </Link>
    </li>
  );
}

export default CityItem;
