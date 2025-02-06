import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import About from "../components/About";
import StudentEnquiryForm from "../components/AdmissionForm";
import HomePage from "../components/Home";
import Gallery from "../components/Gallery";
import Result from "../components/Result";
import Contact from "../components/ContactUs";
import AdminDashboard from "../components/AdminDashboard";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/admission" element={<StudentEnquiryForm />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/result" element={<Result />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
