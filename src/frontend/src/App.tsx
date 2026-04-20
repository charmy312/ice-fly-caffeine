import Flavors from "./components/Flavors";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import ScrollingText from "./components/ScrollingText";
import Story from "./components/Story";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Flavors />
      <ScrollingText />
      <Story />
      <Gallery />
      <Newsletter />
      <Footer />
    </>
  );
}
