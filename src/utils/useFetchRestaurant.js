import { useState, useEffect } from "react";
const useFetchRestaurant = (id) => {
  // setting the menu from swiggy api
  const [menu, setMenu] = useState([]);

  // setting the other details such as name, costForTwo from swiggy api
  const [details, setDetails] = useState([]);

  // fetching the menu from api
  useEffect(() => {
    fetchMenu();
    fetchDetails();
  }, []);

  const fetchMenu = async () => {
    // fetching the specific restaurant
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        id
    );
    const jsonData = await data.json();

    // I dont know how the swiggy api is going to give me data. somtimes it will give menu on cards[1]
    // and sometimes it will give me data on cards[2] that is why this if statement exists.
    // wherever the data will contain itemCards i am taking that cards[i]
    if (
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards
    ) {
      setMenu(
        jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
          ?.card?.card?.itemCards
      );
    } else {
      setMenu(
        jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
          ?.card?.card?.itemCards
      );
    }
  };
  const fetchDetails = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        id
    );
    const jsonData = await data.json();
    // setting the rest of the details of restaurant
    setDetails(jsonData?.data?.cards[0].card.card.info);
    // console.log(jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
    // console.log("setDetails = " + jsonData.data.cards[0].card.card.info);
  };

  return [menu, details];
};

export default useFetchRestaurant;
