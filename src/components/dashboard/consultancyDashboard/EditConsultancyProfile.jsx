import cover from "../../../assets/companyCover.png";
import profile from "../../../assets/profile.png";
import update from "../../../assets/icons/update.png";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useAxios from "@/components/Hooks/Api/UseAxios";
import { useNavigate } from "react-router-dom";

const EditConsultancyProfile = () => {
  const navigate = useNavigate();
  const Axiosinstance = useAxios();
  const [profiledata, setProfiledata] = useState({});
  const [uploadedFile, setUploadedFile] = useState(null);
  const token = JSON.parse(localStorage.getItem("authToken"));
  console.log(token);


  useEffect(() => {
    Axiosinstance.get("me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setProfiledata(response.data.data);
        console.log(response.data.data);

      })

      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, []);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      if (uploadedFile) {
        const validTypes = [
          "image/jpeg",
          "image/png",
          "image/jpg",
          "image/gif",
        ];

        if (!validTypes.includes(uploadedFile.type)) {
          toast.error("Please upload a valid image (jpeg, png, jpg, gif).");
          return;
        }

        formData.append("avatar", uploadedFile);
      }

      if (!token) {
        toast.error("Authentication token missing!");
        return;
      }

      // Send the form data to the backend
      await Axiosinstance.post("/update-profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setTimeout(() => {
        navigate("/dashboard/consultancyFirms/profile")
      }, 1000);
      toast.success("Successfully updated profile!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile. Please try again.");
    }
  };

  

  return (
    <>
      <h3 className="text-2xl hidden sm:block font-medium mb-1">
        Account Information
      </h3>
      <p className="text-gray-400 hidden sm:block mb-5">
        Update your account information
      </p>

      {/* Cover image */}
      <figure
        className="w-full relative h-[180px] sm:h-[213px] sm:rounded"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(10, 55, 96, 0.70) 0.01%, rgba(21, 113, 198, 0.01) 99.99%), url(${cover})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <label
          htmlFor="fileUpload"
          className="cursor-pointer absolute top-2 right-2"
        >
          <img src={update} alt="update" />
        </label>
        <input
          id="fileUpload"
          type="file"
          className="hidden"
          onChange={(e) => setUploadedFile(e.target.files[0])}
        />
      </figure>

      <div className="flex z-50 gap-3 sm:gap-7">
        {/* Profile image */}
        <figure className="sm:w-40 sm:h-40 w-32 h-32 relative z-50 rounded-full -mt-20 ml-7 sm:ml-10 border-[3px]">
          <img
            src={profiledata?.avatar|| profile}
            alt="profile"
            className="w-full h-full object-cover rounded-full"
          />
          <label
            htmlFor="fileUpload"
            className="cursor-pointer absolute top-2/3 right-0 border rounded-full"
          >
            <img src={update} alt="update" />
          </label>
          <input
            id="fileUpload"
            type="file"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setUploadedFile(file); 
              }
            }}
          />
        </figure>
        <h3 className="text-[#141414] mt-3 font-medium text-lg sm:text-2xl">
            {profiledata?.name|| "profile"}
        </h3>
      </div>

      <div className="bg-white rounded-lg shadow p-3 sm:p-7 mt-7 sm:mt-10">
        <h3 className="text-[#141414] mb-5 font-semibold text-xl">
          Company Information
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="sm:grid grid-cols-2 gap-x-5 sm:gap-x-8 space-y-3 sm:gap-y-5 mb-10">
            {[
              {
                label: "Company Name",
                name: "name",
                type: "text",
                defaultValue: profiledata?.name 
              },
              {
                label: "Description",
                name: "description",
                type: "text",
                defaultValue: profiledata?.description ,
              },
              {
                label: "Website",
                name: "website_url",
                type: "text",
                defaultValue: profiledata?.website_url,
              },
              {
                label: "Primary Contact Name",
                name: "primary_contact_name",
                type: "text",
                defaultValue: profiledata?.primary_contact_name,
              },
              {
                label: "Email Address",
                name: "primary_email",
                type: "email",
                defaultValue: profiledata?.primary_email,
              },
              {
                label: "Phone Number",
                name: "phone",
                type: "number",
                defaultValue: profiledata?.phone,
              },
            ].map(({ label, name, type, defaultValue }) => (
              <div key={name} className="w-full">
                <label
                  htmlFor={name}
                  className="text-[#252C32] block font-medium text-lg mb-2"
                >
                  {label}
                </label>
                <input
                  id={name}
                  type={type}
                  className="block w-full text-gray-400 px-3 py-2 sm:px-5 sm:py-3 border outline-none rounded"
                  defaultValue={defaultValue}
                  {...register(name, { required: true })}
                />
                {errors[name] && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            ))}

            {/* Dropdowns */}
            {[
              {
                label: "Country",
                name: "country",
                options: ["Saudi Arabia", "USA", "UK", "UAE"],
                defaultValue: profiledata?.country,
              },
              {
                label: "Industry",
                name: "company_type",
                options: ["small", "medium", "big"],
                defaultValue: profiledata?.company_type,
              },
              {
                label: "Company Stage",
                name: "company_stage",
                options: ["Incorporation", "Corporation"],
                defaultValue: profiledata?.profile_type,
              },
            ].map(({ label, name, options, defaultValue }) => (
              <div key={name} className="w-full">
                <label className="text-[#252C32] block font-medium text-lg mb-2">
                  {label}
                </label>
                <select
                  className="block w-full px-3 py-2 sm:px-5 sm:py-3 border outline-none rounded"
                  defaultValue={defaultValue}
                  {...register(name, { required: true })}
                >
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors[name] && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 items-center justify-end mt-10 pe-20">
            <button
              type="button"
              className="bg-[#0B2948] text-white px-7 py-2 font-medium rounded-[6px]"
              onClick={(e) => e.preventDefault()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primaryGreen text-white px-8 py-2 font-medium rounded-[6px]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditConsultancyProfile;
