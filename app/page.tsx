import Hero from "./components/Hero"
import Footer from "./components/Footer";
import Event from "./components/Event";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div>
       <Navbar />
       <Hero />
       <Event />
       <Footer />
      </div>
    </>
  );
}
