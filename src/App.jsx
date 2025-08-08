import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import { Footer } from "./pages/Footer";
import { Home } from "./pages/Home";
import { Navbar } from "./pages/Navbar";
import { Faq } from "./pages/Faq";
import { Slider } from "./pages/Slider";
import { Service } from "./pages/Service";
import { Frontend } from "./pages/Frontend.";
import { Cybersecurity } from "./pages/Cybersecurity";
import { Backend } from "./pages/Backend";
import { Designer } from "./pages/Designer";
import { Dataanalysis } from "./pages/Dataanalysis";
import { Science } from "./pages/Science";
import { Paymentcomponents } from "./pages/Paymentcomponents";
import { Contactform } from "./pages/Contactform";
import { About } from "./pages/About";
import { LearnPace } from "./pages/LearnPace";
import { Allcourses } from "./pages/Allcourses";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/designer" element={<Designer />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/dataanalysis" element={<Dataanalysis />} />
          <Route path="/datascience" element={<Science />} />
          <Route path="/about" element={<About />} />
          <Route path="/learnAtPace" element={<LearnPace />} />
          <Route path="/contact" element={<Contactform />} />
          <Route path="/allcourses" element={<Allcourses />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
