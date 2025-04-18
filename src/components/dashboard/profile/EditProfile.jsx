import cover from "../../../assets/companyCover.png";
import update from "../../../assets/icons/update.png";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import useAxios from "@/components/Hooks/Api/UseAxios";
import { Link, useNavigate } from "react-router-dom";
import useFetchData from "@/components/Hooks/Api/UseFetchData";
import CountrySelect from "@/components/CountrySelect";
import countries from "world-countries";



const getCountryOption = (countryName) => {
  const match = countries.find((c) => c.name.common === countryName);
  return match
    ? {
        label: match.name.common,
        value: match.name.common,
        flag: `https://flagcdn.com/w40/${match.cca2.toLowerCase()}.png`,
      }
    : null;
};

const EditProfile = () => {
  const navigate = useNavigate();
  const Axiosinstance = useAxios();
  const [avatarFile, setAvatarFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);
  const token = JSON.parse(localStorage.getItem("authToken"));
  const { data } = useFetchData("/me", token);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      website_url: "",
      primary_contact_name: "",
      primary_email: "",
      phone: "",
      country: null,
      company_type: "",
      company_stage: "",
    },
  });

  useEffect(() => {
    if (data?.data) {
      const d = data.data;
      setValue("name", d.name || "");
      setValue("description", d.description || "");
      setValue("website_url", d.website_url || "");
      setValue("primary_contact_name", d.primary_contact_name || "");
      setValue("primary_email", d.primary_email || "");
      setValue("phone", d.phone || "");
      setValue("country", d.country ? getCountryOption(d.country) : null);
      setValue("company_type", d.company_type?.toLowerCase() || "");
      setValue("company_stage", d.company_stage?.toLowerCase() || "");
    }
  }, [data, setValue]);

  const onSubmit = async (formDataValues) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      Object.entries(formDataValues).forEach(([key, value]) => {
        if (key === "country" && typeof value === "object") {
          formData.append("country", value.label);
        } else {
          formData.append(key, value);
        }
      });

      if (avatarFile) {
        const validTypes = [
          "image/jpeg",
          "image/png",
          "image/jpg",
          "image/gif",
        ];
        if (!validTypes.includes(avatarFile.type)) {
          toast.error(
            "Please upload a valid avatar image (jpeg, png, jpg, gif)."
          );
          return;
        }
        formData.append("avatar", avatarFile);
      }

      if (coverFile) {
        const validTypes = [
          "image/jpeg",
          "image/png",
          "image/jpg",
          "image/gif",
        ];
        if (!validTypes.includes(coverFile.type)) {
          toast.error(
            "Please upload a valid cover image (jpeg, png, jpg, gif)."
          );
          return;
        }
        formData.append("image", coverFile);
      }

      if (!token) {
        toast.error("Authentication token missing!");
        return;
      }

      const response = await Axiosinstance.post("/update-profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        toast.success("Successfully updated profile!");
        setTimeout(() => {
          navigate("/dashboard/smallBusiness/profile");
        }, 1000);
      } else {
        toast.error("Profile update failed. Please try again.");
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      if (error.response && error.response.data) {
        toast.error(
          error.response.data.message ||
            "Failed to update profile. Please try again."
        );
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  const coverImage = data?.data?.image || cover;

  return (
    <>
      <h3 className="text-2xl hidden sm:block font-medium mb-1">
        Account Information
      </h3>
      <p className="text-gray-400 hidden sm:block mb-5">
        Update your account information
      </p>

      {/* Cover Image Section */}
      <figure
        className="w-full relative h-[180px] sm:h-[213px] sm:rounded"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(10, 55, 96, 0.70) 0.01%, rgba(21, 113, 198, 0.01) 99.99%), url(${
            coverFile ? URL.createObjectURL(coverFile) : coverImage
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <label
          htmlFor="coverUpload"
          className="cursor-pointer absolute top-2 right-2"
        >
          <img src={update} alt="update" />
        </label>
        <input
          id="coverUpload"
          type="file"
          className="hidden"
          onChange={(e) => setCoverFile(e.target.files[0])}
        />
      </figure>

      {/* Avatar Section */}
      <div className="flex z-50 gap-3 sm:gap-7">
        <figure className="sm:w-40 sm:h-40 w-32 h-32 relative z-50 rounded-full -mt-20 ml-7 sm:ml-10 border-[3px]">
          <img
            src={
              avatarFile ? URL.createObjectURL(avatarFile) : data?.data?.avatar
            }
            alt="profile"
            className="w-full h-full object-cover rounded-full"
          />
          <label
            htmlFor="avatarUpload"
            className="cursor-pointer absolute top-2/3 right-0 border rounded-full"
          >
            <img src={update} alt="update" />
          </label>
          <input
            id="avatarUpload"
            type="file"
            className="hidden"
            onChange={(e) => setAvatarFile(e.target.files[0])}
          />
        </figure>
        <h3 className="text-[#141414] mt-3 font-medium text-lg sm:text-2xl">
          {data?.data?.name}
        </h3>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-lg shadow p-3 sm:p-7 mt-7 sm:mt-10">
        <h3 className="text-[#141414] mb-5 font-semibold text-xl">
          Company Information
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="sm:grid grid-cols-2 gap-x-5 sm:gap-x-8 space-y-3 sm:gap-y-5 mb-10">
            {[
              "name",
              "description",
              "website_url",
              "primary_contact_name",
              "primary_email",
              "phone",
            ].map((field) => (
              <div key={field} className="w-full">
                <label className="text-[#252C32] block font-medium text-lg mb-2">
                  {field
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </label>
                <input
                  type={
                    field === "primary_email"
                      ? "email"
                      : field === "phone"
                      ? "number"
                      : "text"
                  }
                  className="block w-full text-gray-400 px-3 py-2 sm:px-5 sm:py-3 border outline-none rounded"
                  {...register(field)}
                />
              </div>
            ))}

            {/* Country */}
            <div className="w-full">
              <label className="text-[#252C32] block font-medium text-lg mb-2">
                Country
              </label>
              <Controller
                name="country"
                control={control}
                rules={{ required: "Country is required" }}
                render={({ field }) => (
                  <CountrySelect
                    value={field.value}
                    onChange={field.onChange}
                    name={field.name}
                    error={errors.country}
                  />
                )}
              />
            </div>

            {/* Company Type & Stage */}
            {[
              {
                label: "Industry",
                name: "company_type",
                options: ["", "small", "medium", "big"],
              },
              {
                label: "Company Stage",
                name: "company_stage",
                options: ["", "incorporation", "corporation"],
              },
            ].map(({ label, name, options }) => (
              <div key={name} className="w-full">
                <label className="text-[#252C32] block font-medium text-lg mb-2">
                  {label}
                </label>
                <select
                  className="block w-full px-3 py-2 sm:px-5 sm:py-3 border outline-none rounded"
                  {...register(name)}
                >
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option
                        ? option.charAt(0).toUpperCase() + option.slice(1)
                        : "Select"}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 items-center justify-end mt-10 pe-20">
            <Link to="/dashboard/smallBusiness/profile">
            <button
              type="button"
              className="bg-[#0B2948] text-white px-7 py-2 font-medium rounded-[6px]"
            >
              Cancel
            </button>
            </Link>
            <button
              type="submit"
              className="bg-primaryGreen text-white px-8 py-2 font-medium rounded-[6px]"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
