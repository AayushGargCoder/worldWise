/*eslint-disable */

import { useNavigate, useParams } from "react-router-dom";
import style from "./City.module.css";
import { useEffect } from "react";
import { useCities } from "../context/CitiesContext";
import { useSearchParams } from "react-router-dom";
import Spinner from "./Spinner";
const formatDate = (date = new Date()) =>
  new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));

function City() {
  const { id: currentSelectedCityId } = useParams();
  const navigate = useNavigate();
  const { currentSelectedCity, fetchCurrentlySelectedCity, isLoading } =
    useCities();
  useEffect(
    function () {
      fetchCurrentlySelectedCity(currentSelectedCityId);
    },
    [currentSelectedCityId]
  );
  const { cityName, date, emoji } = currentSelectedCity;
  if (isLoading) return <Spinner />;
  return (
    <div className={`${style.city}`}>
      <div>
        <h6>cityName</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>
      <div>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date)}</p>
      </div>
      <div>
        <h6>Learn More</h6>
        <a
          href="https://en.wikipedia.org/wiki/Lena"
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on wikipedia
        </a>
      </div>
      <button onClick={() => navigate(-1)}>&larr; Back</button>
    </div>
  );
}

export default City;
