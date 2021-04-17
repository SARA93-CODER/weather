import React, { useState } from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [location, setLoction] = useState(null);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const displayWeather = (location) => {
    setLoction();
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Search Location..."
          value={userInput}
          onChange={(e) => handleChange()}
        />
        <button onClick={(input) => displayWeather(input)}>Search</button>
      </div>
    </div>
  );
}

export default App;
