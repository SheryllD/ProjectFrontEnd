// Add all the imports here // Add all the routes here
import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom"; 
import HomePage from "./pages/HomePage"; 
import Error from "./pages/ErrorPage"; 
import RegisterPage from './pages/RegisterPage';
import LoginPage from "./pages/LoginPage"; 

import Promodoro from "./pages/PromodoroPage"; 
import JournalPage from "./pages/JournalPage"; 
import StatisticPage from "./pages/StatisticPage"; 
import ToDoPage from "./pages/ToDoPage";
import EnergyLevelPage from "./pages/EnergyLevelPage"; 
import SleepQualityPage from './pages/SleepQualityPage';
import Errorpage from "./pages/ErrorPage"; 
import './App.css'; 

import NavBar from './components/NavBar';

function App() {
  const [currentForm, setCurrentForm] = useState('login'); 
  return (
    <>
    <div className='App'>
      <NavBar/>
<Routes>
<Route path="/" element ={<LoginPage />} />
  <Route path="/register" element ={<RegisterPage />} />
  <Route path="/login" element ={<LoginPage />} />

  <Route path="/homepage" element ={<HomePage />} />

  <Route path="/journal" element ={<JournalPage />} />

  <Route path="/statistics" element ={<StatisticPage />} />

  <Route path="/energylevel" element ={<EnergyLevelPage />} /> 

  <Route path="/sleepquality" element = {<SleepQualityPage />} />

  <Route path="/todo" element ={<ToDoPage />} />
 {/* <Route path="/todo/:todoId" element ={<ToDoPage />} />*/}
 {/* <Route path="/todo/new" element ={<ToDoPage />} />*/}
 {/* <Route path="/todo/delete/:todoId" element ={<ToDoPage />} />*/}
  {/* <Route path="/todo/complete/:todoId" element ={<ToDoPage />} />*/}
  {/* <Route path="/todo/update/:todoId" element ={<ToDoPage />} />*/}

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