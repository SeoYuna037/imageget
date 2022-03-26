import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

import Header from './components/Header';
import PictureList from "./components/PictureList";


function App() {


    return (
      <Router>
        <Header/>
        <PictureList/>
      </Router>
    );
}

export default App;
