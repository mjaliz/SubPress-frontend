import React, { Component } from "react";
import StackCard from "../components/stackCard/StackCard";

class FlashCardScreen extends Component {
  cards = [
    {
      front: ["Night", "Is it night yet?"],
      back: ["شب", "هنوز شب نشده؟"],
    },
    {
      front: ["New", "I'm new Eap"],
      back: ["جدید", "من ایپ جدید هستم"],
    },
    {
      front: ["New", "I'm new Eap"],
      back: ["جدید", "من ایپ جدید هستم"],
    },
  ];
  state = {};
  render() {
    return (
      <div className="bg-bg-gray2 w-screen h-screen">
        <StackCard cards={this.cards} />
      </div>
    );
  }
}

export default FlashCardScreen;
