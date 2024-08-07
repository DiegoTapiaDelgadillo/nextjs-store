"use client";
import Image from "next/image";
import { useState } from "react";

export const Description = () => {
  const placeholderImage =
    "data:image/webp;base64,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";

  const [hasBorder, setBorder] = useState(false);
  const handeleclick = () => {
    setBorder(!hasBorder);
  };

  return (
    <section className=" py-4 px-4 sm:px-8 md:px-16 xl:px-36 2xl:px-96">
      <div className=" grid xl:grid-cols-2 gap-4 items-center">
        <div className=" flex justify-center">
          <button onClick={handeleclick} className=" cursor-pointer">
            <figure className=" relative w-96 h-96">
              <Image
                src="/img/description.jpeg"
                alt="Products marketplace"
                className=" rounded-xl shadow-2xl"
                sizes="100"
                fill
                placeholder="blur"
                blurDataURL={placeholderImage}
              />
            </figure>
          </button>
        </div>
        <div>
          <h2 className=" sm:text-3xl text-bottle-grenn font-bold text-center xl:text-start">
            Bring the future today
          </h2>
          <p className=" py-2 sm:text-xl text-center text-xs xl:text-start text-killarney">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            odio debitis accusantium ex voluptates enim sed, blanditiis dolorem
            quo! Sapiente at maiores dolores quos dicta tempore, eos vel
            delectus quaerat!
          </p>
        </div>
      </div>
    </section>
  );
};
