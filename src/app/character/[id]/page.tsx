"use client";

import { publicRuntimeConfig } from "../../../../next.config";
import Image from "next/image";
import { getData } from "@/app/page";
import { use } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";

export default function Home({ params: { id } }: { params: { id: number } }) {
  const data = use(getData(`${publicRuntimeConfig?.api}/${id}`));
  const firstEpisode = use(getData(data.episode[0]));
  const router = useRouter();

  console.log(data);

  const { name, image, gender, location, origin, species, status } = data;
  const { name: firstEpisodeName, episode } = firstEpisode;

  return (
    <div className="grid h-screen place-items-center">
      <div className="flex-col max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          className="rounded-t-lg w-full"
          src={image}
          alt={`${name} Thumbnail`}
          width={400}
          height={100}
          priority={true}
        />

        <div className="p-8">
          <h2 className="mb-8 text-5xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h2>

          <p className="mb-4 font-normal text-2xl text-gray-700 dark:text-gray-400">
            <span className="font-bold text-gray-900 dark:text-white">
              Gender:
            </span>{" "}
            {gender}
          </p>
          <p className="mb-4 font-normal text-2xl text-gray-700 dark:text-gray-400">
            <span className="font-bold text-gray-900 dark:text-white">
              Location:
            </span>{" "}
            {location?.name}
          </p>
          <p className="mb-4 font-normal text-2xl text-gray-700 dark:text-gray-400">
            <span className="font-bold text-gray-900 dark:text-white">
              Originally From:
            </span>{" "}
            {origin?.name}
          </p>
          <p className="mb-4 font-normal text-2xl text-gray-700 dark:text-gray-400">
            <span className="font-bold text-gray-900 dark:text-white">
              Species:
            </span>{" "}
            {species}
          </p>
          <p className="mb-4 font-normal text-2xl text-gray-700 dark:text-gray-400">
            <span className="font-bold text-gray-900 dark:text-white">
              First seen in:
            </span>{" "}
            {firstEpisodeName} ({episode})
          </p>
          <p className="mb-4 font-normal text-2xl text-gray-700 dark:text-gray-400">
            <span className="font-bold text-gray-900 dark:text-white">
              Status:
            </span>{" "}
            {status}
          </p>
        </div>
      </div>
      <Button text="Back to the Characters" onClick={() => router.back()} />
    </div>
  );
}
