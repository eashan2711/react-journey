import { useState } from "react";
import SearchBox from "./SearchBox";
import UsersList from "./UsersList";

function App() {
  const [search, setSearch] = useState("");

  const users = ["Eashan", "Rahul", "Ankit", "Rohit"];

  return (
    <div>
      <h1>Search Users</h1>

      <SearchBox search={search} setSearch={setSearch} />

      <UsersList users={users} search={search} />
    </div>
  );
}

export default App;