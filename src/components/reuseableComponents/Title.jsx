const Title = ({ title, className }) => {
  return (
    <div>
      <h3
        className={`text-2xl sm:text-4xl font-semibold font-publicSans mb-5 lg:mb-8 ${className}`}
      >
        {title}
      </h3>
    </div>
  );
};

export default Title;
