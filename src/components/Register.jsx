import { useState } from "react";
import FormField from "./FormField";
import { useDispatch } from "react-redux";
import { register } from "../features/authentication/authSlice";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  function handleOnsubmit(e) {
    e.preventDefault();
    console.log("form", form);

    dispatch(register(form)).then((action) => {
      localStorage.setItem("accessToken", action.payload.token);
    });
    navigate("/products");
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
          value={form.username}
          onChange={handleChange}
          label="User name"
          type="text"
          name="username"
        />
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
          Register
        </button>
      </form>
    </div>
  );
}
export default Register;
