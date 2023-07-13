"use client";
import { Character } from "./Character";
import { useEffect, useState } from "react";
import { publicRuntimeConfig } from "../../next.config";

export const CharactersTable = ({ characters }: { characters: any }) => {
  const { info, results: defaultResults = [] } = characters;
  const [results, updateResults] = useState(defaultResults);
  const [page, updatePage] = useState({
    ...info,
    current: publicRuntimeConfig?.api,
  });
  const { current } = page;

  useEffect(() => {
    if (current === publicRuntimeConfig?.api) return;

    async function request() {
      const res = await fetch(current);
      const nextData = await res.json();

      updatePage({
        ...nextData.info,
        current,
      });

      if (!nextData.info?.prev) {
        updateResults(nextData.results);
        return;
      }

      updateResults((prevResults: any) => {
        return [...prevResults, ...nextData.results];
      });
    }
    request();
  }, [current]);

  function handleLoadMore() {
    updatePage((prevPage: any) => {
      return {
        ...prevPage,
        current: prevPage?.next,
      };
    });
  }

  return (
    <div className="flex flex-col">
      <ul className="grid grid-cols-4">
        {results.map((result: any) => {
          const { id, name, image } = result;
          return <Character key={id} name={name} image={image} />;
        })}
      </ul>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded self-center"
        onClick={handleLoadMore}
      >
        Load More
      </button>
    </div>
  );
};
