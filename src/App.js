import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import Committees from "./pages/Committees";
import AcceptedPapers from "./pages/AcceptedPapers";
import ImportantDates from "./pages/ImportantDates";
import Keynote from "./pages/Keynote";
import CallforPapers from './pages/CallforPapers';
import Footer from "./components/Footer/footer";
import Registration from "./pages/Registration";
import Downloads from "./pages/Downloads";
import Partners from "./pages/Partners";
import Publication from "./pages/Publication";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/Committees" element={<Committees/>} />
        <Route path="/CallforPapers" element={<CallforPapers/>} />
        <Route path="/ImportantDates" element={<ImportantDates/>} />
        <Route path="/Keynote" element={<Keynote/>} />
        <Route path="/AcceptedPapers" element={<AcceptedPapers/>} />
        <Route path="/Registration" element={<Registration/>} />
        <Route path="/Publication" element={<Publication/>}/>
        <Route path="/Downloads" element={<Downloads/>} />
        <Route path="/Partners" element={<Partners/>} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
