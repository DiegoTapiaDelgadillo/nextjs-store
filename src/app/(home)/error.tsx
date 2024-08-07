"use client";

import { useState } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}
export default function Error({ error, reset }: ErrorProps) {
  useState(() => {
    console.error(error);
  });
  return (
    <div className=" text-xl">
      <h1>:(</h1>
      <p>Error</p>
      <button onClick={reset} className=" p-4 bg-red-500 ">
        Intentar de nuevo
      </button>
    </div>
  );
}
