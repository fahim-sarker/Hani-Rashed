import { useState, useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const PasswordSetSuccessfully = () => {
  const [scale, setScale] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setScale(1), 300); // Animate the icon after 300ms
    // Automatically navigate to the home page after 2 seconds
    // setTimeout(() => navigate("/"), 2000);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg max-w-md w-full transform transition-all duration-500">
        {/* Animated Success Icon */}
        <div className="flex justify-center mb-6">
          <AiOutlineCheckCircle
            className={`text-green-500 rounded-full text-6xl transition-transform duration-500 transform ${scale ? "scale-100" : "scale-0"
              }`}
          />
        </div>

        {/* Success Message */}
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-DarkGray mb-4">
          Password Set Successfully
        </h2>
        <p className="text-center text-[14px] text-gray-600 mb-6">
          You can now use your new password to log in to your account.
        </p>

        {/* Log In Button */}
        <div className="flex justify-center w-full">
          <button
            onClick={() => navigate("/auth/login")} // Manually navigate to login page
            className="bg-primaryGreen sm:text-lg sm:w-full text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordSetSuccessfully;
