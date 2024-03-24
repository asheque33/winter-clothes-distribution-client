const Banner: React.FC = () => {
  return (
    <div className="mb-48">
      <img
        className="relative h-[700px] w-full max-w-screen-2xl   "
        src="https://i.ibb.co/JxtNT5G/winter-clothing-gallery-7.jpg"
        alt=""
      />
      <div className="flex-1 md:flex-1 lg:flex  lg:absolute lg:ms-16 lg:top-[680px] ">
        <div className="w-full lg:w-[450px] h-[100px] md:h-[150px] lg:h-[230px] p-12 bg-white object-cover">
          <h3
            style={{ fontFamily: '"Fira Sans Condensed", sans-serif' }}
            className="text-3xl font-extrabold text-black"
          >
            We work to fight poverty and achieve social justice.
          </h3>
        </div>
        <div className="flex-1 md:flex-1 lg:w-[710px] lg:p-12 h-[230px] bg-[#1c1d30]  mt-16 mb-8 md:my-12 lg:m-0 align-middle text-white object-cover text-center lg:text-start">
          <h5 className=" text-xl font-medium  ">
            We put unprivileged & helpless in the center because we cannot
            overcome poverty until all people have equal rights and
            opportunities.
          </h5>
          <button className="border-4 text-lg mt-3 px-5 py-2 rounded border-orange-600  ">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
