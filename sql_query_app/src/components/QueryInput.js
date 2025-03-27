import { useState, useEffect } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-sql";
import "prismjs/themes/prism-tomorrow.css";

const QueryInput = ({ query, onRun, onClear }) => {
  const [input, setInput] = useState(query?.query || "");

  // Update the input state whenever the query prop changes
  useEffect(() => {
    setInput(query?.query || "");
  }, [query]);

  const handleCopy = () => {
    navigator.clipboard.writeText(input);
    alert("Query copied to clipboard!");
  };

  return (
    <div>
      <div className="sql-editor-container">
        <Editor
          value={input}
          onValueChange={(code) => setInput(code)}
          highlight={(code) => highlight(code, languages.sql, "sql")}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
            backgroundColor: "#2d2d2d",
            color: "#f8f8f2",
            minHeight: "100px",
            borderRadius: "4px",
            marginBottom: "10px",
          }}
          placeholder="Enter your SQL query here..."
          textareaClassName="sql-textarea"
        />
      </div>

      <div className="query-buttons">
        <button className="run-button" onClick={() => onRun(input)}>
          Run
        </button>
        <button
          className="clear-button"
          onClick={() => {
            setInput("");
            onClear();
          }}
        >
          Clear
        </button>
        <button className="copy-button" onClick={handleCopy}>
          Copy
        </button>
      </div>
    </div>
  );
};

export default QueryInput;
