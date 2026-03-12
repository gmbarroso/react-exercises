import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Exercise8 from "./exercises/Exercise8";
// import Exercise8 from "./debuggingExercises/Exercise8";
import AddItemToList from "./VanillaJS/AddItemToList";

function App() {
  return (
    <div style={{ padding: 40 }}>
      <h1>React Exercises</h1>
      <AddItemToList/>
    </div>
  );
}

export default App
