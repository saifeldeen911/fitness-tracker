import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { WorkoutForm } from "./components/WorkoutForm";
import { ProgressDashboard } from "./components/ProgressDashboard";
import { GoalsSetting } from "./components/GoalSetting";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">Fitness Tracker</h1>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-white hover:text-blue-200">
                  Log Workout
                </Link>
              </li>
              <li>
                <Link to="/progress" className="text-white hover:text-blue-200">
                  Progress
                </Link>
              </li>
              <li>
                <Link to="/goals" className="text-white hover:text-blue-200">
                  Goals
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mx-auto mt-8 p-4">
          <Routes>
            <Route path="/" element={<WorkoutForm />} />
            <Route path="/progress" element={<ProgressDashboard />} />
            <Route path="/goals" element={<GoalsSetting />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
