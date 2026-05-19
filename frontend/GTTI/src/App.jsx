import React from "react";
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp.jsx";
import FoodPage from "./Pages/FoodPage.jsx";
import ImportPage from "./Pages/ImportPage.jsx";
import ExportPage from "./Pages/ExportPage.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import ReportPage from "./Pages/ReportPage.jsx";
import { Routes, Route, Navigate } from "react-router-dom";


function App () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login"/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<SignUp />}/>
        <Route path="/Food" element={<FoodPage />}/>
        <Route path="/Import" element={<ImportPage />}/>
        <Route path="/Export" element={<ExportPage />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/Report" element={<ReportPage />}/>
      </Routes>
    </div>
  )
}

export default App;