function UsersList({ users, search }) {
  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ul>
      {filteredUsers.map((user) => (
        <li key={user}>{user}</li>
      ))}
    </ul>
  );
}

export default UsersList;