import { Link, useNavigate } from "react-router-dom";
import reg_banner from "../assets/Reg_Img/reg_Banner.png";
import logo from "../assets/logoBottom.png";
import { Button } from "@/components/ui/button";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxios from "@/components/Hooks/Api/UseAxios";
import { FaChevronDown, FaSpinner } from "react-icons/fa";
import PasswordStrengthBar from "react-password-strength-bar";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import useFetchData from "@/components/Hooks/Api/UseFetchData";

const Registration = () => {
  const navigate = useNavigate();
  const Axiosinstance = useAxios();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const { data: termsandconditions } = useFetchData("/termsand-conditions");
  const { data: privacypolicy } = useFetchData("/privacy-policy");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible((prevState) => !prevState);
  };

  const onSubmit = async (data) => {
    console.log(data);

    try {
      let response = await Axiosinstance.post("/register", data, {
        headers: {
          Accept: "application/json",
        },
      });
      console.log(response);
      toast.success("Registration successful!");
      reset();
      navigate("/auth/verify", { state: { email: data.email } });
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleClose = () => {
    setShowTerms(false);
    setShowPrivacy(false);
  };

  const password = watch("password");
  return (
    <div className="lg:flex w-full min-h-screen ">
      <Toaster />
      <div className="lg:w-[50%] min-h-screen">
        <div className="py-6 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-2 lg:mb-4 font-roboto text-3xl sm:text-[40px] tracking-tight font-extrabold text-center text-DarkGray">
            Sign up
          </h2>
          <p className="mb-8 lg:mb-12 font-roboto text-center text-Gray sm:text-lg">
            Lets have these fields.
          </p>

          <form
            action="#"
            className="space-y-4 w-full "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="profileType"
                className="block text-sm mb-2 font-medium text-DarkGray"
              >
                Join As
              </label>
              <div className="relative">
                <select
                  {...register("role", {
                    required: "Type of Cpmpany Name is required",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5"
                >
                  <option value=""></option>
                  <option value="smallbusiness">Small Business</option>
                  <option value="consultant">Consultant</option>
                </select>
                {errors.role && (
                  <p className=" text-sm text-red-600">{errors.role.message}</p>
                )}
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
              </div>
            </div>

            <div>
              <label
                htmlFor="companyType"
                className="block text-sm mb-2 font-medium text-DarkGray"
              >
                Type of Company
              </label>
              <div className="relative">
                <select
                  {...register("company_type", {
                    required: "Type of Company Name is required",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5 pr-10"
                >
                  <option value=""></option>
                  <option value="small">small</option>
                  <option value="medium">medium</option>
                  <option value="big">big</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
              </div>
            </div>
            <div>
              <label
                htmlFor="companyName"
                className="block mb-2 text-sm font-medium text-DarkGray"
              >
                Company Name
              </label>
              <input
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-Gray text-sm rounded-lg block w-full p-2.5"
                {...register("name", {
                  required: "Cpmpany Name is required",
                })}
              />
              {errors.company_name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.company_name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-DarkGray"
              >
                Email Address
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-Gray text-sm rounded-lg block w-full p-2.5"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* <div className="lg:flex justify-between gap-6 w-full">
              <div className="w-full relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-DarkGray"
                >
                  Password
                </label>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  className="bg-gray-50 border border-gray-300 text-Gray pr-12 text-sm rounded-lg block w-full p-2.5"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
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
                  className="absolute top-10 sm:top-9 right-4"
                >
                  {isPasswordVisible ? (
                    <FiEye className="sm:text-2xl" />
                  ) : (
                    <FiEyeOff className="sm:text-2xl" />
                  )}
                </button>
              </div>

              <div className="w-full relative mt-4 lg:mt-0">
                <label
                  htmlFor="confirmPassword"
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
                {errors.password_confirmation && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.password_confirmation.message}
                  </p>
                )}
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute top-10 sm:top-9 right-4"
                >
                  {isConfirmPasswordVisible ? (
                    <FiEye className="sm:text-2xl" />
                  ) : (
                    <FiEyeOff className="sm:text-2xl" />
                  )}
                </button>
              </div>
            </div>

           

            <p className="text-Gray text-[14px] lg:text-base">
              Your password must be 8 characters, contain upper and lowercase
              letters, <span className="text-red-500">*</span>
            </p>
            <p className="text-Gray text-[14px] lg:text-base">
              Contain a number and a special character{" "}
              <span className="text-red-500">*</span>
            </p> */}

            <div className="w-full relative">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-DarkGray"
              >
                Password
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
                {isPasswordVisible ? (
                  <FiEye className="text-2xl" />
                ) : (
                  <FiEyeOff className="text-2xl" />
                )}
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
              <PasswordStrengthBar
                className="strengthBar"
                password={password}
              />
            </div>

            {/* Password Requirements */}
            <div>
              <p className="text-Gray text-[14px] lg:text-base font-roboto">
                Your password must be at least 8 characters, contain uppercase
                and lowercase letters, number and special character.
              </p>
              {/* <p className="text-Gray text-[14px] lg:text-base font-roboto">
                It should contain a number and a special character{" "}
                <span className="text-red-500">*</span>
              </p> */}
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  {...register("isAccept", {
                    required: "Cpmpany Name is required",
                  })}
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 bg-gray-50"
                />
              </div>
              <div>
                <label
                  htmlFor="terms"
                  className="ms-2 text-[14px] lg:text-base font-medium text-Gray font-poppins"
                >
                  I hereby confirm and accept the{" "}
                  <button
                    type="button"
                    className="text-Blue hover:underline"
                    onClick={() => setShowTerms(true)}
                  >
                    terms and conditions
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    className="text-Blue hover:underline"
                    onClick={() => setShowPrivacy(true)}
                  >
                    Privacy Policy.
                  </button>{" "}
                  I confirm that I am over 18 years of age.
                </label>

                {/* Modal Component */}
                <AnimatePresence>
                  {(showTerms || showPrivacy) && (
                    <motion.div
                      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                      >
                        <h2 className="text-xl font-semibold pb-5 border-b-2 border-black">
                          {showTerms
                            ? "Terms and Conditions"
                            : "Privacy Policy"}
                        </h2>

                        <div className="text-sm font-roboto text-gray-600 py-3">
                          <p>
                            {showTerms
                              ? termsandconditions?.data?.description ||
                                "No terms available."
                              : privacypolicy?.data?.description ||
                                "No privacy policy available."}
                          </p>
                        </div>

                        <button
                          onClick={handleClose}
                          className="absolute top-5 right-5 text-gray-500 hover:text-red-500 text-lg"
                        >
                          <RxCross2 className="size-[20px] font-bold" />
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="text-center">
              <Button
                type="submit"
                className="bg-primaryGreen lg:text-lg text-white sm:px-24 sm:py-6"
                variant="outline"
                disabled={isSubmitting || errors?.isAccept?.message}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    Signing up...
                  </>
                ) : (
                  "Sign up"
                )}
              </Button>
              <p className="text-[14px] lg:text-lg text-Gray font-bold mt-4">
                Already have an account?{" "}
                <Link
                  to="/dashboard/smallBusiness/timeline"
                  className="text-Blue"
                >
                  Log In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      {/* Right side content */}
      <div className="md:w-[50%] hidden lg:block bg-[#1A2A3A] min-h-screen">
        <div className="p-16">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="mt-20 w-full ">
          <img
            src={reg_banner}
            alt="Registration Banner"
            className="object-contain max-w-screen"
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;
