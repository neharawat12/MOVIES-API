"use client";

import { useEffect, useState } from "react";

const Movies = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const fetchMovies = async () => {
      try {
        const res = await fetch("https://ghibliapi.vercel.app/films");
        const data = await res.json();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();

  }, []);

  return (
    <div className="bg-black     text-white py-12 px-10">
      
      <h2 className="text-2xl font-bold mb-8">
         Movies Here
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">

        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300"
          >

            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-[350px] object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg">
                {movie.title}
              </h3>
              {/* <p className="text-gray-400 text-sm">
                {movie.release_date} • ⭐ {movie.rt_score}
              </p> */}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Movies;