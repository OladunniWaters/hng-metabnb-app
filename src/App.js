import Airbnb from "./components/Airbnb";
import PlacesToStay from "./components/PlacesToStay";
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Airbnb />} />
        <Route path="placeToStay" element={<PlacesToStay />} />
      </Routes>
    </div>
  );
}

export default App;
