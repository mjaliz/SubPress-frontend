import React, { useEffect, useState, useRef } from "react";
import { Grid, Typography } from "@mui/material";

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
  const [selectedSentence, setSelectedSentence] = useState([]);
  const [videoWorks, setVideoWorks] = useState(null);

  const videoRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    setVideoElement(videoRef.current);
    setTrackElement(trackRef.current);
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
      }
    });

  const togglePaly = () => {
    // if (videoElement.paused || videoElement.ended) {
    //   videoElement.play();
    // } else {
    //   videoElement.pause();
    // }
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

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        justifyItems="center"
      >
        <Grid item>
          <video
            ref={videoRef}
            id="video"
            controls
            preload="metadata"
            poster="poster.jpg"
            width="100%"
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
                      variant="h5"
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
                <Typography variant="h5" color="#faeaa9" align="center">
                  {subtitlesFa[subtitleId - 1].text}
                </Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
        {/* {selectedSentence.length !== 0 && (
          <Grid
            container
            direction="column"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            mt={3}
          > */}
        {/* {selectedSentence.map((sentence, index) => (
              <Grid item> */}
        {/* <Card key={index} sx={{ padding: 1, width: "100%" }}> */}
        {/* <Grid container direction="row" spacing={0.5}>
                  {subtitles[sentence.id - 1]["word_tag"].map((word, index) => (
                    <Grid item key={index}>
                      <Typography
                        variant="h6"
                        color={`${
                          sentence.word === word[0] ? "#faeaa9" : "#7b797c"
                        }`}
                      >
                        {word[0]}
                      </Typography>
                    </Grid>
                  ))}
                </Grid> */}
        {/* </Card> */}
        {/* </Grid>
            ))} */}
        {/* </Grid> */}
        {/* )} */}
        <Grid item>
          <Grid container direction="column" mt={2} spacing={2.5}>
            {subtitles
              .slice(subtitleId, subtitles.length)
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
      </Grid>
    </>
  );
}

export default VideoPlayer;
