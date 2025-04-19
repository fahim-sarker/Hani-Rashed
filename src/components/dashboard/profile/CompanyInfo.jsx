import { FaRegEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { PasswordChangePopup } from "./PasswordChangePopup";
import { Link } from "react-router-dom";
import { useState } from "react";
import useFetchData from "@/components/Hooks/Api/UseFetchData";

const CompanyInfo = () => {
  const token = JSON.parse(localStorage.getItem("authToken"));
  const [uploadedFile, setUploadedFile] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const { data } = useFetchData("/me", token);
    const coverImage = data?.data?.image;

  return (
    <div>
      {/* Cover image */}
      <figure
        className="w-full relative h-[180px] sm:h-[213px] rounded"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(10, 55, 96, 0.70) 0.01%, rgba(21, 113, 198, 0.01) 99.99%) , url(${coverImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <label htmlFor="fileUpload">
          {/* <div className="absolute top-2 right-2 border rounded-full cursor-pointer">
            <img src={update} alt="update" />
          </div> */}
        </label>
        <input
          id="fileUpload"
          type="file"
          className="hidden"
          onChange={(e) => setUploadedFile(e.target.files[0])}
        />
      </figure>
      <div className="flex z-50 gap-5 sm:gap-7">
        {/* Profile image */}
        <figure className="w-28 h-28 sm:w-40 sm:h-40 flex-shrink-0 relative z-50 rounded-full -mt-16 sm:-mt-20 ml-5 sm:ml-10 border-[3px]">
          <img
            src={
              uploadedFile
                ? URL.createObjectURL(uploadedFile)
                : data?.data?.avatar
            }
            alt="profile"
            className="w-full h-full object-cover rounded-full"
          />
          <label htmlFor="fileUpload">
            {/* <div className="absolute top-2/3 right-0 border rounded-full cursor-pointer">
              <img src={update} alt="update" />
            </div> */}
          </label>
          <input
            id="fileUpload"
            type="file"
            className="hidden"
            onChange={(e) => setUploadedFile(e.target.files[0])}
          />
        </figure>

      
         <h3 className="text-[#141414] mt-3 font-medium text-[22px] sm:text-2xl">
          {data?.data?.name}
        </h3>
      </div>
      {/* Company Bio */}
      <div className="flex px-3 sm:px-0 justify-between mt-7 sm:mt-2 mb-4 sm:mb-7 items-center">
        <h3 className="text-[#141414] hidden sm:block mt-3 font-semibold text-xl">
          Company Bio
        </h3>
        <div className="flex items-center gap-3">
          <PasswordChangePopup />
          <Link to="/dashboard/smallBusiness/editProfile">
            <button className="bg-primaryGreen flex gap-2 items-center text-white px-3 sm:px-4 py-2 sm:py-3 rounded sm:rounded-lg">
              <FaRegEdit className="text-xl" />
              <span>Edit</span>
            </button>
          </Link>
        </div>
      </div>
  
      <div className="text-[#141414] px-3 sm:px-0 mb-5 sm:mb-10">
        <p className="text-sm sm:text-base">
          {data?.data?.description}
        </p>
        <br />
        {/* <p className="text-sm sm:text-base">
          Our team of seasoned experts combines industry insights with
          cutting-edge methodologies to help our clients overcome challenges,
          seize opportunities, and thrive in a competitive landscape. With a
          client-first approach and a proven track record of success, we are
          committed to transforming visions into reality and building lasting
          partnerships that fuel sustainable success.
        </p>
        <br />
        <p className="text-sm sm:text-base">
          Mission: To provide innovative, results-driven solutions that inspire
          growth and empower businesses to reach their full potential.
        </p>
        <p className="text-sm sm:text-base">
          {" "}
          Vision: To be a trusted partner and industry leader in delivering
          impactful, scalable business solutions worldwide.
        </p> */}
      </div> 
      {/* Company Information */}
      <div className="mb-10 px-3 sm:px-0">
        <h3 className="text-[#141414] mb-5 font-semibold text-xl">
          Company Information
        </h3>
        <form
          className="border p-4 sm:px-7 sm:py-7 border-gray-300 rounded-lg grid sm:grid-cols-2 gap-x-8 gap-y-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="">
            <label
              htmlFor="companyName"
              className="text-[#252C32] block font-medium text-lg mb-2"
            >
              Company Name
            </label>
            <input
              readOnly
              id="companyName"
              className="block text-gray-400 w-full px-3 sm:px-5 sm:py-3 py-2 border outline-none rounded"
              defaultValue={data?.data?.name}
              {...register("companyName", { required: true })}
            />
            {errors.companyName && <span>This field is required</span>}
          </div>
          <div className="">
            <label
              htmlFor="country"
              className="text-[#252C32] block font-medium text-lg mb-2"
            >
              Country
            </label>
            <input
              readOnly
              id="country"
              className="block text-gray-400 w-full px-3 sm:px-5 sm:py-3 py-2 border outline-none rounded"
              defaultValue={data?.data?.country}
              {...register("country", { required: true })}
            />
            {errors.country && <span>This field is required</span>}
          </div>
          <div className="">
            <label
              htmlFor="description"
              className="text-[#252C32] block font-medium text-lg mb-2"
            >
              Description
            </label>
            <input
              readOnly
              id="description"
              className="block text-gray-400 w-full px-3 sm:px-5 sm:py-3 py-2 border outline-none rounded"
              defaultValue={data?.data?.description}
              {...register("description", { required: true })}
            />
            {errors.description && <span>This field is required</span>}
          </div>
          <div className="">
            <label
              htmlFor="industry"
              className="text-[#252C32] block font-medium text-lg mb-2"
            >
              Industry
            </label>
            <input
              readOnly
              id="industry"
              className="block w-full text-gray-400 px-3 sm:px-5 sm:py-3 py-2 border outline-none rounded"
              defaultValue={data?.data?.company_type}
              {...register("industry", { required: true })}
            />
            {errors.industry && <span>This field is required</span>}
          </div>
          <div className="">
            <label
              htmlFor="website"
              className="text-[#252C32] block font-medium text-lg mb-2"
            >
              Website
            </label>
            <input
              readOnly
              id="website"
              className="block w-full text-gray-400 px-3 sm:px-5 sm:py-3 py-2 border outline-none rounded"
              defaultValue={data?.data?.website_url}
              {...register("website", { required: true })}
            />
            {errors.website && <span>This field is required</span>}
          </div>
          <div className="">
            <label
              htmlFor="stage"
              className="text-[#252C32] block font-medium text-lg mb-2"
            >
              Company Stage
            </label>
            <input
              readOnly
              id="stage"
              className="block w-full text-gray-400 px-3 sm:px-5 sm:py-3 py-2 border outline-none rounded"
              defaultValue={data?.data?.company_stage}
              {...register("stage", { required: true })}
            />
            {errors.stage && <span>This field is required</span>}
          </div>
        </form>
      </div>
      {/* Primary Contact Information */}
      <div className="px-3 sm:px-0">
        <h3 className="text-[#141414] mb-5 font-semibold text-xl">
          Primary Contact Information
        </h3>
        <form
          className="border p-4 sm:px-7 sm:py-7 border-gray-300 rounded-lg grid sm:grid-cols-2 gap-x-8 gap-y-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="">
            <label
              htmlFor="contactName"
              className="text-[#252C32] block font-medium text-lg mb-2"
            >
              {" "}
              Primary Contact Name
            </label>
            <input
              readOnly
              id="contactName"
              className="block w-full text-gray-400 px-3 sm:px-5 sm:py-3 py-2 border outline-none rounded"
              defaultValue={data?.data?.primary_contact_name}
              {...register("contactName", { required: true })}
            />
            {errors.contactName && <span>This field is required</span>}
          </div>
          <div className="">
            <label
              htmlFor="email"
              className="text-[#252C32] block font-medium text-lg mb-2"
            >
              Email Address
            </label>
            <input
              readOnly
              id="email"
              className="block w-full px-3 sm:px-5 sm:py-3 py-2  text-gray-400 border outline-none rounded"
              defaultValue={data?.data?.email}
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="">
            <label
              htmlFor="phoneNumber"
              className="text-[#252C32] block font-medium text-lg mb-2"
            >
              Phone Number
            </label>
            <input
              readOnly
              id="phoneNumber"
              className="block text-gray-400 w-full px-3 sm:px-5 sm:py-3 py-2 border outline-none rounded"
              defaultValue={data?.data?.phone}
              {...register("phoneNumber", { required: true })}
            />
            {errors.phoneNumber && <span>This field is required</span>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyInfo;
