function SearchBox({ search, setSearch }) {
  return (
    <input
      placeholder="Search user..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBox;