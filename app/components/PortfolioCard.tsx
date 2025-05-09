"use client";

import Image from "next/image";
import { Button } from "./Button";

export function PortfolioCard({
  image,
  title,
  link,
}: {
  image: string;
  title: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="__blank"
      className="max-w-sm shadow-md bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 pb-2"
    >
      <div className="h-[300px] w-full relative overflow-hidden">
        <Image
          className="rounded-t-lg object-cover"
          src={image}
          alt="Blog post"
          fill
        />
      </div>

      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-8 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <Button text="Read more" variant="dark" />
      </div>
    </a>
  );
}
