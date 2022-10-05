import React from "react";

export default function WordOptionCard({ open, selectedWord }) {
  const handelSpeak = (word) => {
    const msg = new SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(msg);
  };
  return (
    <div
      className={`bg-white flex flex-col justify-between w-32 m-auto rounded-lg shadow-2xl absolute top-5 right-2 z-50 ${
        open ? "" : "hidden"
      }`}
    >
      <p
        className="py-1.5 px-2 sm:cursor-pointer"
        onClick={() => handelSpeak(selectedWord)}
      >
        Listen
      </p>
      <p className="py-1.5 px-2">I Know</p>
      <p className="py-1.5 px-2">Delete</p>
    </div>
  );
}
