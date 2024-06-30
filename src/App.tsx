import StartScreen from "./pages/start-screen/StartScreen";
import About from "./pages/about/About";
import Pets from "./pages/pets/Pets";
import Help from "./pages/help/Help";
import Donation from "./pages/donation/Donation";
import Footer from "./pages/footer/Footer";
import AllPets from "./pages/all_pets/AllPets";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <StartScreen />
        <About />
        <Pets />
        <Help />
        <Donation />
        <Footer />
      </div>
    ),
  },
  {
    path: "/all-pets",
    element: (
      <div>
        <AllPets />
      </div>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
