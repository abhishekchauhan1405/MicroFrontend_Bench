import React, { lazy, Suspense } from "react";
import logo from './logo.svg';
import './App.css';

// lazy load child apps
const VeuApp = lazy(() => import("./components/VueAppImports"));
const version=React.version;
console.log("React App");
export default () => {
   return (
        <div className="App">
         <h1><center>MicroFrontend</center></h1>
         <h3>React App Host</h3>
         <h3>We are using React {version} Version</h3>
         <img src={logo} className="App-logo" alt="logo" />
         <Suspense fallback='Loading VeuApp'>
            <VeuApp />
         </Suspense>
       </div>
         
      
  );
};
