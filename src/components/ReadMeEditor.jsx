import { useState, useEffect } from "react";
import Button from "./Button";
import { downloadMarkdown } from "../utils/download";

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

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">🍽️ Fill in your ReadMe Ingredients:</h2>

      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full mb-3"
        rows={3}
      />

      <textarea
        placeholder="Features (one per line)"
        value={features}
        onChange={(e) => setFeatures(e.target.value)}
        className="border p-2 w-full mb-3"
        rows={5}
      />

      <Button onClick={() => downloadMarkdown(markdown)}>📥 Download README.md</Button>

      <div className="mt-6 p-4 bg-gray-50 border rounded">
        <h3 className="font-bold mb-2">📄 Preview</h3>
        <pre className="whitespace-pre-wrap text-sm">{markdown}</pre>
      </div>
    </div>
  );
};

export default ReadMeEditor;
