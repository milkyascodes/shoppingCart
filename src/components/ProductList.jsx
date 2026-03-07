import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/shoppingCart/productSlice";
import { addToCart } from "../features/shoppingCart/cartSlice";

function ProductList() {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      console.log("idle");

      dispatch(fetchProducts());
    }
  }, [status]);

  if (status === "loading") {
    return <p>Loading..</p>;
  } else if (status === "failed") {
    return <p>Failed to load products.</p>;
  }

  return (
    <>
      <h1 className="mb-10">Product List</h1>
      <div className="flex items-center justify-center flex-wrap gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.title}
            price={product.price}
            dispatch={() => dispatch(addToCart(product))}
          />
        ))}
      </div>
    </>
  );
}
const ProductCard = ({ image, name, price, dispatch }) => {
  return (
    <div className=" bg-white border border-black/5 shadow-sm w-[250px] rounded-lg overflow-hidden py-4">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-contain text-center "
      />
      <div className="p-4 text-center">
        <h2 className="font-bold font-cinzel text-gray-800">
          {name.length > 20 ? `${name.slice(0, 15)}...` : name}
        </h2>
        <p className="mt-2 text-gray-600 text-lg">${price}</p>
        <button
          onClick={dispatch}
          className="mt-4  border-black border text-black font-semibold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductList;
