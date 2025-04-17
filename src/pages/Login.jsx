import { Link, useNavigate } from "react-router-dom";
import reg_banner from "../assets/Reg_Img/reg_Banner.png";
import logo from "../assets/logoBottom.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxios from "@/components/Hooks/Api/UseAxios";
import { FaSpinner } from "react-icons/fa";
import { useRole } from "./Context/RoleContext";

const Login = () => {
  const { setRole } = useRole();
  console.log(setRole);
  const navigate = useNavigate();
  const Axiosinstance = useAxios();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const onSubmit = async (data) => {
    try {
      const response = await Axiosinstance.post("login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);

      if (response.status === 200 && response.data?.token) {
        const { token, role } = response.data;
        localStorage.setItem("authToken", JSON.stringify(token));
        localStorage.setItem("role", JSON.stringify(role));
        setRole(role);
        if (role === "smallbusiness") {
          navigate("/dashboard/smallBusiness/timeline");
        } else if (role === "consultant") {
          navigate("/dashboard/consultancyFirms/timeline");
        } else {
          toast.error("Unknown role, cannot redirect.");
          console.error("Unknown role:", role);
        }

        toast.success("Login successful");
        reset();
      } else {
        toast.error("Unexpected response structure.");
        console.error("Unexpected Response:", response);
      }
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="lg:flex w-full min-h-screen sm:py-12 md:py-0 ">
      <Toaster />
      {/* Left Side */}
      <div className="flex lg:w-[50%] min-h-screen justify-center items-center">
        <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-3xl sm:text-[40px] tracking-tight font-extrabold text-center text-gray-900">
            Login
          </h2>
          <p className="mb-12 text-[14px] text-center sm:text-lg text-Gray font-roboto">
            Welcome Back, Please Enter your Details to Log In.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSubmit(onSubmit)();
              }
            }}
            className="space-y-4 w-full"
          >
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-DarkGray"
              >
                User Email
              </label>
              <input
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-Gray text-sm rounded-md block w-full p-2.5"
                {...register("email", { required: "User mail is required" })}
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="flex justify-between gap-4 w-full">
              <div className="w-full relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-DarkGray"
                >
                  Password
                </label>
                <input
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-Gray pr-12  text-sm rounded-md  block w-full p-2.5 "
                  type={isPasswordVisible ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}

                <button type="button" onClick={togglePasswordVisibility}>
                  {isPasswordVisible ? (
                    <FiEye className="sm:text-2xl absolute top-10 sm:top-9 right-4" />
                  ) : (
                    <FiEyeOff className="sm:text-2xl absolute top-10 sm:top-9 right-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5 w-full justify-between">
                <div className="flex items-center gap-2">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-5 h-5 border border-gray-300 bg-gray-50"
                  />
                  <label
                    htmlFor="remember"
                    className="text-[14px] sm:text-lg font-medium text-Gray"
                  >
                    Remember me
                  </label>
                </div>
                <div>
                  <Link
                    to="/auth/resetPassword"
                    className="text-[14px] text-Gray sm:text-lg font-semibold"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                className="sm:w-full sm:text-lg bg-primaryGreen text-white sm:px-24 sm:py-6 "
                variant="outline"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" /> Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </Button>
              <p className="text-[14px] sm:text-lg text-gray-600 font-bold mt-4">
                Don’t have an account?{" "}
                <Link to="/auth/registration" className="text-Blue ">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      {/* Right Side */}
      <div className="md:w-[50%] hidden lg:block bg-[#1A2A3A]  h-screen">
        <div className="p-16">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="mt-20">
          <img
            src={reg_banner}
            alt="Registration Banner"
            className="object-contain max-w-full max-h-full  "
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
