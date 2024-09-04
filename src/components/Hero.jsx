import React, { useEffect } from "react";

function Hero() {
  useEffect(() => {
    // Add any side effects or data fetching logic here if needed
  }, []);

  // Array to hold movie items
  const movieItems = Array(7).fill({
    title: "Beyond Earth",
    year: "2019",
    type: "Movie",
    rating: "PG",
    imgSrc: "https://picsum.photos/700/300",
  });

  return (
    <div className="flex flex-col gap-6">
      <h2 className="mt-[34px] ml-9 w-[122px] h-10 font-normal text-3xl">
        Trending
      </h2>

      <div className="carousel rounded-box container flex gap-4 ml-9 max-w-[1280px]">
        {movieItems.map((item, index) => (
          <div key={index} className="carousel-item">
            <div className="wrappers w-[420px] h-[200px] relative bg-gray-800 rounded-xl overflow-hidden">
              <img
                src={item.imgSrc}
                className="w-full h-full object-cover opacity-70"
                alt={item.title}
              />
              <div className="absolute top-2 right-2 bg-gray-700 p-2 rounded-full">
                <i className="fa-regular fa-bookmark text-white"></i>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm">
                  {item.year} • {item.type} • {item.rating}
                </p>
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
