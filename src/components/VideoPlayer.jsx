import React, { useEffect, useState, useRef } from "react";
import { Grid, Typography, Slide } from "@mui/material";

import "./VideoPlayer.css";
import subtitleFile from "../subWithWords.json";
import subtitleFaFile from "../subtitle-fa.json";
// import PlayerControls from "./PlayerControls";

const subtitles = subtitleFile;
const subtitlesFa = subtitleFaFile;

function VideoPlayer({ src }) {
  const [videoElement, setVideoElement] = useState(null);
  const [trackElement, setTrackElement] = useState(null);
  const [subtitleId, setSubtitleId] = useState(null);
  const [subtitlesContainer, setSubtitleContainer] = useState(null);
  const [selectedSentence, setSelectedSentence] = useState([]);
  const [videoWorks, setVideoWorks] = useState(null);

  const videoRef = useRef(null);
  const trackRef = useRef(null);
  const subtitlesRef = useRef(null);

  useEffect(() => {
    setVideoElement(videoRef.current);
    setTrackElement(trackRef.current);
    setSubtitleContainer(subtitlesRef.current);
    setVideoWorks(!!document.createElement("video").canPlayType);
  }, []);

  if (videoWorks) {
    videoElement.controls = true;
  }

  if (trackElement)
    trackElement.addEventListener("cuechange", (event) => {
      let cues = event.target.track.activeCues;
      if (cues.length === 1) {
        setSubtitleId(cues["0"].id);
        moveElement();
      }
    });

  const togglePaly = () => {
    videoElement.pause();
  };

  const handleSubtitleClick = (word, id) => {
    console.log("This word clicked", word);
    const selectedSubtitle = {
      word,
      id,
    };
    setSelectedSentence([...selectedSentence, selectedSubtitle]);
    togglePaly();
  };

  const moveElement = () => {
    subtitlesContainer.style.top =
      parseInt(getComputedStyle(subtitlesContainer).top) - 52 + "px";
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        justifyItems="center"
        position="fixed"
        top="0"
      >
        <Grid item height="280px">
          <video
            ref={videoRef}
            id="video"
            controls
            preload="metadata"
            poster="poster.jpg"
            width="100%"
            height="100%"
          >
            <source src={src} type="video/mp4" />

            <track
              ref={trackRef}
              src="demo2-en.vtt"
              kind="metadata"
              srcLang="en"
              default
            />
          </video>
        </Grid>
        <Grid
          item
          sx={{ width: "100%", minHeight: "80px", backgroundColor: "#1a151b" }}
        >
          {subtitleId && (
            <Grid container direction="column">
              <Grid
                container
                direction="row"
                spacing={0.5}
                justifyContent="center"
                padding={2}
              >
                {subtitles[subtitleId - 1]["word_tag"].map((word, index) => (
                  <Grid item>
                    <Typography
                      variant="h6"
                      sx={{ cursor: "pointer", color: "#ffffff" }}
                      key={index}
                      onClick={() => handleSubtitleClick(word[0], subtitleId)}
                    >
                      {word[0]}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
              <Grid item padding={2} pt={0}>
                <Typography variant="h6" color="#faeaa9" align="center">
                  {subtitlesFa[subtitleId - 1].text}
                </Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item mt="380px">
        <Grid
          ref={subtitlesRef}
          container
          direction="column"
          mt={2}
          spacing={2.5}
          sx={{
            position: "absolute",
            transition: "all .5s ease-in-out",
            zIndex: "-1",
          }}
        >
          {subtitles
            // .slice(subtitleId, subtitles.length)
            .map((subtitle, index) => (
              <Grid item key={index} justifyItems="center">
                <Typography
                  key={index}
                  variant="h6"
                  sx={{ color: "#7b797c" }}
                  align="center"
                >
                  {subtitle.text}
                </Typography>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </>
  );
}

export default VideoPlayer;
