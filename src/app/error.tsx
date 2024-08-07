"use client";
export default function GlobalError({ reset }: ErrorPageProps) {
  return (
    <main className=" text-xl h-screen flex items-center ">
      <p>Error</p>
      <button onClick={reset} className=" p-4 bg-red-500 ">
        Intentar de nuevo
      </button>
    </main>
  );
}
