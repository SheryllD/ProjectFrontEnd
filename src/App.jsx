// Add all the imports here // Add all the routes here
import React, { useState } from 'react'
import './App'
import { Route, Routes } from "react-router-dom"; 
import HomePage from "./pages/HomePage"; 
import RegisterPage from './pages/RegisterPage';
import LoginPage from "./pages/LoginPage"; 
import Promodoro from "./pages/PromodoroPage"; 
import JournalPage from "./pages/JournalPage"; 
import StatisticPage from "./pages/StatisticPage"; 
import ToDoPage from "./pages/ToDoPage";
import EnergyLevelPage from "./pages/EnergyLevelPage"; 
import Error from "./pages/ErrorPage"; 
//import NavBar from './components/Navbar';
import SleepQualityPage from './pages/SleepQualityPage';
import './App.css'; 
import NavBar from './components/Navbar';

function App() {
  const [currentForm, setCurrentForm] = useState('login'); 
  return (
    <>
    <div className='App'>
      <NavBar/>
<Routes>
  <Route path="/homepage" element ={<HomePage />} />
  <Route path="/registerpage" element ={<RegisterPage />} />
  <Route path="/loginpage" element ={<LoginPage />} />
  <Route path="/journal" element ={<JournalPage />} />
  <Route path="/statistics" element ={<StatisticPage />} />
{/*  <route path="/energylevel" element ={<EnergyLevelPage />} /> */}
  <Route path="/sleepqualitypage" element = {<SleepQualityPage />} />
  <Route path="/todopage" element ={<ToDoPage />} />
  <Route path="*" element ={<Error />} />
</Routes>
</div>
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