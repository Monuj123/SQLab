import { useState } from "react";

const ResultsTable = ({ data }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  if (!data || data.length === 0) {
    return <div className="no-results">No results to display</div>;
  }

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedData = data.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const columns = Object.keys(data[0]);

  return (
    <div>
      <table className="results-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={`${i}-${col}`}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={page === num ? "active" : ""}
            >
              {num}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultsTable;
