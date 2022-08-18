import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { AppProvider } from "./components/context";

import "./style.css"
ReactDOM.render(
<AppProvider>
    <App />
</AppProvider> 
   
    ,
    document.getElementById("root")
)
