// Add all the imports here // Add all the routes here
// import { useState } from 'react'
import './App'
import { Route, Routes } from "react-router-dom"; 
import HomePage from "./pages/HomePage"; 
import SignupPage from "./pages/SignupPage"; 
import Login from "./pages/LoginPage"; 
/*import Promodoro from "./pages/PromodoroPage"; */
import Journal from "./pages/JournalPage"; 
import Statistics from "./pages/StatisticPage"; 
import Tasks from "./pages/ToDoPage";
import EnergyLevel from "./pages/EnergyLevelPage"; 
/*import Error from "./pages/ErrorPage"; */
/*import Navbar from "./components/Navbar"; */

function App() {
  return (
    <>
<routes>
  <route path="/" element ={<HomePage />} />
  <route path="/signup" element ={<SignupPage />} />
  <route path="/login" element ={<LoginPage />} />
  <route path="/journal" element ={<JournalPage />} />
  <route path="/statistics" element ={<StatisticPage />} />
  <route path="/energylevel" element ={<EnergyLevelPage />} />
  <route path="/sleepquality" element = {<SleepQualityPage />} />
  <route path="/todolist" element ={<TodoPage />} />
  <route path="*" element ={<Error />} />
</routes>
    </>
  );
}
export default App;

/*
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
export default App
*/