import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full mx-auto max-w-lg mb-10">
      <h1 className="text-3xl font-bold">SHOPPERS</h1>
      <div className="flex items-center gap-5">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}
export default Navbar;
