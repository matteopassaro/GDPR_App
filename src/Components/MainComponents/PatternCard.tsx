interface Props {
  pattern: string;
  descrizione: string;
}

function PatternCard({ pattern, descrizione }: Props) {
  return (
    <div className="p-4 max-w-md w-full rounded-3xl overflow-hidden shadow-lg relative">
      <div className="absolute inset-x-0 top-0 rounded-t-xl bg-green-600 text-center font-bold text-lg flex items-center justify-center h-10 truncate">
        {pattern}
      </div>
      <div className="mt-10 h-40 overflow-hidden">
        <p className="text-gray-700 text-xl text-center ">{descrizione}</p>
      </div>
    </div>
  );
}

export default PatternCard;
