import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Blogs from "./blogs";
import Service from "./service";
import CaseStudy1 from "./casestudy";
import Contact from "./contact";
import Service1 from "./services/businessAutomation";
import Service2 from "./services/aiDevelopment";
import Service3 from "./services/softDevelopment";
import Service4 from "./services/mobileDevelopment";
import Service5 from "./services/webDevelopment";
import Blog1 from "./mainblogs/SEO";
import Blog2 from "./mainblogs/RiseAI";
import Blog3 from "./mainblogs/Decoding";
import Blog4 from "./mainblogs/Quantum";
import Blog5 from "./mainblogs/ARtrends";
import Blog6 from "./mainblogs/Cybersecurity";
import Blog7 from "./mainblogs/SustainableTech";
import Blog8 from "./mainblogs/AIAutomationSmallBusinesses";
import CaseStudy from "./maincasestudy";
import DynamicBlog from "./components/DynamicBlog";
import Landing1 from "./landing/BusinessAutomationLanding";
import LandingContactUs from "./landing/BusinessAutomation/ContactBusinessAutomation";

// import Chatbot from "./components/Chatbot";
// import ChatButton from "./components/ChatButton";

const root = document.getElementById("root");

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenChat = () => setIsChatOpen(true);
  const handleCloseChat = () => setIsChatOpen(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<DynamicBlog />} />{" "}
          <Route path="/service" element={<Service />} />
          <Route path="/casestudy1" element={<CaseStudy1 />} />
          <Route path="/casestudy" element={<CaseStudy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/business-automation" element={<Service1 />} />
          <Route path="/services/ai-development" element={<Service2 />} />
          <Route path="/services/software-development" element={<Service3 />} />
          <Route path="/services/web-development" element={<Service5 />} />
          <Route path="/services/mobile-development" element={<Service4 />} />
          <Route path="/blogs/seo" element={<Blog1 />} />
          <Route path="/blogs/ai" element={<Blog2 />} />
          <Route path="/blogs/decoding" element={<Blog3 />} />
          <Route path="/blogs/quantum" element={<Blog4 />} />
          <Route path="/blogs/ar-trends" element={<Blog5 />} />
          <Route path="/blogs/cybersecurity" element={<Blog6 />} />
          <Route path="/blogs/sustainable-tech" element={<Blog7 />} />
          <Route path="/blogs/automation-business" element={<Blog8 />} />
          {/* Landing pages */}
          <Route path="/landing/business-automation" element={<Landing1 />} />
          <Route
            path="/landing/business-automation/contact"
            element={<LandingContactUs />}
          />
        </Routes>
      </BrowserRouter>
      {/* <ChatButton onClick={handleOpenChat} />
      {isChatOpen && <Chatbot onClose={handleCloseChat} />} */}
    </>
  );
};

ReactDOM.createRoot(root).render(<App />);
