import { useState } from "react";

interface Props {
  onClick?: () => void;
}

const Strategie = ({ onClick }: Props) => {
  const [showList, setShowList] = useState(false);

  function handleButtonClick() {
    setShowList(!showList);
    if (onClick) {
      onClick();
    }
  }
  const strats = [
    "Minimizzazione",
    "Occultamento",
    "Aggregazione",
    "Separazione",
    "Dimostrazione",
    "Informazione",
    "Rafforzamento",
    "Controllo",
  ];
  return (
    <div>
      <button
        className="w-max py-2 px-10 bg-green-600 text-black rounded-full hover:bg-green-700"
        onClick={handleButtonClick}
      >
        Strategie
      </button>
      {showList && (
        <ul>
          {strats.map((strat, index) => (
            <li key={index}>{strat}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Strategie;
