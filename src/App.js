import React from "react";
import "./css/main.css";
import Header from "./components/header";
import Message from "./components/message";
import Search from "./components/search";
import Aside from './components/aside';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/profile/profile";




const app = () => {
  return (
    <BrowserRouter>
      <main className="main">
        <Header />
        <Aside />
        <div className="main__content">
          <Routes>
            <Route path="/search" element={<Search/>}/>
            <Route path="/message" element={<Message/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default app;