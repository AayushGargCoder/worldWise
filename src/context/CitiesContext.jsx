import { createContext, useContext, useEffect, useState } from "react";
const CitiesContext = createContext();

CitiesProvider.propTypes = null;
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSelectedCity, setCurrentlySelectedCity] = useState({});
  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/cities");
        const data = await res.json();
        setCities(data);
      } catch (err) {
        alert("Error occurring loading data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function fetchCurrentlySelectedCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`http://localhost:8000/cities/${id}`);
      const data = await res.json();
      setCurrentlySelectedCity(data);
    } catch (err) {
      alert("Error occurring loading data");
    } finally {
      setIsLoading(false);
    }
  }

  async function DeleteCity(id) {
    try {
      setIsLoading(true);
      await fetch(`http://localhost:8000/cities/${id}`, {
        method: "DELETE",
      });
      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch (err) {
      alert("Error occurring loading data");
    } finally {
      setIsLoading(false);
    }
  }

  async function createNewCity(newCity) {
    try {
      setIsLoading(true);
      const res = await fetch(`http://localhost:8000/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setCities((cities) => [...cities, data]);
    } catch (err) {
      alert("Error occurring creating data");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentSelectedCity,
        fetchCurrentlySelectedCity,
        createNewCity,
        DeleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
function useCities() {
  const citiesValue = useContext(CitiesContext);
  if (citiesValue === undefined)
    throw new Error("Accessing Value Outside Context");
  return citiesValue;
}

export { CitiesProvider, useCities };
