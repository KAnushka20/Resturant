import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EventsAndCatering from "./pages/EventsAndCatering";

// Category Pages
import Appetizers from "./pages/Appetizers";
import MainCourse from "./pages/MainCourse";
import Desserts from "./pages/Desserts";

// Event Detail Pages
import Birthday from "./pages/Birthday";
import Corporate from "./pages/Corporate";
import Holiday from "./pages/Holiday";
import Private from "./pages/Private";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />

          {/* Category-specific full menu pages */}
          <Route path="appetizers" element={<Appetizers />} />
          <Route path="maincourse" element={<MainCourse />} />
          <Route path="desserts" element={<Desserts />} />

          {/* Events */}
          <Route path="events-catering" element={<EventsAndCatering />} />
          <Route path="events/birthday" element={<Birthday />} />
          <Route path="events/corporate" element={<Corporate />} />
          <Route path="events/holiday" element={<Holiday />} />
          <Route path="events/private" element={<Private />} />

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
