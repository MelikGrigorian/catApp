import Home from "../pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Cat from "../pages/Cat";

const App = () => {
  return (
    <Routes>
      <Route path="/:breedId?" element={<Home />} />
      <Route path="/cat/:catId" element={<Cat />} />
    </Routes>
  );
};

export default App;
