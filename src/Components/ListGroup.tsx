import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //hook
  const [selectdIndex, setSelectdIndex] = useState(-1);

  const getMessage = () => {
    return items.length === 0 && <p>Nun ce sta</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}

      <ul className="list-group">
        {items.map((pattern, index) => (
          <li
            key={pattern /*pattern.id per api.*/}
            className={
              selectdIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectdIndex(index);
              onSelectItem(pattern);
            }}
          >
            {pattern}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
