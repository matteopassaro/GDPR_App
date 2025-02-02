import { useState } from "react";

interface Props {
  onClick?: () => void;
}

const Fasi = ({ onClick }: Props) => {
  const [showFasiList, setFasiList] = useState(false);

  function handleFasiClick() {
    setFasiList(!showFasiList);
    if (onClick) {
      onClick();
    }
  }
  const fasi = ["6.0", "7.2", "7.4", "7.5"];
  return (
    <>
      <button
        className="w-full py-2 px-4 bg-green-600 text-black rounded-full hover:bg-green-700"
        onClick={handleFasiClick}
      >
        Fasi
      </button>
      {showFasiList && (
        <ul>
          {fasi.map((fase, index) => (
            <li key={index}>{fase}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Fasi;
