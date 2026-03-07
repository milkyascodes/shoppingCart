import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLoginPage, setIsLoginPage] = useState(false);
  const { items: cartItems } = useSelector((state) => state.cart);

  const isLoggedIn = false;

  return (
    <nav className="flex items-center justify-between w-full mx-auto max-w-lg mb-10">
      <h1 className="text-3xl font-bold">SHOPPERS</h1>
      {isLoggedIn ? (
        <div className="flex items-center gap-5">
          <Link to="/">Home</Link>

          <Link to="/cart">
            <div className="relative">
              <button className="p-2  rounded"> 🛒</button>

              {cartItems.length !== 0 && (
                <span className="absolute transition-all -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </div>
          </Link>
        </div>
      ) : (
        <div>
          <Link
            onClick={() => setIsLoginPage((state) => !state)}
            to={!isLoginPage ? "/login" : "/"}
          >
            {isLoginPage ? "Create New Account" : "Login"}
          </Link>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
