import { Link } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaSearch,
  FaMicrophone,
  FaBriefcase,
  FaUser,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white p-5">

      <h1 className="text-2xl font-bold mb-10">
        Placivox 🚀
      </h1>

      <ul className="space-y-4">

        <li>
          <Link
            to="/dashboard"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
          >
            <FaHome />
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/resume-builder"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
          >
            <FaFileAlt />
            Resume Builder
          </Link>
        </li>

        <li>
          <Link
            to="/ats-scanner"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
          >
            <FaSearch />
            ATS Scanner
          </Link>
        </li>

        <li>
          <Link
            to="/interview-prep"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
          >
            <FaMicrophone />
            Interview Prep
          </Link>
        </li>

        <li>
          <Link
            to="/job-tracker"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
          >
            <FaBriefcase />
            Job Tracker
          </Link>
        </li>

        <li>
          <Link
            to="/profile"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
          >
            <FaUser />
            Profile
          </Link>
        </li>

      </ul>
    </div>
  );
}