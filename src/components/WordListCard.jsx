import React, { useState } from "react";
import { Link } from "react-router-dom";
import WordOptionCard from "./WordOptionCard";

export default function WordListCard({ open, onOpenChange, selectedWordList }) {
  const [wordOptionOpen, setWordOptionOpen] = useState(false);
  const [selectedWordIndex, setSelectedWordIndex] = useState(undefined);

  const handleClickWordOption = (index) => {
    setSelectedWordIndex(index);
  };
  return (
    <div className={open ? " sticky bottom-0" : "hidden"}>
      <div
        onClick={() => {
          onOpenChange();
          setSelectedWordIndex(undefined);
        }}
        className="bg-black opacity-60 z-30 w-screen h-screen"
      ></div>
      <div className="bg-white flex flex-col w-full rounded-t-xl min-h-[50vh] m-auto p-3 pb-9 z-30 absolute bottom-0">
        <div className="flex flex-row justify-between">
          <p>Chosen words:</p>
          <svg
            onClick={() => {
              onOpenChange();
              setSelectedWordIndex(undefined);
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 sm:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex flex-col my-6 h-[30vh] overflow-y-scroll px-2">
          {selectedWordList.map((word, index) => (
            <div
              key={index}
              className="py-0.5 my-1 outline outline-2 outline-gray-100 shadow-md rounded-lg flex flex-row"
            >
              <div
                className="flex flex-col ml-3 w-full"
                onClick={() => {
                  setWordOptionOpen(false);
                  setSelectedWordIndex(undefined);
                }}
              >
                <p className="text-text-gray3">{word[0]}</p>
                <p className="text-text-gray4">{word[1]}</p>
              </div>
              <div className="self-center ml-auto relative">
                <svg
                  onClick={() => {
                    setWordOptionOpen(!wordOptionOpen);
                    handleClickWordOption(index);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-text-gray3 sm:cursor-pointer"
                >
                  <path
                    className="content-start"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
                <WordOptionCard
                  open={index === selectedWordIndex && wordOptionOpen}
                  selectedWord={word[0]}
                />
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/flashcard"
          className="w-full bg-text-primary h-12 text-white rounded-3xl shadow-lg mt-auto flex flex-row justify-center"
        >
          <p className="self-center">Review Flashcards</p>
        </Link>
      </div>
    </div>
  );
}
