import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
// import About from "./components/About";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {


  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
    
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      
    }
  };
  return (
    <>
     {/* <Router> */}
      <Navbar
        title="TextUtils"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <div className="container my-3">
        
      {/* <Routes> */}
          {/* <Route exact path="/About" element={<About />}/> */}
             
          {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze" />}/> */}
          <TextForm heading="Enter the text to analyze" />
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
