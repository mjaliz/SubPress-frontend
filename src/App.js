import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "./main.css";

import FlashCardScreen from "./screens/FlashCardScreen";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <Routes>
      <Route path="/demo2.mp4" element={<VideoPlayer />} />
      <Route path="/flashcard" element={<FlashCardScreen />} />
      <Route path="/" element={<Navigate to="/demo2.mp4" replace />} />
    </Routes>
  );
}

export default App;
