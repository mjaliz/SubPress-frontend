import React, { useEffect, useState, useRef, createRef } from "react";

import "./VideoPlayer.css";
import "../main.css";
import subtitleFile from "../subWithWords.json";
import subtitleFaFile from "../subtitle-fa.json";
import WordCard from "./WordCard";

const subtitles = subtitleFile;
const subtitlesFa = subtitleFaFile;

function VideoPlayer({ src }) {
  const [videoContainerElement, setVideoContainerElement] = useState(null);
  const [videoElement, setVideoElement] = useState(null);
  const [trackElement, setTrackElement] = useState(null);
  const [subtitleId, setSubtitleId] = useState(null);
  const [selectedSentence, setSelectedSentence] = useState([]);
  const [videoWorks, setVideoWorks] = useState(null);
  const [wordCardId, setWordCardId] = useState(undefined);

  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const trackRef = useRef(null);
  const subtitlesRef = useRef(null);
  const scrollRefs = useRef([]);

  scrollRefs.current = [...Array(subtitles.length).keys()].map(
    (_, i) => scrollRefs.current[i] ?? createRef()
  );

  const scrollSmoothHandler = (index) => {
    const element = scrollRefs.current[index].current;
    const yOffset = -videoContainerElement.offsetHeight;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    // scrollRefs.current[index].current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setVideoContainerElement(videoContainerRef.current);
    setVideoElement(videoRef.current);
    setTrackElement(trackRef.current);
    setVideoWorks(!!document.createElement("video").canPlayType);
  }, []);

  useEffect(() => {
    setVideoContainerElement(videoContainerRef.current);
  }, [subtitleId]);

  if (videoWorks) {
    videoContainerElement.controls = true;
  }

  if (trackElement)
    trackElement.addEventListener("cuechange", (event) => {
      let cues = event.target.track.activeCues;
      if (cues.length === 1) {
        const id = parseInt(cues["0"].id);
        setSubtitleId(id);
        if (id > 2) scrollSmoothHandler(id - 2);
      }
    });

  const togglePaly = () => {
    videoElement.pause();
  };

  const handleSubtitleClick = (word, wordId, subtitleId) => {
    console.log("This word clicked", word);
    const selectedSubtitle = {
      word,
      subtitleId,
    };
    setSelectedSentence([...selectedSentence, selectedSubtitle]);
    setWordCardId(wordId);
    togglePaly();
  };

  const handleListSubtitleClicked = (index) => {
    videoElement.currentTime = subtitles[index].startTime;
  };

  return (
    <>
      <div ref={videoContainerRef} className="sticky top-0">
        <video
          ref={videoRef}
          id="video"
          controls
          preload="metadata"
          poster="poster.jpg"
          width="100%"
          height="100%"
          className="md:h-[50vh]"
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
        <div className="bg-bg-dark1 min-h-[8vh] py-1">
          {subtitleId && (
            <>
              <div className="flex flex-row flex-wrap justify-center py-1 px-2">
                {subtitles[subtitleId - 1]["word_tag"].map((word, index) => (
                  <>
                    <div
                      className="text-[#fff] font-bold px-0.5 cursor-pointer relative"
                      key={index}
                      onClick={() =>
                        handleSubtitleClick(word[0], index, subtitleId)
                      }
                    >
                      {word[0]}
                      <WordCard
                        visibility={index === wordCardId}
                        word={word[0]}
                        classes=""
                      />
                    </div>
                  </>
                ))}
              </div>
              <p className="text-text-gold font-bold text-center py-1">
                {subtitlesFa[subtitleId - 1].text}
              </p>
            </>
          )}
        </div>
      </div>
      <div ref={subtitlesRef} className="bg-bg-dark2 ">
        {subtitles.map((subtitle, index) => (
          <p
            ref={scrollRefs.current[index]}
            key={index}
            className={`${
              subtitleId - 1 === index ? "text-white" : "text-text-gray"
            } text-center py-3 cursor-pointer`}
            onClick={() => handleListSubtitleClicked(index)}
          >
            {subtitle.text}
          </p>
        ))}
      </div>
    </>
  );
}

export default VideoPlayer;