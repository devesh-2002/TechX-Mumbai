import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import Events from "./pages/Events/Events";
import AddEvent from "./pages/AddEvent/AddEvent";
import ApplyVolunteer from "./pages/ApplyVolunteer/ApplyVolunteer";
import Custom404 from "./pages/Custom404/Custom404";
import Navbar from "./components/Navbar/Navbar";
import EventDetails from "./pages/EventDetails/EventDetails";
import CFPForm from "./components/CFPForm/CFPForm";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/explore" element={<Events />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/apply-volunteer" element={<ApplyVolunteer />} />
          <Route path="/explore/:id" element={<EventDetails />} />
          <Route path="/cfp" element={< CFPForm/>}></Route>
          <Route path="*" element={<Custom404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
