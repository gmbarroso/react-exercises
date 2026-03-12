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
The problem is that the code is mutating the state directly.

- Why might React fail to re-render here?
React relies on reference changes to detect updates.
Since the object is mutated and the same reference is passed to
setUser, React may not trigger a re-render.

- How would you fix it?
*/