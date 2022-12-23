import logo from "./logo.svg";
import "./App.css";
import React,{useState} from "react";
import Main from "./views/Main";
import { Routes, Route } from "react-router-dom";
import Table from "./views/Table";
import Update from "./views/Update";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route element={<Table/>} path="/" />
          <Route element={<Main/>} path="/new" />
          <Route element={<Update/>} path="/authors/:id" />
         
      </Routes>
    
    </div>
  );
}

export default App;
