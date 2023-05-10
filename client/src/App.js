
import "./App.css";
import { Navbar } from "./components";
import { Goals, Edit, Create, Delete } from "./pages";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Goals />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/delete/:id" element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
