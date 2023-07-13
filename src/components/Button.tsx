export const Button = ({ text, onClick }: { text: string; onClick: any }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded self-center"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
