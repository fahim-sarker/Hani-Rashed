import useFetchData from "../Hooks/Api/UseFetchData";

const BlogBanner = () => {
  const { data } = useFetchData("get-blogbanner");

  return (
    <>
      {data?.data?.map((blogban, index) => (
        <section
          id="blog"
          key={index}
          style={{
            backgroundImage: `url(${blogban?.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-56 sm:h-96 flex justify-center flex-col"
        >
          <div className="container">
            <h3 className="text-2xl sm:text-4xl mb-4 font-semibold text-white">
              {blogban?.title}
            </h3>
            <p className="sm:text-lg text-white">{blogban?.description}</p>
          </div>
        </section>
      ))}
    </>
  );
};

export default BlogBanner;
