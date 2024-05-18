interface Props {
  pattern: string;
  descrizione: string;
}

function PatternCard({ pattern, descrizione }: Props) {
  return (
    <div>
      <div className="p-8 max-w-md w-full rounded-3xl overflow-hidden shadow-lg relative">
        <div className="absolute inset-x-0 top-0 rounded-t-xl bg-green-600 text-center font-bold text-xl flex items-center justify-center h-12 truncate">
          {pattern}
        </div>
        <div className="mt-12 h-52 overflow-hidden">
          <p className="text-gray-700 text-base">{descrizione}</p>
        </div>
      </div>
    </div>
  );
}

export default PatternCard;
