import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import Events from "./pages/Events/Events";
import AddEvent from "./pages/AddEvent/AddEvent";
import ApplyVolunteer from "./pages/ApplyVolunteer/ApplyVolunteer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/explore" element={<Events />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/apply-volunteer" element={<ApplyVolunteer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
