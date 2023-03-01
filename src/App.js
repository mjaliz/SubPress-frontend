import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "./main.css";

import FlashCardScreen from "./screens/FlashCardScreen";
import VideoPlayer from "./components/VideoPlayer";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import ContentScreen from "./screens/ContentScreen";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/demo2.mp4" element={<VideoPlayer />} />
        <Route path="/content/*" element={<ContentScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/" element={<Navigate to="/signup" replace />} />
      </Routes>
    </Provider>
  );
}

export default App;
