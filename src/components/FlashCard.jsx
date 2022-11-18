import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import config from "../config.json";

export default function FlashCard({ src, word, sentence, onClick, flipped }) {
  const [videoElement, setVideoElement] = useState(null);
  const [showPlayIcon, setShowPlayIcon] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    setVideoElement(videoRef.current);
  }, [src]);

  const togglePlay = () => {
    if (videoElement.paused || videoElement.ended) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };

  const handleOnPlay = () => {
    setShowPlayIcon(false);
    setTimeout(() => {
      videoElement.pause();
    }, (src.end - src.start + 0.1) * 1000);
  };

  const handleOnPause = () => {
    videoElement.currentTime = src.start;
    setShowPlayIcon(true);
  };
  return (
    <div className="mx-auto bg-white w-[22rem] h-[50vh] rounded-xl shadow-md overflow-hidden flex flex-col">
      <div className="relative w-full">
        <video ref={videoRef} onPlay={handleOnPlay} onPause={handleOnPause}>
          <source
            src={`${config.apiUrl}/video${src.title}#t=${src.start},${src.end}`}
            type="video/mp4"
          />
        </video>
        <div
          className={`absolute top-16 left-[calc(50%_-_1.5rem)] ${
            showPlayIcon ? "" : "hidden"
          } ${flipped ? "" : "hidden"} `}
          onClick={togglePlay}
        >
          <div className="w-12 h-12 rounded-full bg-black opacity-60 relative"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 stroke-white fill-white absolute top-2.5 left-[calc(50%_-_0.8rem)]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        </div>
      </div>
      <div
        className="h-3/5 flex flex-col justify-between p-3"
        onClick={onClick}
      >
        <p className="text-center text-text-gray3 font-bold">{word}</p>
        <div className="mb-4">
          <p className="text-center mb-3">{sentence}</p>
          <div className="flex flex-row justify-center">
            <p className="text-center text-xs text-text-gray1">
              Tap to see the translation
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-text-gray1 self-center ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
