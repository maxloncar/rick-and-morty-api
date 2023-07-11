import { CharactersTable } from "@/components/CharactersTable";

export default async function Home() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  const { results = [] } = data;

  return (
    <main>
      <div className="flex items-center flex-col my-10">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <span className="text-blue-600 dark:text-blue-500">
            Rick and Morty
          </span>{" "}
          Characters
        </h1>

        <CharactersTable characters={results} />
      </div>
    </main>
  );
}
