function Subscribe() {
  const bannerImg = {
    backgroundImage: "url(orange-pattern.jpg)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={bannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-80 mx-auto lg:max-w-xl">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
          data-aos="fade-up"
          type="text"
          placeholder="Enter your email"
          className="w-full p-3 text-black"
          />
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
