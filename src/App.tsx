import React from "react";
import Stepper from "./Stepper";
import "./App.css";

function App() {
  return (
    <div className="App">
  
    <div className="from">
      <h2 >Multi Step Form </h2>
    </div>

      <Stepper />
    </div>
  );
}

export default App;

// yarn add @material-ui/core formik @types/yup yup
