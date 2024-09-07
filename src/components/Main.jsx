import axios, { all } from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { setAllData } from "../features/data";

const BASE_URL = "https://frontend-mentor-apis-6efy.onrender.com";

// CountryCard component
const CountryCard = ({ country }) => {
  return (
    <Link
      to={`/info/${country.name.slug}`}
      className="w-full max-w-xs rounded-lg shadow-[0px_0px_7px_2px_rgba(0,0,0,0.08)] overflow-hidden transform transition duration-300 hover:scale-105 mx-auto"
    >
      <img
        src={country.flags.png}
        alt={country.flags.alt || `${country.name.common} flag`}
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <h2 className="text-lg font-bold  mb-2">{country.name.common}</h2>
        <p className="text-sm text-gray-700 mb-1">
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
        <p className="text-sm text-gray-700 mb-1">
          <strong>Region:</strong> {country.region}
        </p>
        <p className="text-sm text-gray-700">
          <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
        </p>
      </div>
    </Link>
  );
};

const Main = () => {
  const dispatch = useDispatch();

  const { allData } = useSelector((store) => store.data);
  const { data, loading } = useFetchData("/countries");

  useEffect(() => {
    if (data) {
      dispatch(setAllData(data));
    }
  }, [data]);

  return (
    <div className="max-w-screen-xl mx-auto px-5 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {allData?.data &&
          allData.data.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))}
      </div>
      {loading && (
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default Main;
