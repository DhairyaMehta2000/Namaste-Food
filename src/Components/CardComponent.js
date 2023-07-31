// import obj from './utils/data';
// import { Card, Container, Row, Col } from "react-bootstrap";
import "./styles.css"
const CardComponent = (props) => {
  // console.log(props);
  const {data} = props;
  

    const {name,cuisines,costForTwo,avgRating,cloudinaryImageId}=data?.info;
  return (
    
    // rendering out Restaurant Card on Home page
    
    <div className="res-card mt-2">
    <img className="w-full h-40 object-cover mb-4"
     src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="card-img">

    </img>

    <div className="res-name">
        <div className="res-title">{name.length<15?name:name.substring(0,20)+"..."}</div>
        <div className="res-food">{cuisines.join(",").length<15? cuisines.join(","): cuisines.join(",").substring(0,35)+"..."}</div>
    </div>

    <div className="res-desc">
      <div className="rating-star">
        <span className="icon-star"></span>
        <span className="rating">{avgRating}</span>
      </div>
        
        <div>•</div>
        <div>{data.info.sla.deliveryTime} mins</div>
        <div>•</div>
        <div>{costForTwo}</div>            
    </div>


</div>
  );
};

export default CardComponent;
