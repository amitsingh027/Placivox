import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import { keywords } from "../../utils/atsKeywords";
import { jobRoles } from "../../utils/jobRoles";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

export default function ATSScanner() {
  const [score, setScore] = useState(null);
  const [missing, setMissing] = useState([]);
  const [found, setFound] = useState([]);
  const [fileName, setFileName] = useState("");
  const [selectedRole, setSelectedRole] =useState("frontend");

  const extractText = async (file) => {
    setFileName(file.name);

    const arrayBuffer = await file.arrayBuffer();

    const pdf = await pdfjsLib.getDocument({
      data: arrayBuffer,
    }).promise;

    let text = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);

      const content = await page.getTextContent();

      text += content.items
        .map((item) => item.str)
        .join(" ");
    }

    analyzeResume(text);
  };

  const analyzeResume = (text) => {
    const lowerText = text.toLowerCase();

    const foundKeywords = keywords.filter((k) =>
      lowerText.includes(k)
    );

    const missingKeywords = keywords.filter(
      (k) => !lowerText.includes(k)
    );
    const atsScore = Math.round(
      (foundKeywords.length / keywords.length) * 100
    );
    setScore(atsScore);
    setFound(foundKeywords);
    setMissing(missingKeywords);
  };
  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          ATS Scanner 🔍
        </h1>
        <div className="bg-slate-900 p-8 rounded-xl">
          <input
            type="file"
            accept=".pdf"
            onChange={(e) =>
              extractText(e.target.files[0])
            }
            className="mb-6"
          />
          {fileName && (
            <p className="mb-6">
              Uploaded: {fileName}
            </p>
          )}
 
          {score !== null && (
            <>
              <div className="text-6xl font-bold text-green-400 mb-8">
                {score}%
              </div>

              <h2 className="text-2xl font-semibold mb-4">
                Found Keywords
              </h2>

              <div className="flex flex-wrap gap-3 mb-8">
                {found.map((item) => (
                  <span
                    key={item}
                    className="bg-green-600 px-3 py-2 rounded"
                  >
                    {item}
                    
                  </span>
                ))}
              </div> 
              <h2 className="text-2xl font-semibold mb-4">
                Missing Keywords
              </h2>

              <div className="flex flex-wrap gap-3">
                {missing.map((item) => (
                  <span
                    key={item}
                    className="bg-red-600 px-3 py-2 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}