import React, { useRef } from "react"; // ✅ make sure to import useRef
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import TrustedBy from "./components/TrustedBy.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Testimonal from "./components/Testimonials.jsx";
import JoinUs from "./components/JoinUs.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx"; // create this page

function App() {
  const joinUsRef = useRef(null);

  const scrollToJoinUs = () => {
    joinUsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HomePage scrollToJoinUs={scrollToJoinUs} />
            <TrustedBy />
            <AboutUs />
            <Testimonal />
            <div ref={joinUsRef}>
              <JoinUs />
            </div>
            <Footer />
          </>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
