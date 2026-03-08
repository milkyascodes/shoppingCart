import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../features/shoppingCart/cartSlice";

function Cart() {
  const { items: cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <div className="w-full mx-auto max-w-lg">
      <div className="flex justify-between items-center mb-10">
        <button
          onClick={() => navigate("/products")}
          className=" text-black rounded-md"
        >
          ← Continue Shopping
        </button>
        {cartItems.length !== 0 && (
          <h1>
            Total: <span className="font-bold">$ {totalPrice.toFixed(2)}</span>
          </h1>
        )}
      </div>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center bg-white  overflow-hidden mb-4 p-4"
        >
          {/* Product Image */}
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 object-contain rounded-md"
          />

          {/* Product Info */}
          <div className="flex-1 ml-4">
            <h2 className="text-sm sm:text-lg font-semibold font-cinzel text-gray-800">
              {item.title}
            </h2>
            <p className="text-gray-600 mt-1">$ {item.price}</p>
          </div>

          {/* Remove / Action Buttons */}
          <div className="flex justify-between flex-col  gap-4">
            <div className="flex justify-end gap-2">
              <button
                onClick={() => dispatch(increaseQuantity(item))}
                className="bg-white  text-black border border-black/5 shadow-sm  text-sm  hover:shadow-lg  font-semibold py-1 px-2 rounded"
              >
                +
              </button>
              <p className="text-gray-500 ">{item.quantity}</p>
              <button
                onClick={() => dispatch(decreaseQuantity(item))}
                className="bg-white text-black  border border-black/5 shadow-sm  text-sm  hover:shadow-lg  font-semibold py-1 px-2 rounded"
              >
                -
              </button>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item))}
              className="bg-white text-black  border border-black/5 shadow-sm  text-sm  hover:shadow-lg  font-semibold  p-2 rounded"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {cartItems.length === 0 && (
        <div className="flex flex-col gap-2 mb-10 items-center">
          <p className="font-bold">Your cart is Empty.</p>
          <p>Items you add will be displayed here.</p>
        </div>
      )}
      <button
        disabled={cartItems.length === 0}
        className=" disabled:bg-gray-300 w-full py-2 px-4 font-bold bg-green-400 text-white rounded-md"
      >
        Check out
      </button>
    </div>
  );
}
export default Cart;
