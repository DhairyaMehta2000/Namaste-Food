if (filteredRestaurants.length === 0) {
    // Show shimmer UI while data is loading
    return (
      <>
        <div className="body">
          {/* Shimmer UI */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
            {Array.from({ length: 8 }).map((_, index) => (
              <Shimmer key={index} />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
      <div className="body p-4 md:p-6 lg:p-8">
        <div className="flex flex-wrap justify-center items-center">
          {/* search bar */}
          <input
            className="border border-solid rounded-md p-2 mr-2 mb-2"
            type="text"
            value={value}
            
          onKeyPress={handleKeyPress}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="Search Restaurants"
          />
          {/* search button */}
          <button
            className="bg-blue-500 text-white rounded-lg p-2 mr-2 mb-2"
            onClick={searchResByName}
          >
            Search
          </button>
          {/* filter by top restauants button */}
          <button
            className="bg-blue-500 text-white rounded-lg p-2 mr-2 mb-2"
            onClick={filterTopRes}
          >
            Filter Top Restaurants
          </button>
          {/* filter by rating button */}
          <button
            className="bg-blue-500 text-white rounded-lg p-2 mb-2"
            onClick={filterByRating}
          >
            Filter By Rating
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center flex-wrap">
          {/* mapping over the state and rendering the state */}
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
      </div>
    </>
    );
  }
};




--------------------------------

return (
    <div className="body p-4 md:p-6 lg:p-8">
      <div className="flex flex-wrap justify-center items-center">
        <input
          className="border border-solid rounded-md p-2 mr-2 mb-2"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
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
          Filter By Rating
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center flex-wrap">
        {/* Conditional rendering based on the state of filteredRestaurants and restaurantList */}
        {restaurantList.length === 0 ? (
          // Show shimmer UI while data is loading
          <>
        <div className="body">
          {/* Shimmer UI */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  w-full justify-center">
            {Array.from({ length: 30 }).map((_, index) => (
              <Shimmer key={index} />
            ))}
          </div>
        </div>
      </>
        ) : filteredRestaurants.length === 0 ? (
          // Render the EmptyList Component when filteredRestaurants is empty
          <NotFound />
        ) : (
          // Render the list of cards when filteredRestaurants is not empty
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              style={{ textDecoration: "none" }}
              to={"/restaurant/" + restaurant.info.id}
            >
              <CardComponent data={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};