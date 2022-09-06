import React from "react";
import "../main.css";

export default function WordCard() {
  return (
    <div className="bg-bg-dark2 min-h-screen flex flex-col justify-center">
      <div className="bg-white w-52 h-36 m-auto rounded-xl">
        <div className="bg-bg-gray1 text-text-primary h-1/3 p-3 rounded-t-xl flex flex-col justify-center align-middle">
          <p>Word</p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="p-3">Translate</div>
          <div className="p-3">speaker Icon</div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="p-3">WordTag</div>
          <div className="p-3">view details</div>
        </div>
      </div>
    </div>
  );
}
