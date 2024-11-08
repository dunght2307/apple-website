import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Model from "./components/Model";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Ribbon from "./components/Ribbon";
import AppleIntelligence from "./components/AppleIntelligence";
import CameraControl from "./components/CameraControl";
import VideoAndAudio from "./components/VideoAndAudio";
import ZoomGallery from "./components/ZoomGallery";
import PhotographicStyle from "./components/PhotographicStyle";
import Chip from "./components/Chip";
import Battery from "./components/Battery";
import Ios18 from "./components/Ios18";
import Safety from "./components/Safety";
import Other from "./components/Other";
import Values from "./components/Values";
import SignificantOthers from "./components/SignificantOthers";
import IncentiveBackgroundAlt from "./components/IncentiveBackgroundAlt";
import Contract from "./components/Contract";

const App = () => {
  return (
    <main className="bg-black font-inter">
      <Navbar />
      <Ribbon />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <AppleIntelligence />
      <CameraControl />
      <VideoAndAudio />
      <ZoomGallery />
      <PhotographicStyle />
      <Chip />
      <Battery />
      <Ios18 />
      <Safety />
      <Values />
      <SignificantOthers />
      <IncentiveBackgroundAlt />
      <Contract />
      <Other />
      <Footer />
    </main>
  );
};

export default App;
