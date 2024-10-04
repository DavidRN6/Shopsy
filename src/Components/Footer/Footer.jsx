import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

const footerImg = {
  backgroundImage: "url(footer-pattern.jpg)",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const footerLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

function Footer() {
  return (
    <div style={footerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1
              className="sm:text-3xl text-xl font-bold
            text-justify mb-3 flex items-center gap-3"
            >
              <img src="logo.png" alt="Logo" className="max-w-[50px]" />
              Shopsy
            </h1>
            <h2 className="flex items-center gap-2 mb-2 mt-5">
              <MdOutlineEmail />
              yugiohgxd600@gmail.com
            </h2>
            <h4>&copy; David Raoof | All Rights Reserved</h4>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {footerLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary
                      hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify mb-3">Links</h1>
                <ul className="flex flex-col gap-3">
                  {footerLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary
                      hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div className="ml-4 md:ml-0">
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.instagram.com/david_raoof/">
                  <FaInstagram className="text-3xl hover:-translate-y-1 hover:scale-105 duration-300" />
                </a>
                <a href="https://www.facebook.com/David.yugioh">
                  <FaFacebook className="text-3xl hover:-translate-y-1 hover:scale-105 duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/david-raoof-08b643258/">
                  <FaLinkedin className="text-3xl hover:-translate-y-1 hover:scale-105 duration-300" />
                </a>
                <a href="https://github.com/DavidRN6">
                  <FaGithub className="text-3xl hover:-translate-y-1 hover:scale-105 duration-300" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Egypt, Cairo</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <IoIosCall />
                  <p>01221026369</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
