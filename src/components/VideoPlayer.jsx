import React, { useEffect, useState, useRef, createRef } from "react";

import "./VideoPlayer.css";
import "../main.css";
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

  console.log("renderrrr");

  const videoRef = useRef(null);
  const trackRef = useRef(null);
  const subtitlesRef = useRef(null);
  const scrollRefs = useRef([]);

  scrollRefs.current = [...Array(subtitles.length).keys()].map(
    (_, i) => scrollRefs.current[i] ?? createRef()
  );

  const scrollSmoothHandler = (index) => {
    const element = scrollRefs.current[index].current;
    const yOffset = -410;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

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
        const id = parseInt(cues["0"].id);
        setSubtitleId(id);
        if (id > 1) scrollSmoothHandler(id - 2);
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

  return (
    <>
      <div>
        <div>
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
        </div>
        <div className="bg-bg-dark1">
          {subtitleId && (
            <div>
              <div>
                {subtitles[subtitleId - 1]["word_tag"].map((word, index) => (
                  <div>
                    <p
                      key={index}
                      onClick={() => handleSubtitleClick(word[0], subtitleId)}
                    >
                      {word[0]}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-text-gold">
                  {subtitlesFa[subtitleId - 1].text}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bg-bg-dark2">
        <div ref={subtitlesRef}>
          {subtitles.map((subtitle, index) => (
            <div key={index} ref={scrollRefs.current[index]}>
              <p className="text-text-gray" key={index}>
                {subtitle.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default VideoPlayer;
