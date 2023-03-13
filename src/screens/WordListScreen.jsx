import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import WordOptionCard from "../components/WordOptionCard";

export default function WordListScreen() {
  const [wordOptionOpen, setWordOptionOpen] = useState(false);
  const [selectedWordIndex, setSelectedWordIndex] = useState(undefined);
  const dispatch = useDispatch();
  const { entities } = useSelector((state) => state);
  const wordsList = entities.flashCards.list.flashCards;
  console.log(wordsList);

  const handleClickWordOption = (index) => {
    setSelectedWordIndex(index);
  };

  return (
    <div className="max-h-[85vh] overflow-y-scroll">
      <div className="flex flex-col my-4 px-5">
        {wordsList.map((word, index) => (
          <div
            key={index}
            className="py-0.5 my-1.5 outline outline-2 outline-gray-100 shadow-sm rounded-lg flex flex-row h-10 bg-white "
          >
            <div
              className="flex flex-col ml-3 w-full"
              onClick={() => {
                setWordOptionOpen(false);
                setSelectedWordIndex(undefined);
              }}
            >
              <p className="text-text-gray3">{word.front[0]}</p>
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
    </div>
  );
}
