import Image from "next/image";
import Link from "next/link";

export const Character = ({
  id,
  name,
  image,
}: {
  id: number;
  name: string;
  image: string;
}) => {
  return (
    <li className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-4 cursor-pointer">
      <Link href="/character/[id]" as={`/character/${id}`}>
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
      </Link>
    </li>
  );
};
