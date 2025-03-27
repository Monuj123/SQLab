const QuerySelector = ({ queries, onSelect }) => {
  return (
    <select
      className="query-selector"
      onChange={(e) =>
        onSelect(queries.find((q) => q.id === parseInt(e.target.value)))
      }
    >
      <option value="">--Select a query--</option>
      {queries.map((query) => (
        <option key={query.id} value={query.id}>
          {query.name}
        </option>
      ))}
    </select>
  );
};

export default QuerySelector;
