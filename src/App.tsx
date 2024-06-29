import StartScreen from "./pages/start-screen/StartScreen";
import About from "./pages/about/About";
import Pets from "./pages/pets/Pets";
import Help from "./pages/help/Help";
import Donation from "./pages/donation/Donation";
import Footer from "./pages/footer/Footer";

export default function App() {
  return (
    <div>
      <StartScreen />
      <About />
      <Pets />
      <Help />
      <Donation />
      <Footer />
    </div>
  );
}