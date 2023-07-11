import Image from "next/image";

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

        <ul className="grid grid-cols-4">
          {results.map((result: any) => {
            console.log(result);
            const { id, name, image } = result;

            return (
              <li
                key={id}
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-10"
              >
                <Image
                  src={image}
                  alt={`${name} Thumbnail`}
                  width={300}
                  height={100}
                />
                <h3 className="text-lg text-center font-bold dark:text-white pt-4">
                  {name}
                </h3>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
