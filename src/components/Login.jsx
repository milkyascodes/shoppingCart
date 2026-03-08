import { useState } from "react";
import FormField from "./FormField";
import { useDispatch } from "react-redux";
import { login } from "../features/authentication/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  function handleOnsubmit(e) {
    e.preventDefault();
    console.log("form", form);

    dispatch(login(form))
      .unwrap() // unwraps the thunk result
      .then((payload) => {
        // This only runs if registration succeeded
        localStorage.setItem("accessToken", payload.token);
        navigate("/products");
      })
      .catch((error) => {
        // This runs if registration failed
        console.log("Login failed:", error);
        alert("Login failed: " + (error.message || JSON.stringify(error)));
      });
  }
  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="w-full mx-auto max-w-sm">
      <form onSubmit={handleOnsubmit} action="" className="flex flex-col gap-4">
        <FormField
          value={form.email}
          onChange={handleChange}
          label="Email"
          type="text"
          name="email"
        />
        <FormField
          value={form.password}
          onChange={handleChange}
          label="Password"
          type="password"
          name="password"
        />
        <button
          type="submit"
          className="mt-8 p-3 bg-black rounded-md text-white hover:bg-black/90"
        >
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
