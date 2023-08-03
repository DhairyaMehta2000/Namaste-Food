import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchRestaurant from "../utils/useFetchRestaurant";
import MenuDetail from "./MenuDetail";
import MenuItem from "./MenuItem";
// import useFetchRestaurant from '../utils/useFetchRestaurant'
const RestaurantMenu = () => {
  //getting the dynamic id from the route using the useParams Hook
  const { id } = useParams();

  const [menu, details] = useFetchRestaurant(id);
  console.log(menu);
  return (
    <div>
      {/* 2 me se details nikalna hai */}
      {/* rendering the Menu Component and giving the props as details to extract name,etc */}
      <MenuDetail data={details} />
      {/* mapping over the menu cards array and rendering the menu items */}
      {menu.map((item,index) => (
        <MenuItem key={index} data={item} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
