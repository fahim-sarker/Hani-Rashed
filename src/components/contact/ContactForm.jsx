import { useForm, Controller } from "react-hook-form";
import useAxios from "../Hooks/Api/UseAxios";
import toast from "react-hot-toast";
import { ImSpinner3 } from "react-icons/im";
import CountrySelect from "../CountrySelect";
import useFetchData from "../Hooks/Api/UseFetchData";
import { useEffect } from "react";
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


const ContactForm = () => {
  
  const token = JSON.parse(localStorage.getItem("authToken"));
  
  const { data } = useFetchData("/me", token);
  const Axiosinatance = useAxios();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

    useEffect(() => {
      if (data?.data) {
        const d = data.data;
        setValue("phone", d.phone || "");
        setValue("country", d.country ? getCountryOption(d.country) : null);

      }
    }, [data, setValue]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await Axiosinatance.post("/contact-mail", data, {
        headers: {
          "Content-Type": "application/json",
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
              className="w-full px-4 py-3 outline-none rounded-lg border"
              defaultValue={data?.data?.name}
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
              className="w-full px-4 py-3 outline-none rounded-lg border"
              required
              {...register("phone", {
                required: "Phone number is required",
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
              className="w-full px-4 py-3 outline-none rounded-lg border"
              required
              {...register("subject", {
                required: "Subject is required",
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
              rows={5}
              id="message"
              required
              {...register("message", {
                required: "Message is required",
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
            className={`col-span-2 flex items-center justify-center gap-2 border-2 border-primaryGreen bg-primaryGreen text-white 
            font-medium py-3 rounded duration-300`}
          >
            {isSubmitting ? (
              <ImSpinner3 className="animate-spin text-xl" />
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
