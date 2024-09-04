import React from "react";

const movieData = [
  {
    year: "2019",
    rating: "PG",
    title: "The Great Lands",
    imgSrc: "https://picsum.photos/280/174",
  },
  {
    year: "2019",
    rating: "PG",
    title: "The Great Lands",
    imgSrc: "https://picsum.photos/280/174",
  },
  {
    year: "2019",
    rating: "PG",
    title: "The Great Lands",
    imgSrc: "https://picsum.photos/280/174",
  },
  {
    year: "2019",
    rating: "PG",
    title: "The Great Lands",
    imgSrc: "https://picsum.photos/280/174",
  },
  {
    year: "2019",
    rating: "PG",
    title: "The Great Lands",
    imgSrc: "https://picsum.photos/280/174",
  },
  {
    year: "2019",
    rating: "PG",
    title: "The Great Lands",
    imgSrc: "https://picsum.photos/280/174",
  },
  {
    year: "2019",
    rating: "PG",
    title: "The Great Lands",
    imgSrc: "https://picsum.photos/280/174",
  },
  {
    year: "2019",
    rating: "PG",
    title: "The Great Lands",
    imgSrc: "https://picsum.photos/280/174",
  },
];

function Features() {
  return (
    <div className="mb-32 ml-9">
      <h2 className="w-78 text-3xl mt-10">Recommended for you</h2>
      <div className="container mx-auto max-w-[1280px] grid grid-cols-4 gap-12">
        {movieData.map((movie, index) => (
          <div key={index} className="cards relative mt-10 w-80 h-[200px]">
            <span className="absolute left-[275px] top-4 w-10 h-10 bg-gray-700 opacity-[50%] rounded-[50%] cursor-pointer">
              <i className="fa-regular fa-bookmark ml-[13px] mt-[12px] text-white"></i>
            </span>
            <img
              src={movie.imgSrc}
              alt={movie.title}
              className="rounded-xl w-full"
            />
            <h3 className="text-white font-bold">{`${movie.year} Movie ${movie.rating}`}</h3>
            <h3 className="text-white font-bold">{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
