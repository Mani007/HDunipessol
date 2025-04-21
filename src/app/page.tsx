
import Bgvideo from "./components/bgvideo";
// import { Carousel } from "./components/Carousel";
import Exfour from "./components/Exfour";
import Exone from "./components/Exone";
import Exthree from "./components/Exthree";
import Extwo from "./components/Extwo";
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
    <Exone/>
    <Extwo/>
    <Exthree/>
    <Exfour/>
    {/* <Carousel/> */}
    <Valuesec/>
    <Maincontact/>
    
    {/* <About/> */}
    </>
  );
}
