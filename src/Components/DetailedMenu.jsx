import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const SimpleAccordion = (props) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    // console.log(item)
  };
  const imageId = props.data.card.info.imageId;
  return (
    <div className="px-4 py-2">
      <div className="flex items-center mb-4 border-b-2">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            imageId
          }
          alt="Image"
          className="w-20 h-20 rounded-full mr-4"
        />
        <div>
          <p className="font-semibold text-lg">{props.data.card.info.name}</p>
          <span className="text-gray-600 text-xs">
            {props.data.card.info.description}
          </span>
        </div>
        <button
          onClick={() => handleAddItem(props.data)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default SimpleAccordion;
