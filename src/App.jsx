// Add all the imports here // Add all the routes here
// import { useState } from 'react'
import './App'
import { Route, Routes } from "react-router-dom"; 
import HomePage from "./pages/HomePage"; 
import SignupPage from "./pages/SignupPage"; 
import LoginPage from "./pages/LoginPage"; 
import Promodoro from "./pages/PromodoroPage"; 
import JournalPage from "./pages/JournalPage"; 
import StatisticPage from "./pages/StatisticPage"; 
import ToDoPage from "./pages/ToDoPage";
import EnergyLevelPage from "./pages/EnergyLevelPage"; 
import Error from "./pages/ErrorPage"; 
import Navbar from "./components/Navbar"; 
import SleepQualityPage from './pages/SleepQualityPage';
import './App.css'


function App() {
  return (
    <>
<Routes>
  <Route path="/" element ={<HomePage />} />
  <Route path="/signup" element ={<SignupPage />} />
  <Route path="/loginpage" element ={<LoginPage />} />
  <Route path="/journal" element ={<JournalPage />} />
  <Route path="/statistics" element ={<StatisticPage />} />
{/*  <route path="/energylevel" element ={<EnergyLevelPage />} /> */}
  <Route path="/sleepquality" element = {<SleepQualityPage />} />
  <Route path="/todolist" element ={<ToDoPage />} />
  <Route path="*" element ={<Error />} />
</Routes>
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