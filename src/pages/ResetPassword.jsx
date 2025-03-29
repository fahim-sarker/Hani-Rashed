import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import reset_pass_banner from "../assets/Reg_Img/reset_password_banner.png";
import logo from "../assets/logoBottom.png";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxios from "@/components/Hooks/Api/UseAxios";

const ResetPassword = () => {
  const navigate = useNavigate();
  const Axiosinstance = useAxios();
  
  const {register,handleSubmit,reset,formState: { errors, isSubmitting }} = useForm();


  const onSubmit = async (data) => {
    console.log(data);
    
    try {
      
      const response = await Axiosinstance.post("forget-password", data, {
        headers: {
          Accept: "application/json",
        },
      });
      if (response.data) {
        console.log(response.data);
        
        toast.success("OTP has been sent to your email");
        reset();
        setTimeout(() => {
          navigate("/auth/verifyOtp", { state: { email: data.email } });
        }, 1000);
      } else {
        toast.error("Email is not registered.");
      }
    } catch (error) {
      console.log(error);
      toast.error("No user found with this email address.");
    }
  };
  

  return (
    <div className="lg:flex w-full min-h-screen sm:py-12 md:py-0">
      {/* Left side */}
      <Toaster />
      <div className="flex lg:w-[50%] min-h-screen justify-center items-center">
        <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-3xl sm:text-[40px] font-extrabold text-center text-DarkGray">
            Reset Password
          </h2>
          <p className="text-sm sm:text-lg text-center text-Gray font-roboto">
            Enter your email to receive a password reset code
          </p>

          <form className="mt-10 w-full" onSubmit={handleSubmit(onSubmit)}>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-DarkGray"
            >
              Your email
            </label>
            <input

              className="shadow-sm bg-gray-50 border border-gray-300 text-Gray text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter your email address"
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
            <div className="text-center mt-9">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primaryGreen text-sm sm:text-lg sm:w-full text-white font-roboto sm:px-24 sm:py-6"
                variant="outline"
              >
                {isSubmitting ? "Sending..." : "Reset password"}
              </Button>
              <div className="flex items-center gap-3 mt-6">
                <Checkbox />
                <p className="text-sm sm:text-base text-Gray font-roboto">
                  Remember information
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Right side */}
      <div className="lg:w-[50%] hidden lg:block bg-[#1A2A3A] min-h-screen">
        <div className="p-16">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="">
          <img
            src={reset_pass_banner}
            alt="Registration Banner"
            className="object-contain max-w-full max-h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
