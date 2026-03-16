import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const users = ["Eashan", "Rahul", "Ankit", "Rohit"];

  return (
    <div>
      <h1>Search Users</h1>

      <input
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {users
          .filter((user) =>
            user.toLowerCase().includes(search.toLowerCase())
          )
          .map((user) => (
            <li key={user}>{user}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;