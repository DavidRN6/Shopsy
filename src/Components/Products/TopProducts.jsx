import { FaStar } from "react-icons/fa6";

function TopProducts() {
  const productsData = [
    {
      id: 1,
      img: "shirt-1.png",
      title: "Casual Wear",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt modi quos provident dignissimos delectus, rem earum esse debitis pariatur.",
    },
    {
      id: 2,
      img: "shirt-2.png",
      title: "Printed shirt",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt modi quos provident dignissimos delectus, rem earum esse debitis.",
    },
    {
      id: 3,
      img: "shirt-3.png",
      title: "Women shirt",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt modi quos provident dignissimos delectus, rem debitis earum esse.",
    },
  ];

  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="mb-24 ml-3">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className=" text-xs text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,
            voluptatum.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {productsData.map((el) => (
            <div key={el.id}
            data-aos="zoom-in"
            className="rounded-2xl bg-white
            dark:bg-gray-800 hover:bg-black/80
            dark:hover:bg-primary hover:text-white
            relative shadow-xl duration-high group max-w-[300px]">
              {/* image section */}
              <div className="h-[100px]">
                <img src={el.img} alt="Shirts-photo"
                className="max-w-[140px] block mx-auto transform
                -translate-y-20 group-hover:scale-105 duration-300
                drop-shadow-md" />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex justify-center items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{el.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300
                text-sm line-clamp-2">
                  {el.desc}
                </p>
                <button
                      className="bg-primary hover:scale-105 duration-300
                      text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white
                      group-hover:text-primary"
                      // onClick={handleOrderPopup}
                    >
                      Order Now
                    </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
