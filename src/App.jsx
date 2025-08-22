import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EventsAndCatering from "./pages/EventsAndCatering";

// Optional: If you want to keep toast and tooltip libraries,
// you can replace them with libraries like `react-toastify` or your own custom components.
// For now, we’ll use placeholders:

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="events-catering" element={<EventsAndCatering />} />
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
