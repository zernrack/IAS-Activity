import { FormEvent, useState } from "react";
import InputField from "./InputField";
import { toast } from "react-hot-toast";
const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [isLogged, setIsLogged] = useState<boolean>(
    localStorage.getItem("loggedIn") === "true"
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (loginData.username === "user" && loginData.password === "password") {
      localStorage.setItem("loggedIn", "true");
      setIsLogged(true);
      console.log("submit", isLogged);

      window.open("https://www.pup.edu.ph/", "_blank");

      return toast.success("User Authenticated!")
    } 

    return toast.error("Invalid Credentials!")
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen -mt-10">
        <div className="z-50 flex overflow-hidden bg-gray-300 rounded-lg">
          <div className="flex items-center justify-center w-full bg-gray-100 min-w-80 sm:min-w-96">
            <div className="w-full max-w-md p-6">
              <h1 className="mb-6 text-3xl font-semibold text-center text-black">
                Login
              </h1>
              <h1 className="mb-6 text-sm font-semibold text-center text-gray-500">
                Input Fields to Authenticate
              </h1>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <InputField
                  label="Username"
                  id="username"
                  name="username"
                  value={loginData.username}
                  onChange={handleChange}
                />

                <InputField
                  label="Password"
                  id="password"
                  name="password"
                  type="password"
                  value={loginData.password}
                  onChange={handleChange}
                />
                <div>
                  <button
                    type="submit"
                    className="w-full p-2 text-white transition-colors duration-300 bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50 disabled:cursor-not-allowed "
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
