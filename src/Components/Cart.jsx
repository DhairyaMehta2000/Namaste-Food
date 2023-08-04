import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  

  return (
    
    <div>
      {cartItems.length!=0?cartItems.map((item) => (
        <CartItem key={item.card.info.id} data={item} />
      )): <h1 className="text-center font-bold mt-10 justify-center ">Please add Items in the Cart...</h1>
      }
    </div>
  );
};

export default Cart;
