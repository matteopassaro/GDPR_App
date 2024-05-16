import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/pkbs")
      .then(({ data }) => setRestaurants(data.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <div className="App">
      <ul>
        {restaurants.map(({ id, attributes }) => (
          <>
            <li key={id}>{attributes.Pattern}</li>
            <li key={id}>{attributes.Descrizione}</li>
            <li key={id}>{attributes.Strategia}</li>
            <li key={id}>{attributes.Contesto}</li>
            <li key={id}>{attributes.Fase}</li>
            <li key={id}>{attributes.Articolo}</li>
            <li key={id}>{attributes.Principio}</li>
            <li key={id}>{attributes.MCV}</li>
            <li key={id}>{attributes.OWASP}</li>
            <li key={id}>{attributes.CWE}</li>
            <li key={id}>{attributes.Esempio}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default App;