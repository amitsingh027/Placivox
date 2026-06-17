import { useState } from "react";
import Sidebar from "../../components/Sidebar";

export default function ResumeBuilder() {
  const [resume, setResume] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    skills: "",
    projects: "",
    experience: "",
  });

  const handleChange = (e) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Resume Builder 📄
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Form Section */}
          <div className="bg-slate-900 p-6 rounded-xl">

            <h2 className="text-2xl font-semibold mb-6">
              Resume Details
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={resume.fullName}
                onChange={handleChange}
                className="w-full p-3 rounded bg-slate-800"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={resume.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-slate-800"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={resume.phone}
                onChange={handleChange}
                className="w-full p-3 rounded bg-slate-800"
              />

              <textarea
                name="education"
                placeholder="Education"
                rows="3"
                value={resume.education}
                onChange={handleChange}
                className="w-full p-3 rounded bg-slate-800"
              />

              <textarea
                name="skills"
                placeholder="Skills"
                rows="3"
                value={resume.skills}
                onChange={handleChange}
                className="w-full p-3 rounded bg-slate-800"
              />

              <textarea
                name="projects"
                placeholder="Projects"
                rows="3"
                value={resume.projects}
                onChange={handleChange}
                className="w-full p-3 rounded bg-slate-800"
              />

              <textarea
                name="experience"
                placeholder="Experience"
                rows="3"
                value={resume.experience}
                onChange={handleChange}
                className="w-full p-3 rounded bg-slate-800"
              />

            </div>
          </div>

          {/* Live Preview */}
          <div className="bg-white text-black p-8 rounded-xl">

            <h1 className="text-3xl font-bold">
              {resume.fullName || "Your Name"}
            </h1>

            <p>{resume.email}</p>
            <p>{resume.phone}</p>

            <hr className="my-4" />

            <h2 className="font-bold text-xl">
              Education
            </h2>
            <p>{resume.education}</p>

            <h2 className="font-bold text-xl mt-4">
              Skills
            </h2>
            <p>{resume.skills}</p>

            <h2 className="font-bold text-xl mt-4">
              Projects
            </h2>
            <p>{resume.projects}</p>

            <h2 className="font-bold text-xl mt-4">
              Experience
            </h2>
            <p>{resume.experience}</p>

          </div>

        </div>
      </div>
    </div>
  );
}