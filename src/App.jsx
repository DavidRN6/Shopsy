import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import { useEffect } from "react";
import TopProducts from "./Components/Products/TopProducts";
import Banner from "./Components/Products/Banner";

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
    <>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
    </>
  );
}

export default App;
