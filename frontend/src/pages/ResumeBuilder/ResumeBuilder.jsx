import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import jsPDF from "jspdf";

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

  // Load saved resume
  useEffect(() => {
    const savedResume = localStorage.getItem("resume");

    if (savedResume) {
      setResume(JSON.parse(savedResume));
    }
  }, []);

  const handleChange = (e) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value,
    });
  };

  // Save Resume
  const saveResume = () => {
    localStorage.setItem(
      "resume",
      JSON.stringify(resume)
    );

    alert("Resume Saved Successfully!");
  };

  // Download PDF
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text(resume.fullName || "Your Name", 20, 20);

    doc.setFontSize(12);
    doc.text(`Email: ${resume.email}`, 20, 35);
    doc.text(`Phone: ${resume.phone}`, 20, 45);

    doc.text("Education:", 20, 65);
    doc.text(resume.education || "-", 20, 75);

    doc.text("Skills:", 20, 100);
    doc.text(resume.skills || "-", 20, 110);

    doc.text("Projects:", 20, 135);
    doc.text(resume.projects || "-", 20, 145);

    doc.text("Experience:", 20, 170);
    doc.text(resume.experience || "-", 20, 180);

    doc.save("Resume.pdf");
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

              <div className="flex gap-4 pt-4">
                <button
                  onClick={saveResume}
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
                >
                  Save Resume
                </button>

                <button
                  onClick={downloadPDF}
                  className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg"
                >
                  Download PDF
                </button>
              </div>

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