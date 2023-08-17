import React from "react";
import ReactDom from "react-dom";
import App from "./App"
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
                   
console.log("Wagh");
ReactDom.render(
  <>
  <BrowserRouter> <App/></BrowserRouter>
    
  </>
  ,document.getElementById("root")
)
