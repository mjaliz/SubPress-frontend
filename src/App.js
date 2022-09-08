import VideoPlayer from "./components/VideoPlayer";

import "./App.css";
import "./main.css";
// import WordCard from "./components/WordCard";
// import WordListIcon from "./components/WordListIcon";
import ComponentDevEnv from "./components/ComponentDevEnv";
import MyModal from "./components/MyModal";

function App() {
  return (
    <div>
      <VideoPlayer src="/video/demo2.mp4" />
      {/* <MyModal /> */}
      {/* <ComponentDevEnv /> */}
    </div>
  );
}

export default App;
