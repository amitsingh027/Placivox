import { Link } from "react-router-dom";
import {
  FaFileAlt,
  FaSearch,
  FaMicrophone,
  FaClipboardList,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";

const features = [
  {
    title: "Resume Builder",
    path: "/resume-builder",
    icon: <FaFileAlt size={30} />,
    desc: "Create professional ATS-friendly resumes in minutes.",
  },
  {
    title: "ATS Scanner",
    path: "/ats-scanner",
    icon: <FaSearch size={30} />,
    desc: "Analyze your resume and improve your ATS score.",
  },
  {
    title: "Interview Prep",
    path: "/interview-prep",
    icon: <FaMicrophone size={30} />,
    desc: "Practice HR and technical interviews with AI feedback.",
  },
  {
    title: "Quiz Platform",
    path: "/quiz",
    icon: <FaClipboardList size={30} />,
    desc: "Aptitude, DSA, DBMS, OS and company-wise quizzes.",
  },
  {
    title: "Job Tracker",
    path: "/job-tracker",
    icon: <FaBriefcase size={30} />,
    desc: "Track all your job applications in one place.",
  },
  {
    title: "Coding Practice",
    path: "/coding-practice",
    icon: <FaCode size={30} />,
    desc: "Solve coding problems and prepare for OA rounds.",
  },
];

export default function Features() {
  return (
    <section className="px-10 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Everything You Need To Get Hired
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Link
            key={feature.title}
            to={feature.path}
          >
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:scale-105 transition duration-300 cursor-pointer h-full">
              
              <div className="mb-4 text-blue-400">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400">
                {feature.desc}
              </p>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}