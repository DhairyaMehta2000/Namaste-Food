import DetailedMenu from "./DetailedMenu";
import { useState } from "react";
// Rendering out the food in menu

const MenuItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  //   console.log(props);
  return (
    <div className="w-8/12 mx-auto justify-between">
      <div
        className="border rounded my-2 cursor-pointer "
        onClick={toggleAccordion}
      >
        <button className="w-full text-left px-4 py-2 font-semibold focus:outline-none">
          {props.data.card.card.title}
          {isOpen?<p className="float-right">⬆️</p>:<p className="float-right">⬇️</p>}
          
        </button>
        
        {isOpen && (
          <div className="px-4 py-2">
            {props.data.card.card.itemCards.map((item, index) => {
              return <DetailedMenu key={index} data={item} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default MenuItem;
