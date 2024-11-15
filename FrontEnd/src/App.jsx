import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sign from "./pages/Sign";
import Login from "./pages/Login";
import List from "./pages/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usersList" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
