import Image from "next/image";

export const CharactersTable = ({ characters }: { characters: any }) => {
  return (
    <ul className="grid grid-cols-4">
      {characters.map((character: any) => {
        const { id, name, image } = character;
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
  );
};
