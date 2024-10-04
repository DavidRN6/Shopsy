import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import { useEffect } from "react";
import TopProducts from "./Components/Products/TopProducts";
import Banner from "./Components/Products/Banner";
import Subscribe from "./Components/Products/Subscribe";
import Testimonials from "./Components/Products/Testimonials";
import Footer from "./Components/Footer/Footer";


function App() {

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
