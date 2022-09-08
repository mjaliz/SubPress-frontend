import React, { useState } from "react";
import WordDetailsCard from "./WordDetailsCard";
import MyModal from "./MyModal";

export default function ComponentDevEnv() {
  return (
    <div className="bg-bg-dark1 w-screen h-screen flex flex-col justify-center">
      <div className="bg-white flex flex-col justify-between w-28 m-auto rounded-lg">
        <p className="py-1.5 px-2">Listen</p>
        <p className="py-1.5 px-2">I Know</p>
        <p className="py-1.5 px-2">Delete</p>
      </div>
    </div>
  );
}
