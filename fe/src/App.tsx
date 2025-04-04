import React from "react";
import Routes from "./routes/index";
import { BrowserRouter } from "react-router-dom";


const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>

          <Routes />
      
      </BrowserRouter>
    </div>
  );
};

export default App;
