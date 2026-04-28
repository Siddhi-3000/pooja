import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Siddhi from "./pages/Siddhi";
import Divin from "./pages/Divin"


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/siddhi" element={<Siddhi />} />
        <Route path="/divin" element={<Divin />} />
      </Routes>
    </Router>
  );
}