import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const CountryInfo = () => {
  const { slug } = useParams();
  const [singleData, setSingleDa] = useState(null);

  useEffect(() => {
    axios
      .get(`https://frontend-mentor-apis-6efy.onrender.com/countries/${slug}`)
      .then((response) => {
        setSingleDa(response.data);
      });
  }, [slug]);

  console.log(singleData);

  return (
    <>
      <Header />
      {singleData ? (
        <>
          <div className="flex flex-col p-6  min-h-screen items-center">
            <div className="w-full max-w-4xl mb-6">
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                <Link to="/"> ← Back</Link>
              </button>
            </div>

            <div className="flex flex-col md:flex-row shadow-md p-6 rounded-lg w-full max-w-5xl h-auto md:h-96 items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <img
                  src={singleData.flags.svg}
                  alt="Belgium Flag"
                  className="w-full h-48 object-cover rounded-lg shadow-sm"
                />
              </div>

              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-4">
                  {singleData.name.common}
                </h1>
                <ul className="text-base space-y-2 flex flex-col md:flex-row justify-between">
                  <div className="left">
                    <li>
                      <strong>Native Name:</strong> {singleData.name.nativeName}
                    </li>
                    <li>
                      <strong>Population:</strong>
                      {singleData.population.toLocaleString("en-US")}
                    </li>
                    <li>
                      <strong>Region:</strong> {singleData.region}
                    </li>
                    <li>
                      <strong>Sub Region:</strong> {singleData.subregion}
                    </li>
                    <li>
                      <strong>Capital:</strong> {singleData.capital}
                    </li>
                  </div>
                  <div className="right">
                    <li>
                      <strong>Top Level Domain:</strong> {singleData.cioc}
                    </li>
                    <li>
                      <strong>Currencies:</strong> {singleData.currencies}
                    </li>
                    <li>
                      <strong>Languages:</strong>{" "}
                      {singleData.languages.join(", ")}
                    </li>
                  </div>
                </ul>

                <div className="mt-6">
                  <strong>Border Countries:</strong>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {singleData.borders.map((data) => (
                      <Link
                        key={data._id}
                        to={`/info/${data.slug}`}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm shadow-sm"
                      >
                        {data.common}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center mt-20">
          <span className="loading loading-spinner loading-lg "></span>
        </div>
      )}
    </>
  );
};

export default CountryInfo;
