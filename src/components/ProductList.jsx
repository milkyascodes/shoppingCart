function ProductList() {
  const products = [
    {
      id: 1,
      name: "Stylish Shoes",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1606813904304-3b182c25c719?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Classic Watch",
      price: 149.99,
      image:
        "https://images.unsplash.com/photo-1611078489740-5a2cd56f3b08?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Leather Bag",
      price: 120.0,
      image:
        "https://images.unsplash.com/photo-1580910051070-09ed5ee10850?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Sunglasses",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=500&q=80",
    },
  ];
  return (
    <>
      <h1 className="mb-10">Product List</h1>
      <div className="flex items-center justify-center flex-wrap gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}
const ProductCard = ({ image, name, price }) => {
  return (
    <div className="w-[250px] rounded-lg overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-contain text-center "
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold font-cinzel text-gray-800">{name}</h2>
        <p className="mt-2 text-gray-600 text-lg">${price}</p>
        <button className="mt-4  bg-blue-400 hover:bg-blue-300 text-white font-semibold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductList;
