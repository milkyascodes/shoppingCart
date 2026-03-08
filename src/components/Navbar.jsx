import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../features/authentication/authSlice";

function Navbar() {
  const auth = useSelector((state) => state.auth);
  const { items: cartItems } = useSelector((state) => state.cart);
  const location = useLocation();
  const dispatch = useDispatch();

  function getLinkInfo(path) {
    switch (path) {
      case "/":
        return { to: "/register", text: "Create New Account" };
      case "/login":
        return { to: "/register", text: "Create New Account" };
      case "/register":
        return { to: "/login", text: "Login" };
      default:
        return { to: "/register", text: "Create New Account" };
    }
  }

  function AvatarMenu({ user, logout }) {
    const [open, setOpen] = useState(false);

    return (
      <div className="relative">
        {/* Avatar */}
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white font-bold"
        >
          {user.username?.charAt(0).toUpperCase()}
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border">
            <div className="px-4 py-2 border-b text-sm text-gray-600">
              {user?.name}
            </div>

            {/* <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              Profile
            </button>

            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              Orders
            </button> */}

            <button
              onClick={logout}
              className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }

  const { to, text } = getLinkInfo(location.pathname);

  useEffect(() => {
    getLinkInfo(location);
  }, [location]);

  return (
    <nav className="flex items-center justify-between w-full mx-auto max-w-lg mb-10">
      <Link className="text-3xl font-bold" to="/">
        Shoppers
      </Link>

      {!auth.currentUser ? (
        <div>
          <Link to={to}>{text}</Link>
        </div>
      ) : (
        <div className="flex items-center gap-5">
          <Link to="/products"> Products</Link>
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
          <AvatarMenu
            user={auth.currentUser}
            logout={() => {
              dispatch(logout());
              console.log("log", logout);
            }}
          />
          {/* .... */}
          {/* <button
            onClick={() => {
              dispatch(logout());
              console.log("log", logout);
            }}
            className=" font-bold"
          >
            Log out
          </button>{" "} */}
        </div>
      )}
    </nav>
  );
}
export default Navbar;
