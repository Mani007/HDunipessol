
import Bgvideo from "./components/bgvideo";
import { Carousel } from "./components/Carousel";
import Maincontact from "./components/Maincontact";
import Stats from "./components/Stats";
import Valuesec from "./components/Valuesec";

// import About from "./About/page"
// import Services from "./Services/page"

export default function Home() {
  return (
    <>
    <Bgvideo/> 
    <Stats/>
    <Carousel/>
    <Valuesec/>
    <Maincontact/>
    
    
    {/* <About/> */}
    </>
  );
}
