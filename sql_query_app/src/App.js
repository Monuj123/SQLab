import { useState } from "react";
import { sampleQueries, queryResults } from "./data/queries";
import QuerySelector from "./components/QuerySelector";
import QueryInput from "./components/QueryInput";
import ResultsTable from "./components/ResultsTable";
import "./App.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
function App() {
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const handleSelect = (query) => {
    setSelectedQuery(query);
  };

  const handleRun = (queryText) => {
    setLoading(true);
    setTimeout(() => {
      const mockResults = selectedQuery
        ? queryResults[selectedQuery.id]
        : queryResults[1];
      setResults(mockResults);
      setLoading(false);

      setHistory((prev) => [
        {
          id: Date.now(),
          query: queryText,
          timestamp: new Date().toLocaleTimeString(),
        },
        ...prev.slice(0, 5),
      ]);
    }, 500);
  };

  const handleClear = () => {
    setSelectedQuery(null);
    setResults([]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 style={{ color: "#2d2d2d" }}>SQLab</h1>
      </header>

      <div className="query-selector">
        <QuerySelector queries={sampleQueries} onSelect={handleSelect} />
      </div>

      <div className="query-input">
        <QueryInput
          query={selectedQuery}
          onRun={handleRun}
          onClear={handleClear}
        />
      </div>

      <div className="results-container">
        <h4>Output:</h4>
        <p>Click on RUN button to see the output</p>
        {loading ? (
          <div className="loading-state">Loading results...</div>
        ) : (
          <ResultsTable data={results} />
        )}
      </div>

      {history.length > 0 && (
        <div className="query-history">
          <h4 style={{ color: "white" }}>Query History</h4>
          <ul>
            {history.map((item) => (
              <li key={item.id}>
                <span className="timestamp">{item.timestamp}</span>
                <SyntaxHighlighter
                  language="sql"
                  style={tomorrow}
                  customStyle={{
                    background: "#2d2d2d",
                    padding: 0,
                    margin: 0,
                    fontSize: "0.9em",
                  }}
                >
                  {item.query}
                </SyntaxHighlighter>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
