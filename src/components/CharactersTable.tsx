"use client";
import { Character } from "./Character";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import { publicRuntimeConfig } from "../../next.config";
import { SearchInput } from "./SearchInput";

export const CharactersTable = ({ characters }: { characters: any }) => {
  const { info, results: defaultResults = [] } = characters;
  const [results, updateResults] = useState(defaultResults);
  const [page, updatePage] = useState({
    ...info,
    current: publicRuntimeConfig?.api,
  });
  const [searchValue, setSearchValue] = useState("");
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

  function handleOnSubmitSearch(e: any) {
    e.preventDefault();
    const endpoint = `${publicRuntimeConfig?.api}?name=${searchValue}`;

    updatePage({
      current: endpoint,
    });
  }

  return (
    <div className="flex flex-col w-9/12">
      <SearchInput
        handleOnSubmitSearch={handleOnSubmitSearch}
        setSearchValue={setSearchValue}
      />
      <ul className="grid grid-cols-4 my-6">
        {results?.map((result: any) => {
          const { id, name, image } = result;
          return <Character key={id} id={id} name={name} image={image} />;
        })}
      </ul>
      <Button text="Load More" onClick={handleLoadMore} />
    </div>
  );
};
