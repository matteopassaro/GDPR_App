import { useState } from "react";

interface Props {
  onClick?: () => void;
}

const MCV = ({ onClick }: Props) => {
  const [showList, setShowList] = useState(false);

  function handleButtonClick() {
    setShowList(!showList);
    if (onClick) {
      onClick();
    }
  }
  const mcv = ["Model", "Control", "View"];
  return (
    <>
      <button
        className="w-full py-2 px-4 bg-green-600 text-black rounded-full hover:bg-green-700"
        onClick={handleButtonClick}
      >
        MCV
      </button>
      {showList && (
        <ul>
          {mcv.map((fase, index) => (
            <li key={index}>{fase}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MCV;
