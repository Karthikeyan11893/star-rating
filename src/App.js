import "./App.css";
import Rating from "./Rating";
import { useState } from "react";

const users = [
  { id: 1, name: "Name1", rating: 0 },
  { id: 2, name: "Name2", rating: 0 },
  { id: 3, name: "Name3", rating: 0 },
  { id: 4, name: "Name4", rating: 0 },
  { id: 5, name: "Name5", rating: 0 },
];

function App() {
  const [userList, setUserList] = useState(users);
  return (
    <div className="App">
      {users.map((item, index) => (
        <Rating
          users={userList}
          setUserList={setUserList}
          name={item.name}
          key={index}
        />
      ))}
    </div>
  );
}

export default App;
