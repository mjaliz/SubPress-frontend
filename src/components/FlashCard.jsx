import React from "react";

export default function FlashCard({
  word,
  wordTranslate,
  sentence,
  sentenceTranslate,
}) {
  return (
    <div className="mx-auto bg-white w-72 h-96 rounded-xl shadow-md overflow-hidden flex flex-col">
      <img
        src="poster.jpg"
        alt="poster"
        className="h-2/5 w-full object-cover"
      />
      <div className="h-3/5 flex flex-col justify-between p-3">
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
