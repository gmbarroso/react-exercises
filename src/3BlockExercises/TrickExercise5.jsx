import { useState } from "react";

export default function App() {
  const [user, setUser] = useState({
    name: "John",
    age: 30
  });

  const updateName = () => {
    // user.name = "Jane";
    // setUser(user);
    setUser(prev => ({ ...prev, name: "Jane" }))
  };

  return (
    <div>
      <p>{user.name}</p>
      <button onClick={updateName}>Change name</button>
    </div>
  );
}

/*
- What is wrong with this code?

- Why might React fail to re-render here?

- How would you fix it?
*/