import React, { useState } from "react";

export default function WordOptionCard({ open, onClick }) {
  return (
    <div
      className={`bg-white flex flex-col justify-between w-32 m-auto rounded-lg shadow-2xl absolute right-8 z-50 ${
        open ? "" : "hidden"
      }`}
    >
      <p className="py-1.5 px-2">Listen</p>
      <p className="py-1.5 px-2">I Know</p>
      <p className="py-1.5 px-2">Delete</p>
    </div>
  );
}
