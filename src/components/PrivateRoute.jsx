import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
  const auth = useSelector((state) => state.auth);
  console.log("user is ", auth.currentUser);

  if (!auth.currentUser) {
    return <Navigate to="/" replace />;
  }
  return children;
}
