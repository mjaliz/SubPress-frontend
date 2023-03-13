import { Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import VideoPlayer from "./components/VideoPlayer";
import configureStore from "./store/configureStore";
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import ContentScreen from "./screens/ContentScreen";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/video" element={<VideoPlayer />} />
        <Route path="/content/*" element={<ContentScreen />} />
        <Route path="/sign_up" element={<SignUpScreen />} />
        <Route path="/sign_in" element={<SignInScreen />} />
        <Route path="/" element={<Navigate to="/video" replace />} />
      </Routes>
    </Provider>
  );
}

export default App;
