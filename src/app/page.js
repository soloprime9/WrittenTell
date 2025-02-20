"use client";
import React, { useState } from "react";

const movies = [
  { title: "Movie 1", image: "/1.jpg", category: "Trending" },
  { title: "Movie 2", image: "/2.jpg", category: "Latest" },
  { title: "Movie 3", image: "/3.jpg", category: "Popular" },
  { title: "Movie 4", image: "/4.jpg", category: "Trending" },
];

const App = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredMovies = movies.filter(
    (movie) =>
      (filter === "All" || movie.category === filter) &&
      movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="p-4 bg-gray-800 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Jav.Guru Clone</h1>
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded bg-gray-700 text-white outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
      </nav>

      {/* Category Filter */}
      <div className="flex justify-center space-x-4 my-4">
        {["All", "Trending", "Latest", "Popular"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded ${
              filter === category ? "bg-blue-500" : "bg-gray-700"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded">
            <img src={movie.image} alt={movie.title} className="w-full rounded" />
            <h2 className="mt-2 text-center font-semibold">{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
