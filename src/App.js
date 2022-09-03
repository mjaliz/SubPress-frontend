import { Container } from "@mui/material";

import VideoPlayer from "./components/VideoPlayer";
import "./App.css";

function App() {
  return (
    <Container disableGutters>
      <VideoPlayer src="video/demo2.mp4" />
    </Container>
  );
}

export default App;
