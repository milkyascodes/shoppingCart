import FormField from "./FormField";

function Login() {
  return (
    <div className="w-full mx-auto max-w-sm">
      <form action="" className="flex flex-col gap-4">
        <FormField label="User name" type="text" name="username" />
        <FormField label="Email" type="text" name="email" />
        <FormField label="Password" type="password" name="password" />
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
