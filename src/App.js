// Dependencies
import React from "react";
import Todos from "./components/Todos";
// Styles
import "./tailwind.output.css";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-500">
      <h2 className="text-center text-4xl font-bold text-blue-900">
        TailwindCSS + React ssss
      </h2>
      <Todos />
    </div>
  );
};

export default App;
