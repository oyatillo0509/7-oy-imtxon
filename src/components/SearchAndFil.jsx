import axios from "axios";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllData } from "../features/data";
import useFetchData from "../hooks/useFetchData";

const SearchAndFilter = () => {
  const [loading, setLoading] = useState(null);
  const [selectData, setSelectData] = useState(null);
  const { allData } = useSelector((store) => store.data);
  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://frontend-mentor-apis-6efy.onrender.com/countries?search=${e.target.value}`
      )
      .then((res) => {
        dispatch(setAllData(res.data));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const onChangeSelect = useCallback(
    async (e) => {
      e.preventDefault();
      const selectedRegion = e.target.value;

      try {
        setLoading(true);
        const res = await axios.get(
          "https://frontend-mentor-apis-6efy.onrender.com/countries"
        );
        const data = res.data.data;

        const filteredData =
          selectedRegion === "all"
            ? data
            : data.filter((item) => item.region === selectedRegion);

        dispatch(setAllData({ data: filteredData }));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    [dispatch] 
  );

  return (
    <div className="max-w-screen-xl mx-auto px-20 mt-12">
      <div className="flex justify-between items-center space-x-4">
        <div className="relative flex-1">
          <input
            onChange={onChangeInput}
            type="text"
            placeholder="Search for a country..."
            className="w-3/12 p-2 pl-10 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
          <svg
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 21l-4.35-4.35m-3.65 1.85A7.5 7.5 0 1118 10.5a7.5 7.5 0 01-5.5 2.5z"></path>
          </svg>
        </div>
        {loading && (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
        <div>
          <select
            onChange={onChangeSelect}
            className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="all">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
