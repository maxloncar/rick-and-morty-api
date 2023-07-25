"use client";

import { publicRuntimeConfig } from "../../../../next.config";
import Image from "next/image";
import { getData } from "@/app/page";
import { use } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";

export default function Home({ params: { id } }: { params: { id: number } }) {
  const data = use(getData(`${publicRuntimeConfig?.api}/${id}`));
  const firstEpisodeData = use(getData(data.episode[0]));
  const lastEpisodeData = use(getData(data.episode[data.episode.length - 1]));
  const router = useRouter();

  const { name, image, gender, location, origin, species, status } = data;
  const { name: firstEpisodeName, episode: firstEpisode } = firstEpisodeData;
  const { name: lastEpisodeName, episode: lastEpisode } = lastEpisodeData;

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

        <div>
          <h2
            className={`py-6 text-5xl text-center font-bold tracking-tight text-gray-900 dark:text-white ${
              status == "Alive"
                ? "bg-green-700"
                : status == "Dead"
                ? "bg-red-700"
                : "bg-gray-500"
            } `}
          >
            {name}
          </h2>
          <div className="px-8 pb-4 pt-8">
            <div className="mb-4 font-normal text-2xl text-gray-700 dark:text-gray-400">
              <span className="font-bold text-gray-900 dark:text-white">
                Gender:
              </span>{" "}
              {gender}
            </div>
            <div className="mb-4 font-normal text-2xl text-gray-700 dark:text-gray-400">
              <span className="font-bold text-gray-900 dark:text-white">
                Location:
              </span>{" "}
              {location?.name}
            </div>
            <div className="mb-4 font-normal text-2xl text-gray-700 dark:text-gray-400">
              <span className="font-bold text-gray-900 dark:text-white">
                Originally From:
              </span>{" "}
              {origin?.name}
            </div>
            <div className="mb-4 font-normal text-2xl text-gray-700 dark:text-gray-400">
              <span className="font-bold text-gray-900 dark:text-white">
                Species:
              </span>{" "}
              {species}
            </div>
            <div className="mb-4 font-normal text-2xl text-gray-700 dark:text-gray-400">
              <span className="font-bold text-gray-900 dark:text-white">
                First seen in:
              </span>{" "}
              {firstEpisodeName} ({firstEpisode})
            </div>
            <div className="mb-4 font-normal text-2xl text-gray-700 dark:text-gray-400">
              <span className="font-bold text-gray-900 dark:text-white">
                Last seen in:
              </span>{" "}
              {lastEpisodeName} ({lastEpisode})
            </div>
            <div className="mb-4 font-normal text-2xl text-gray-700 dark:text-gray-400">
              <span className="font-bold text-gray-900 dark:text-white ">
                Status:
              </span>{" "}
              {status}
            </div>
          </div>
        </div>
      </div>
      <Button text="Back to the Characters" onClick={() => router.back()} />
    </div>
  );
}
