import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import StackCard from "../components/stackCard/StackCard";

class FlashCardScreen extends Component {
  state = {
    flashCards: [],
  };
  async componentDidMount() {
    try {
      const { data } = await axios.get(
        "http://192.168.1.6:8000/users/selectedWord"
      );
      console.log(data);
      this.setState({ flashCards: data["flashCards"] });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="bg-bg-gray2 w-screen h-screen flex flex-col">
        <div className="w-full h-20 bg-white flex flex-row justify-center align-middle sticky shadow-md px-5">
          <Link to="/" className="self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 self-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </Link>
          <h2 className="self-center mx-auto">Video Title</h2>
        </div>
        <nav className="flex flex-row justify-between w-full h-12 bg-white">
          <ul className="px-6 self-center">
            <li className="text-text-gray1">Flashcards</li>
          </ul>
          <ul className="px-6 self-center">
            <li className="text-text-gray1">Games</li>
          </ul>
          <ul className="px-6 self-center">
            <li className="text-text-gray1">Word List</li>
          </ul>
        </nav>
        <div className="flex flex-col px-5 mt-6 mb-3">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-between">
              <span className="mr-2 font-bold text-text-primary">1</span>
              <p className="text-sm text-text-gray1 self-center">Word I know</p>
            </div>
            <div className="flex flex-row justify-between">
              <span className="mr-2 font-bold">4</span>
              <p className="text-sm text-text-gray1 self-center">Total Words</p>
            </div>
          </div>
          <div className="bg-primary-light rounded-xl w-full h-2 mt-2">
            <div className="w-1/4 h-full rounded-xl bg-text-primary"></div>
          </div>
        </div>
        <StackCard cards={this.state.flashCards} />
        <div className="w-full flex flex-row justify-around mt-auto">
          <div className="flex flex-col justify-around w-20 h-[16vh]">
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
          <div className="flex flex-col justify-around w-20 h-[16vh]">
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
          <div className="flex flex-col justify-around w-20 h-[16vh]">
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
