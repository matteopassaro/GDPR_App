import PatternCard from "./PatternCard";
import { useState, useEffect } from "react";
import axios from "axios";

interface Attributes {
  Pattern: string;
  Descrizione: string;
  Strategia?: string[];
  Contesto: string;
  Fase: string[];
  Articolo?: string[];
  Principio: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  Esempio?: string;
  MCV: string[];
  OWASP: string[];
  CWE: string[];
}

function PatternsPage() {
  const [error, setError] = useState<Error | null>(null);
  const [patterns, setPatterns] = useState<Attributes[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/pkbs")
      .then(({ data }) => setPatterns(data.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }
  console.log(patterns);
  return (
    <div className="grid grid-cols-4 gap-2">
      {patterns.map((pattern, index) => (
        <PatternCard
          key={index}
          pattern={pattern.Pattern}
          descrizione={pattern.Descrizione}
        />
      ))}
    </div>
  );
}

export default PatternsPage;
