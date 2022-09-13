import React, { Component } from "react";
import StackCard from "../components/stackCard/StackCard";

class FlashCardScreen extends Component {
  cards = [
    {
      src: { id: "demo2.mp4", start: "220", end: "222" },
      front: ["Night", "Is it night yet?"],
      back: ["شب", "هنوز شب نشده؟"],
    },
    {
      src: { id: "demo2.mp4", start: "50", end: "53" },
      front: ["New", "I'm new Eap"],
      back: ["جدید", "من ایپ جدید هستم"],
    },
    {
      src: { id: "demo2.mp4", start: "17", end: "22" },
      front: ["New", "I'm new Eap"],
      back: ["جدید", "من ایپ جدید هستم"],
    },
  ];
  state = {};
  render() {
    return (
      <div className="bg-bg-gray2 w-screen h-screen">
        <StackCard cards={this.cards} />
        <div className="absolute bottom-0 w-full flex flex-row justify-around mb-3 mt-20">
          <div className="flex flex-col justify-around w-20 h-32">
            <div className="bg-white shadow-xl w-20 h-20 rounded-full flex flex-col justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <p className="whitespace-nowrap text-center">Don't know</p>
          </div>
          <div className="flex flex-col justify-around w-20 h-32">
            <div className="bg-white shadow-xl w-20 h-20 rounded-full flex flex-col justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 mx-auto stroke-sky-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </div>
            <p className="whitespace-nowrap text-center">Not Sure</p>
          </div>
          <div className="flex flex-col justify-around w-20 h-32">
            <div className="bg-white shadow-xl w-20 h-20 rounded-full flex flex-col justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 mx-auto text-text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <p className="whitespace-nowrap text-center">I Know</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FlashCardScreen;
