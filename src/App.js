import React from 'react'; 
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PayrollForm from "./Pages/PayrollForm";
import NavigationBar from './Pages/Navbar';

import Employee from './Pages/Employee';
import Leave from './Pages/Leave/Leave';
import Attendance from './Pages/Attendance';
import Administration from './Pages/Administration'; 
import Payroll from "./Pages/Payroll";
import DailyLog from './Pages/DailyLog';
import TaskManagement from './Pages/Time/TaskManagement';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    {/* Left-side Navbar */}
                    <div className="col-3 col-md-2 bg-light vh-100">
                        <NavigationBar />
                    </div>
                    
                    {/* Right-side Main Content */}
                    <div className="col-9 col-md-10">
                        <div className="container mt-4">
                            <Routes>
                                {/* Redirect root path ("/") to "/employee" */}
                                <Route path="/" element={<Navigate to="/employee" />} />
                                <Route path="/employee" element={<Employee />} />
                                <Route path="/leave" element={<Leave />} />
                                <Route path="/attendance" element={<Attendance />} />
                                <Route path="/attendance/daily-log" element={<DailyLog />} />
                                <Route path="/payroll" element={<PayrollForm />} />
                                <Route path="/task" element={<TaskManagement />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;




