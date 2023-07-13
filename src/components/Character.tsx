import Image from "next/image";

export const Character = ({ name, image }: { name: string; image: string }) => {
  return (
    <li className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-4">
      <Image
        className="w-full h-auto"
        src={image}
        alt={`${name} Thumbnail`}
        width={300}
        height={100}
      />
      <h3 className="text-xs md:text-lg text-center font-bold dark:text-white pt-4">
        {name}
      </h3>
    </li>
  );
};
