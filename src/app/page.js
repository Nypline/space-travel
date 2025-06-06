import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div className="w-full h-[115vh] lg:h-[115vh] min-[320px]:h-[130vh] bg-cover bg-center bg-[url('/Home-Background.jpg')]">
      <Navbar />
      <Hero />
    </div>
  );
}
