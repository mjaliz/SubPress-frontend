import React from "react";
import "../main.css";

export default function WordCard({
  word = "Word",
  translate = "Translate",
  tag = "Tag",
  visibility = false,
  classes,
}) {
  return (
    <div className="absolute bottom-10 left-[-40%]">
      <div
        className={`bg-white rounded-xl relative ${visibility ? "" : "hidden"}`}
      >
        <div className="bg-bg-gray1 text-text-primary font-bold h-1/3 p-3 rounded-t-xl flex flex-col justify-center align-middle">
          <p>{word}</p>
        </div>
        <div className="flex flex-row justify-between p-3">
          <p className="font-bold">{translate}</p>
          <div className="flex flex-col justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 stroke-black	"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-row justify-between p-3">
          <div className="text-text_gray2">{tag}</div>
          <div className="flex flex-row ml-2">
            view details
            <div className="self-center ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          style={{
            width: 0,
            height: 0,
            "border-left": "10px solid transparent",
            "border-right": "10px solid transparent",
            "border-top": "10px solid #fff",
            position: "absolute",
            left: "calc(50% - 10px)",
          }}
        ></div>
      </div>
    </div>
  );
}
