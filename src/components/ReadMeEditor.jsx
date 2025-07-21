import { useState, useEffect } from "react";
import Button from "./Button";
import { downloadMarkdown } from "../utils/download";
import "../styles/ReadMeEditor.css";

const ReadMeEditor = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const md = `# ${title}

${description}

## 🚀 Features
${features
  .split("\n")
  .filter(Boolean)
  .map((f) => `- ${f}`)
  .join("\n")}
`;
    setMarkdown(md);
  }, [title, description, features]);

  const handleDownload = () => {
    downloadMarkdown(markdown);
    setTitle("");
    setDescription("");
    setFeatures("");
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
          rows={5}
        />

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
