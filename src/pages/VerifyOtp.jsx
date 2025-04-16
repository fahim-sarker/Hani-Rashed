import { Link, useLocation, useNavigate } from "react-router-dom";
import reg_banner from "../assets/Reg_Img/reg_Banner.png";
import logo from "../assets/logoBottom.png";
import { Button } from "@/components/ui/button";
import OtpInput from "react-otp-input";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useAxios from "@/components/Hooks/Api/UseAxios";
import { FaSpinner } from "react-icons/fa";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const Axiosinstance = useAxios();
  const location = useLocation();
  const email = location?.state?.email;
  console.log(email);
  

  const handleSubmit = async () => {
    if (!otp) {
      setError("OTP is required.");
    } else if (otp.length < 4) {
      setError("OTP must be 4 digits.");
    } else {
      setIsLoading(true);
      try {
        const response = await Axiosinstance.post(
          "/verify-otp",
          {
            email: email,
            otp: otp,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          toast.success("OTP verified successfully");
          setOtp("");
          setTimeout(() => {
            navigate("/auth/createNewPassword", { state: { email } });
          }, 2000);
        }
      } catch (error) {
        console.log(error);
        toast.error("Invalid OTP. Please try again.");
        setError("Invalid OTP. Please try again.");
      }
      setIsLoading(false);
    }
  };

  const handleOtpChange = (value) => {
    setOtp(value);
    if (value.length === 4) {
      setError("");
    }
  };

  const handleResendOtp = async () => {
    setIsLoading(true);
    try {
      const response = await Axiosinstance.post(
        "resend-otp",
        { email: email },
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.status === 200) {
        toast.success("OTP resent successfully. Please check your email.");
        setTimeout(() => {
          navigate("/auth/createNewPassword")
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to resend OTP. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <div className="lg:flex w-full lg:h-screen sm:py-12 md:py-0">
      <Toaster />
      {/* Left side content */}
      <div className="flex lg:w-[50%] min-h-screen justify-center items-center">
        <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-3xl xlg:text-[40px] font-extrabold text-center text-DarkGray">
            Verify Your Account
          </h2>
          <p className="xlg:w-[500px] text-DarkGray text-sm sm:text-base text-center font-roboto">
            Enter the OTP code we sent to your email{" "}
            <span className="font-semibold">{email}</span>. Be
            careful not to share the code with anyone.
          </p>

          <div className="flex flex-col justify-center my-6">
            <OtpInput
              value={otp}
              onChange={handleOtpChange}
              numInputs={4}
              inputType="number"
              renderInput={(props, index) => (
                <input
                  {...props}
                  className="border rounded-lg xs:min-h-[45px] xs:min-w-[45px] min-h-[40px] min-w-[40px] text-base md:text-lg lg:text-xl text-center outline-none transition-all duration-300"
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
            {error && <p className="text-red-500 text-center">{error}</p>}
          </div>

          <p className="mb-12 xlg:w-[510px] text-sm sm:text-base text-center font-roboto">
            We&apos;ve sent a 4-digit verification code to your email. Check
            your spam folder in case you didn&apos;t receive the code.
          </p>
          <div className="text-center">
            <Button
              type="button"
              className="bg-primaryGreen text-sm sm:text-lg text-white sm:px-24 sm:py-6"
              variant="outline"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Verifying...
                </>
              ) : (
                "Verify"
              )}
            </Button>

            <p className="text-sm sm:text-base text-Gray font-roboto mt-4">
              Didn’t receive the email?{" "}
              <button onClick={handleResendOtp} className="text-Blue">
                Resend Code
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Right side banner */}
      <div className="lg:w-[50%] hidden lg:block bg-[#1A2A3A] min-h-screen">
        <div className="p-16">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="w-full">
          <img
            src={reg_banner}
            alt="Registration Banner"
            className="object-contain max-w-screen mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
