import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    items: cartItems,
    tempItems,
    totalPrice,
  } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  return (
    <div className="w-full mx-auto max-w-lg">
      <div className="flex justify-between items-center mb-10">
        <button
          onClick={() => navigate("/")}
          className="  text-black rounded-md"
        >
          ← Continue Shopping
        </button>
        <h1>
          Total: <span className="font-bold">$ {totalPrice.toFixed(2)}</span>
        </h1>
      </div>

      {cartItems.map((item) => (
        <div className="flex items-center bg-white  overflow-hidden mb-4 p-4">
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
            <p className="text-gray-500 mt-1">{item.quantity} PCS</p>
          </div>

          {/* Remove / Action Buttons */}
          <div className="flex justify-between flex-col  gap-4">
            <div className="flex justify-end gap-4">
              <button className="bg-white  text-black border border-black/5 shadow-sm  text-sm  hover:shadow-lg  font-semibold py-1 px-2 rounded">
                +
              </button>
              <button className="bg-white text-black  border border-black/5 shadow-sm  text-sm  hover:shadow-lg  font-semibold py-1 px-2 rounded">
                -
              </button>
            </div>
            <button className="bg-white text-black  border border-black/5 shadow-sm  text-sm  hover:shadow-lg  font-semibold  p-2 rounded">
              Remove
            </button>
          </div>
        </div>
      ))}

      <button className=" w-full py-2 px-4 font-bold bg-green-400 text-white rounded-md">
        Check out
      </button>
    </div>
  );
}
export default Cart;
