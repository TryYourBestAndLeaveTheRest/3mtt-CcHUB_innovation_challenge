import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import MainPage from "./pages/mainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/chats" Component={MainPage} />
      </Routes>
    </div>
  );
}

export default App;
