import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

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
          />
        ))}
      </div>
    </>
  );
}
const ProductCard = ({ image, name, price }) => {
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
        <button className="mt-4  border-black border text-black font-semibold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductList;
