import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder/ResumeBuilder";
import ATSScanner from "./pages/ATSScanner/ATSScanner";
import InterviewPrep from "./pages/InterviewPrep/InterviewPrep";
import JobTracker from "./pages/JobTraker/JobTracker";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
<Route path="/ats-scanner" element={<ATSScanner />} />
<Route path="/interview-prep" element={<InterviewPrep />} />
<Route path="/job-tracker" element={<JobTracker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;