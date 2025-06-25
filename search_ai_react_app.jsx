import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Make sure this file exists in the same directory

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Welcome to Search AI</h1>
      <p className="app-description">Your smart assistant and browser in one platform.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
