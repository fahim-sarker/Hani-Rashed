import { AccordionDemo } from "./AccordionDemo";

const FAQ = () => {
  return (
    <section id="faq" className="container grid md:grid-cols-2 gap-10 mb-20">
      <div className="">
        <h3 className="text-4xl md:text-5xl font-semibold mb-7">FAQs</h3>
        <p className="text-gray-700 mb-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <button className="text-white px-6 py-3 border-2 border-primaryGreen font-medium duration-500 hover:bg-transparent hover:text-primaryGreen rounded-lg bg-primaryGreen">
          Connect
        </button>
      </div>
      <div className="">
        <AccordionDemo></AccordionDemo>
      </div>
    </section>
  );
};

export default FAQ;
