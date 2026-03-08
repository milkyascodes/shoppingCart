import { useState } from "react";
import FormField from "./FormField";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleOnsubmit(e) {
    e.preventDefault();
    console.log({ email, password });
  }
  return (
    <div className="w-full mx-auto max-w-sm">
      <form onSubmit={handleOnsubmit} className="flex flex-col gap-4">
        <FormField
          onSend={setPassword}
          label="Email"
          type="text"
          name="email"
        />
        <FormField
          onSend={setEmail}
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
