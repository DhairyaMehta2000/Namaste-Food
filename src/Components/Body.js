import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardComponent from "./CardComponent";
import NotFound from "./NotFound";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352156&lng=77.6199608&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();
      const restaurants = jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setRestaurantList(restaurants);
      setFilteredRestaurants(restaurants);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const searchResByName = () => {
    const filteredList = restaurantList.filter((res) =>
      res.info.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredRestaurants(filteredList);
  };

  const filterTopRes = () => {
    const filteredList = restaurantList.filter((res) => res.info.avgRating >= 4);
    setFilteredRestaurants(filteredList);
  };

  const filterByRating = () => {
    const sortedList = [...filteredRestaurants].sort(
      (a, b) => b.info.avgRating - a.info.avgRating
    );
    setFilteredRestaurants(sortedList);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchResByName();
    }
  };

  return (
    <div className="body p-4 md:p-6 lg:p-8">
      <div className="flex flex-wrap justify-center items-center">
        <input
          className="border border-solid rounded-md p-2 mr-2 mb-2"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search Restaurants"
        />
        <button
          className="bg-blue-500 text-white rounded-lg p-2 mr-2 mb-2"
          onClick={searchResByName}
        >
          Search
        </button>
        <button
          className="bg-blue-500 text-white rounded-lg p-2 mr-2 mb-2"
          onClick={filterTopRes}
        >
          Filter Top Restaurants
        </button>
        <button
          className="bg-blue-500 text-white rounded-lg p-2 mb-2"
          onClick={filterByRating}
        >
          Sort By Rating
        </button>
      </div>

      {isLoading ? (
        // Show shimmer UI while data is loading
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {Array.from({ length: 8 }).map((_, index) => (
            <Shimmer key={index} />
          ))}
        </div>
      ) : filteredRestaurants.length === 0 ? (
        // Render the NotFound component when no restaurants found
        <NotFound />
      ) : (
        // Render the list of cards when restaurants are found
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              style={{ textDecoration: "none" }}
              to={"/restaurant/" + restaurant.info.id}
            >
              <CardComponent data={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
