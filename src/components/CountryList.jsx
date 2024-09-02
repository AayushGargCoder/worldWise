// import PropTypes from "prop-types";
import styles from "./CountryList.module.css";
import Country from "./Country";
import { useCities } from "../context/CitiesContext";
import Spinner from "./Spinner";

// CountryList.propTypes = {
//   isLoading: PropTypes.bool,
//   cities: PropTypes.arrayOf(PropTypes.object),
// };

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  return (
    <ul className={`${styles.countryListStyle}`}>
      {cities
        .reduce((acc, city) => {
          if (
            !acc
              .map((currCountry) => currCountry.country)
              .includes(city.country)
          )
            return [
              ...acc,
              { country: city.country, emoji: city.emoji, id: city.id },
            ];
        }, [])
        .map((country) => (
          <Country key={country.id} countryItem={country} />
        ))}
    </ul>
  );
}

export default CountryList;
