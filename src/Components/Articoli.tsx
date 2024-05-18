import { useState } from "react";

interface Props {
  onClick?: () => void;
}

const Articoli = ({ onClick }: Props) => {
  const [showList, setShowList] = useState(false);

  function handleButtonClick() {
    setShowList(!showList);
    if (onClick) {
      onClick();
    }
  }
  const articles = [
    "Articolo 5",
    "Articolo 6",
    "Articolo 7",
    "Articolo 12",
    "Articolo 13",
    "Articolo 25",
    "Articolo 28",
    "Articolo 32",
    "Articolo 33",
    "Articolo 34",
    "Articolo 35",
  ];
  return (
    <>
      <button
        className="w-full py-2 px-4 bg-green-600 text-black rounded-full hover:bg-green-700"
        onClick={handleButtonClick}
      >
        Articoli
      </button>
      {showList && (
        <ul>
          {articles.map((article, index) => (
            <li key={index}>{article}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Articoli;
