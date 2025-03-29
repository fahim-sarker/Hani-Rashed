const ContactForm = () => {
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
      <form className="bg-white p-5 sm:p-10 border border-gray-100 rounded-lg shadow-xl">
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
            />
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
            >
              <option defaultValue="Select Country" disabled>
                Select Country
              </option>
              <option value="uk">UK</option>
              <option value="pakisthan">Pakisthan</option>
              <option value="nepal">Nepal</option>
              <option value="usa">USA</option>
            </select>
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
            />
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
            />
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
            ></textarea>
          </div>
          <input
            type="submit"
            value="Send Message"
            className="col-span-2 hover:bg-transparent duration-300 cursor-pointer hover:text-primaryGreen border-2 border-primaryGreen -mt-3 sm:-mt-5 w-full bg-primaryGreen text-white font-medium py-3 rounded"
          />
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
