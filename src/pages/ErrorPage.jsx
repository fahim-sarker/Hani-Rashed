import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <section className="container text-center flex items-center justify-center flex-col gap-5 h-screen">
      <h2 className="text-4xl sm:text-5xl font-semibold text-red-600">
        Opps!!
      </h2>
      <p className="text-gray-900 text-2xl sm:text-3xl font-medium">
        Sorry, an unexcepted error has occurred.
      </p>
      <p className="text-gray-800 font-medium text-2xl">{error.statusText}</p>
      <Link
        to="/"
        className="px-4 sm:px-6 py-1 sm:py-2 duration-300 hover:bg-transparent hover:text-primaryGreen border-2 border-primaryGreen bg-primaryGreen text-white font-medium rounded"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default ErrorPage;
