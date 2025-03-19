import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Application from "./src/components/applicantprofile/Application";
import Info from "./src/components/applicantprofile/Info";
export default function Adminside() {
    return (
      <div>
        <BrowserRouter>
          
          <Routes>
             
  
              <Route path="/" element={<Application></Application>}></Route> 
            <Route path="/getinfo/:em" element={<Info></Info>}></Route>
            <Route path="/back" element={<Application></Application>}></Route>  
          </Routes>
        </BrowserRouter>
  
      </div>
    )
  }