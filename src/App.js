import "./App.css";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route eaxct path="/" Component={LoginPage} />
          <Route eaxct path="/signup" Component={SignUpPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
