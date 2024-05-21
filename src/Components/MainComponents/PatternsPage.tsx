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

interface Pattern {
  id: number;
  attributes: Attributes;
}

function PatternsPage() {
  const [error, setError] = useState<Error | null>(null);
  const [patterns, setPatterns] = useState<Pattern[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/pkbs")
      .then(({ data }) => setPatterns(data.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div className="pl-6 grid grid-cols-1 custom-scrollbar sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {patterns.map((pattern) => (
        <PatternCard
          key={pattern.id}
          pattern={pattern.attributes.Pattern}
          descrizione={pattern.attributes.Descrizione}
        />
      ))}
    </div>
  );
}

export default PatternsPage;
