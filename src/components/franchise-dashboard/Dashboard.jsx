import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import SalesData from "./Sales/SalesData";
import SalesHistory from "./Sales/SalesHistory";
import Charts from "./charts/Charts";
import Settings from "./Settings";
import { User } from 'lucide-react';
import axios from 'axios';

function Dashboard() {
  const [logout, setLogout] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [pass, setPass] = useState({});
  const userId = localStorage.getItem("userId");

  function login(status) {
    setLogout(status);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:2025/user/getinfo?em=${userId}`;
        const resp = await axios.get(url);
        setUserInfo(resp.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [userId]);

  useEffect(() => {
    const fetchPass = async () => {
      try {
        const url = `http://localhost:2025/user/getpass?userId=${userId}`;
        const resp = await axios.get(url);
        setPass(resp.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchPass();
  }, [userId]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      {/* Persistent Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-600 to-purple-600 text-white shadow-lg">
        {logout === false ? <Sidebar fx={login} /> : null}
      </div>

      <div className="flex flex-col w-full">
        {/* Horizontal Navbar */}
        <header className="fixed top-0 left-64 w-[calc(100%-16rem)] h-16 z-50 bg-white shadow-md py-2">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Welcome, My Manager</h1>
            <div className="relative">
              <button
                className="flex items-center space-x-2 focus:outline-none hover:bg-gray-100 px-3 py-2 rounded-lg transition duration-300"
                onClick={toggleDropdown}
              >
                <User size={24} className="text-gray-800" />
                <span className="text-gray-800 font-medium">{userId}</span>
              </button>
              {dropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg py-2"
                  onBlur={closeDropdown}
                  tabIndex={0}
                >
                  <div className="px-4 py-2 text-gray-800">
                    <p><strong>Name:</strong> {userInfo.txtname}</p>
                    <p><strong>Email:</strong> {userInfo.em}</p>
                    <p><strong>Contact:</strong> {userInfo.cont}</p>
                    <p><strong>Address:</strong> {userInfo.add}</p>
                    <p><strong>Existing Business:</strong> {userInfo.exb}</p>
                    <p><strong>Site Address:</strong> {userInfo.sadd}</p>
                    <p><strong>City:</strong> {userInfo.city}</p>
                    <p><strong>State:</strong> {userInfo.state}</p>
                    <p><strong>Area (sq ft):</strong> {userInfo.area}</p>
                    <p><strong>Pincode:</strong> {userInfo.pin}</p>
                    <p><strong>Ownership:</strong> {userInfo.radio}</p>
                    <p><strong>Floor:</strong> {userInfo.floor}</p>
                    <p><strong>Password:</strong> {pass.password}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-500 text-xl w-full min-h-screen pt-16">
          {/* Dashboard Routes */}
          <Routes>
            <Route path="/totalsales" index element={<SalesData />} />
            <Route path="/sales-history" element={<SalesHistory />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;