import { GrSecure } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { MdAttachMoney } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

function Banner() {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
      <div className="container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2
            gap-6 items-center"
        >
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src="product-2.jpg"
              alt="Banner-photo"
              className="max-w-[350px] h-[350px] w-full lg:max-w-[400px]
                mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 className="text-3xl sm:text-4xl font-bold ml-4 lg:ml-0">
              Winter Sale upto 50% Off
            </h1>
            <p className="text-sm text-gray-500 tracking-wide leading-5 ml-4 lg:ml-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div className="flex flex-col gap-4 ml-5 lg:ml-0">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                bg-violet-100 dark:bg-violet-400"
                />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <TbTruckDelivery
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                bg-orange-100 dark:bg-orange-400"
                />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <MdAttachMoney
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                bg-green-100 dark:bg-green-400"
                />
                <p>Easy Payment method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <BiSolidOffer
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                bg-yellow-100 dark:bg-yellow-400"
                />
                <p>Fast Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
