import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Application from './components/applicantprofile/Application';
import Info from './components/applicantprofile/Info';
import Dashboard from './components/franchise-dashboard/Dashboard';
import LoginForm from './components/applicantprofile/LoginForm';
import FranchiseApplicationWebsite from './components/index-page/FranchiseApplicationWebsite';
import Curd from './components/applicantprofile/Curd';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<FranchiseApplicationWebsite></FranchiseApplicationWebsite> }></Route>
          <Route path="/applynow" element={<Curd></Curd>}></Route>
          <Route path="/login" element={<LoginForm></LoginForm>}></Route>
          <Route path="/application" element={<Application></Application>}></Route>
          <Route path="/getinfo/:em" element={<Info></Info>}></Route>
          <Route path="/back" element={<Application></Application>}>  </Route>
          <Route path="/dashboard/*" element={<Dashboard></Dashboard>}></Route>
          
          


          
        </Routes>
      </BrowserRouter>

    </div>
  )
}