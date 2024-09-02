import CityItem from "./CityItem";
// import PropTypes from "prop-types";
import style from "./CityList.module.css";
import { useCities } from "../context/CitiesContext";
import Spinner from "./Spinner";
// CityList.propTypes = {
//   isLoading: PropTypes.bool.isRequired,
//   cities: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

function CityList() {
  const { isLoading, cities } = useCities();
  if (isLoading) return <Spinner />;
  return (
    <ul className={`${style.cityContainer}`}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
