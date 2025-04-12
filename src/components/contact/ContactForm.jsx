import { useForm } from "react-hook-form";
import useAxios from "../Hooks/Api/UseAxios";
import toast from "react-hot-toast";
import { ImSpinner3 } from "react-icons/im";

const ContactForm = () => {
  const Axiosinatance = useAxios();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await Axiosinatance.post("/contact-mail", data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      toast.success("Your message has been sent successfully.");
      reset();
    } catch (error) {
      toast.error(error.message);
    }
  };
  
  return (
    <section className="container max-w-5xl my-20">
      <div className="mb-5 text-center">
        <h3 className="text-2xl sm:text-4xl mb-3 font-semibold text-[#010205]">
          What can we help you today?
        </h3>
        <p className="sm:w-2/3 text-gray-500 mx-auto">
          Lorem ipsum dolor sit amet consectetur. Sed in risus pretium integer
          eleifend tincidunt elit et penatibus. Sit sed felis.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-5 sm:p-10 border border-gray-100 rounded-lg shadow-xl"
      >
        <div className="grid grid-cols-2 gap-x-5 gap-y-5 sm:gap-y-10">
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="company_name"
              className="font-semibold text-gray-950 inline-block text-lg mb-2"
            >
              Company Name
            </label>
            <input
              id="company_name"
              type="text"
              placeholder="Enter Company Name"
              className="w-full px-4 py-3 outline-none rounded-lg border"
              required
              {...register("company_name", {
                required: "Company Name is required",
              })}
            />
            {errors.company_name && (
              <p className="mt-1 text-sm text-red-600">
                {errors.company_name.message}
              </p>
            )}
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="country"
              className="font-semibold text-gray-950 inline-block text-lg mb-2"
            >
              Country
            </label>
            <select
              defaultValue="Select Country"
              className="w-full px-4 py-3 outline-none rounded-lg border"
              required
              {...register("country", {
                required: "country Name is required",
              })}
            >
              <option defaultValue="Select Country" disabled>
                Select Country
              </option>
              <option value="uk">UK</option>
              <option value="pakisthan">Pakisthan</option>
              <option value="nepal">Nepal</option>
              <option value="usa">USA</option>
            </select>
            {errors.country && (
              <p className="mt-1 text-sm text-red-600">
                {errors.country.message}
              </p>
            )}
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="phone_number"
              className="font-semibold text-gray-950 inline-block text-lg mb-2"
            >
              Phone Number
            </label>
            <input
              id="phone_number"
              type="number"
              placeholder="Enter Phone Number"
              className="w-full px-4 py-3 outline-none rounded-lg border"
              required
              {...register("phone", {
                required: "phone number is required",
              })}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="subject"
              className="font-semibold text-gray-950 inline-block text-lg mb-2"
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="How can we help?"
              className="w-full px-4 py-3 outline-none rounded-lg border"
              required
              {...register("subject", {
                required: "subject is required",
              })}
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600">
                {errors.subject.message}
              </p>
            )}
          </div>
          <div className="col-span-2">
            <label
              htmlFor="message"
              className="font-semibold text-gray-950 inline-block text-lg mb-2"
            >
              Message
            </label>
            <textarea
              className="w-full border px-4 py-3 outline-none rounded-lg"
              placeholder="Enter your message here...."
              rows={5}
              id="message"
              required
              {...register("message", {
                required: "message is required",
              })}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`col-span-2 flex items-center justify-center gap-2 border-2 border-primaryGreen bg-primaryGreen   w-full 
            font-medium py-3 rounded duration-300`}
          >
            {isSubmitting ? <ImSpinner3  className="animate-spin text-xl fill-white" /> : "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
