import { Link, useNavigate } from "react-router-dom";
import reset_pass_banner from "../assets/Reg_Img/reset_password_banner.png";
import logo from "../assets/logoBottom.png";
import { Button } from "@/components/ui/button";
import OtpInput from "react-otp-input";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const PasswordReset = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const correctOtp = "123456";

  const handleSubmit = () => {
    if (!otp) {
      setError("OTP is required.");
    } else if (otp.length < 6) {
      setError("OTP must be 6 digits.");
    } else if (otp === correctOtp) {
      setError("");
      toast.success("OTP verified successfully");
      setTimeout(() => {
        navigate("/auth/createNewPassword");
      }, 2000);
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  const handleOtpChange = (value) => {
    setOtp(value);
    if (value.length === 6) {
      setError("");
    }
  };

  return (
    <div className="lg:flex w-full lg:h-screen ">
      <Toaster />
      {/* Left side */}
      <div className="flex lg:w-[50%] min-h-screen justify-center items-center">
        <div className="py-12 px-5 xlg:px-0 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-3xl sm:text-[40px] tracking-tight font-extrabold text-center text-DarkGray">
            Password reset
          </h2>
          <p className="text-center text-sm sm:text-lg text-Gray font-roboto">
            We sent a code to{" "}
            <Link className="text-Blue">habibi12@gmail.com</Link>
          </p>

          {/* Verification Code Inputs */}
          <div className="flex justify-center mt-6">
            <OtpInput
              value={otp}
              onChange={handleOtpChange}
              numInputs={6}
              inputType="number"
              renderInput={(props, index) => (
                <input
                  {...props}
                  className="border rounded-lg xs:min-h-[45px] xs:min-w-[45px] min-h-[40px] min-w-[40px] text-center text-base md:text-lg lg:text-xl outline-none transition-all duration-300"
                  style={{
                    borderColor: otp[index] ? "#01B883" : "#d1d5db",
                    width: "calc(6vw)",
                    height: "calc(6vw)",
                    maxWidth: "65px",
                    maxHeight: "65px",
                    margin: "5px",

                  }}
                />
              )}
            />
          </div>

          {/* Error message */}
          {error && <p className="text-red-500 text-center">{error}</p>}

          <p className="py-8 xlg:w-[510px] text-sm sm:text-base text-Gray text-center font-roboto">
            We&apos;ve sent a 6-digit verification code to your email. Check
            your spam folder in case you didn&apos;t receive the code.
          </p>

          <div className="text-center">
            <Button
              type="button"
              className="bg-primaryGreen text-white sm:text-lg sm:px-24 sm:py-6 "
              variant="outline"
              onClick={handleSubmit} // Trigger handleSubmit when clicked
            >
              Continue
            </Button>
            <p className="text-sm sm:text-lg text-Gray font-roboto mt-4">
              Did you not receive the code?{" "}
              <Link className="text-Blue">Resend Code</Link>
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="lg:w-[50%] hidden lg:block bg-[#1A2A3A] min-h-screen">
        <div className="p-16">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="w-full">
          <img
            src={reset_pass_banner}
            alt="Registration Banner"
            className="object-contain max-w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
