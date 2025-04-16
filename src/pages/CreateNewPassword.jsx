import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Button } from "@/components/ui/button"; // Ensure this path is correct
import reset_pass_banner from "../assets/Reg_Img/reset_password_banner.png";
import logo from "../assets/logoBottom.png";
import PasswordStrengthBar from "react-password-strength-bar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import useAxios from "@/components/Hooks/Api/UseAxios";

const CreateNewPassword = () => {
  const navigate = useNavigate();
  const Axiosinstance = useAxios();
  const location = useLocation();
  const email = location?.state?.email;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const {register,handleSubmit, watch,formState: { errors, isSubmitting }} = useForm();
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible((prevState) => !prevState);
  };

  const password = watch("password");
  const onSubmit = async (data) => {
    console.log(data);
    try {
      let response = await Axiosinstance.post("reset-password", {
        email: email,
        password: data.password,
        password_confirmation: data.password_confirmation
      }, {
        headers: {
          Accept: "application/json",
        }
      });
      
      console.log(response);
      navigate("/auth/passwordSetSuccessfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to reset password.");
    }
  };

  return (
    <div className="lg:flex w-full min-h-screen">
      <Toaster />
      {/* Left Side */}
      <div className="lg:w-[50%] sm:py-12 md:py-0">
        <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-[30px] lg:text-[40px] tracking-tight font-extrabold text-center text-DarkGray">
            Create New Password
          </h2>
          <p className="md:w-[340px] mx-auto text-Gray text-[14px] lg:text-lg font-roboto text-center">
            Enter your new password below to complete the reset process
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 mt-10  w-full"
          >
            {/* New Password */}
            <div className="w-full relative">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-DarkGray"
              >
                New Password
              </label>
              <input
                type={isPasswordVisible ? "text" : "password"}
                className="bg-gray-50 border border-gray-300 text-Gray pr-12 text-sm rounded-lg block w-full p-2.5"

                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}/,
                    message:
                      "Password must be 6-15 characters long, include at least one uppercase letter, one lowercase letter, and one number.",
                  },
                })}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-9 right-4"
              >
                {isPasswordVisible ? <FiEye className="text-2xl" /> : <FiEyeOff className="text-2xl" />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="w-full relative">
              <label
                htmlFor="confirm_password"
                className="block mb-2 text-sm font-medium text-DarkGray"
              >
                Confirm Password
              </label>
              <input
                type={isConfirmPasswordVisible ? "text" : "password"}
                className="bg-gray-50 border border-gray-300 text-Gray pr-12 text-sm rounded-lg block w-full p-2.5"
                {...register("password_confirmation", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute top-9 right-4"
              >
                {isConfirmPasswordVisible ? (
                  <FiEye className="text-2xl" />
                ) : (
                  <FiEyeOff className="text-2xl" />
                )}
              </button>
            </div>

            {/* Password Strength Bar */}
            <div className="w-full mt-2">
              <PasswordStrengthBar className="strengthBar" password={password} />
            </div>

            {/* Password Requirements */}
            <div>

              <p className="text-Gray text-[14px] lg:text-base font-roboto">
                Your password must be at least 8 characters, including uppercase
                and lowercase <span className="text-red-500">*</span>
              </p>
              <p className="text-Gray text-[14px] lg:text-base font-roboto">
                It should contain a number and a special character{" "}
                <span className="text-red-500">*</span>
              </p>
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                className="bg-primaryGreen sm:w-full mt-10 text-white sm:px-24 sm:py-6"
                variant="outline"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Reset Password"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side */}
      <div className="lg:w-[50%] hidden lg:block bg-[#1A2A3A] min-h-screen relative">
        <div className="p-16">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <img
          src={reset_pass_banner}
          alt="Reset Password Banner"
          className="max-w-full max-h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CreateNewPassword;
