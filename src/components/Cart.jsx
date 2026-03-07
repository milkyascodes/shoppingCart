import { useSelector } from "react-redux";

function Cart() {
  useSelector((state) => console.log(state.cart));
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <button className=" py-2 px-4 font-bold bg-blue-400 text-white rounded-md">
          check out
        </button>
        <h1 className="py-4">Total: $200</h1>
      </div>
      <div className="flex items-center bg-white  overflow-hidden mb-4 p-4">
        {/* Product Image */}
        <img
          src={"image"}
          alt={"name"}
          className="w-24 h-24 object-cover rounded-md bg-white border border-black/5 shadow-sm"
        />

        {/* Product Info */}
        <div className="flex-1 ml-4">
          <h2 className="text-lg font-semibold font-cinzel text-gray-800">
            {"name"}
          </h2>
          <p className="text-gray-600 mt-1">$ {"price"}</p>
          <p className="text-gray-500 mt-1">{"2"} PCS</p>
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
    </div>
  );
}
export default Cart;
