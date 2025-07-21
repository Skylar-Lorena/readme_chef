import { useState, useEffect } from "react";
import Button from "./Button";
import { downloadMarkdown } from "../utils/download";
import "../styles/ReadMeEditor.css";

const ReadMeEditor = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [gitClone, setGitClone] = useState("");
  const [otherSetup, setOtherSetup]= useState("");
  const [author, setAuthor] = useState("");
  const [license, setLicense] = useState("");
  const [projectType, setProjectType] = useState("react");
  const [markdown, setMarkdown] = useState("");

  const getSetupInstructions = () => {
    switch (projectType) {
      case "node":
        return `git clone ${gitClone}
cd ${title.toLowerCase().replace(/\s+/g, "-")}
npm install
node index.js`;
      case "python":
        return `git clone ${gitClone}
cd ${title.toLowerCase().replace(/\s+/g, "-")}
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py`;
      case "react":
      default:
        return `git clone ${gitClone}
cd ${title.toLowerCase().replace(/\s+/g, "-")}
npm install
npm start`;
    }
  };

  useEffect(() => {
    const md = `# ${title}

${description}

## 🚀 Features
${features
  .split("\n")
  .filter(Boolean)
  .map((f) => `- ${f}`)
  .join("\n")}

## 🔧 Setup
\`\`\`bash
${getSetupInstructions()}
${otherSetup
  .split("\n")
  .filter(Boolean)
  .map((f) => `- ${f}`)
  .join("\n")}
}
\`\`\`

## 👤 Author
${author}

## 📄 License
${license}
`;
    setMarkdown(md);
  }, [title, description, features, gitClone, otherSetup, author, license, projectType]);

  const handleDownload = () => {
    downloadMarkdown(markdown); 
    setTitle("");
    setDescription("");
    setFeatures("");
    setGitClone("");
    setOtherSetup("");
    setAuthor("");
    setLicense("");
    setProjectType("react");
  };

  return (
    <div className="editor-container">
      <div className="form-section">
        <h2>🍽️ Fill in your ReadMe Ingredients:</h2>

        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
        />

        <textarea
          placeholder="Features (one per line)"
          value={features}
          onChange={(e) => setFeatures(e.target.value)}
          rows={4}
        />

        <input
          type="text"
          placeholder="GitHub Clone URL"
          value={gitClone}
          onChange={(e) => setGitClone(e.target.value)}
        />

        <textarea
          placeholder="Additional Project Instructions(one per line)"
          value={otherSetup}
          onChange={(e) => setOtherSetup(e.target.value)}
          rows={4}
        />

        <select
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
        >
          <option value="react">React</option>
          <option value="node">Node.js</option>
          <option value="python">Python</option>
        </select>

        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

     <select
  value={license}
  onChange={(e) => setLicense(e.target.value)}
>
  <option value="">-- Select License --</option>
  <option value="MIT">MIT</option>
  <option value="Apache-2.0">Apache 2.0</option>
  <option value="GPL-3.0">GNU GPLv3</option>
  <option value="BSD-3-Clause">BSD 3-Clause</option>
  <option value="Unlicensed">Unlicensed</option>
</select>


        <Button onClick={handleDownload}>📥 Download README.md</Button>
      </div>

      <div className="preview-section">
        <h3>📄 Preview</h3>
        <pre>{markdown}</pre>
      </div>
    </div>
  );
};

export default ReadMeEditor;
