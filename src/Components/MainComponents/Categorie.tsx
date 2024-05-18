import { useState } from "react";

interface Props {
  onClick?: () => void;
}

const Strategie = ({ onClick }: Props) => {
  const [showStrategyList, setStrategyList] = useState(false);
  const [showVulnerability, setshowVulnerability] = useState(false);
  const [showOwaspList, setShowOwaspList] = useState(false);
  const [showCweList, setShowCweList] = useState(false);
  const [showArticleList, setShowArticle] = useState(false);
  const [showFasiList, setFasiList] = useState(false);
  const [showMCVList, setMCVList] = useState(false);

  function handleMCVClick() {
    setMCVList(!showMCVList);
    if (
      showStrategyList === true ||
      showArticleList === true ||
      showFasiList === true ||
      showVulnerability === true
    ) {
      setStrategyList(false);
      setShowArticle(false);
      setFasiList(false);
      setshowVulnerability(false);
    }
    if (onClick) {
      onClick();
    }
  }
  function handleFasiClick() {
    setFasiList(!showFasiList);
    if (
      showStrategyList === true ||
      showArticleList === true ||
      showVulnerability === true ||
      showMCVList === true
    ) {
      setStrategyList(false);
      setShowArticle(false);
      setshowVulnerability(false);
      setMCVList(false);
    }
    if (onClick) {
      onClick();
    }
  }
  function handleArticleClick() {
    setShowArticle(!showArticleList);
    if (
      showStrategyList === true ||
      showFasiList === true ||
      showVulnerability === true ||
      showMCVList === true
    ) {
      setStrategyList(false);
      setFasiList(false);
      setshowVulnerability(false);
      setMCVList(false);
    }
    if (onClick) {
      onClick();
    }
  }
  const handleVulnerabilityClick = () => {
    setshowVulnerability(!showVulnerability);
    if (
      showStrategyList === true ||
      showFasiList === true ||
      showArticleList === true ||
      showMCVList === true
    ) {
      setStrategyList(false);
      setFasiList(false);
      setShowArticle(false);
      setMCVList(false);
    }
    if (showOwaspList === true || showCweList === true) {
      setShowCweList(false);
      setShowOwaspList(false);
    }
    if (onClick) {
      onClick();
    }
  };

  function handleStrategyClick() {
    setStrategyList(!showStrategyList);

    if (
      showVulnerability === true ||
      showArticleList === true ||
      showFasiList === true ||
      showMCVList === true
    ) {
      setshowVulnerability(false);
      setShowArticle(false);
      setFasiList(false);
      setMCVList(false);
    }
    if (onClick) {
      onClick();
    }
  }

  const handleOwaspButtonClick = () => {
    setShowOwaspList(!showOwaspList);
    if (showCweList === true) {
      setShowCweList(!showCweList);
    }
    if (onClick) {
      onClick();
    }
  };

  const handleCweButtonClick = () => {
    setShowCweList(!showCweList);
    if (showOwaspList === true) {
      setShowOwaspList(!showOwaspList);
    }
    if (onClick) {
      onClick();
    }
  };

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
  const OWASP = [
    "A01",
    "A02",
    "A03",
    "A04",
    "A05",
    "A06",
    "A07",
    "A08",
    "A09",
    "A10",
  ];

  const vulnerabilities = [
    "CWE-20",
    "CWE-22",
    "CWE-77",
    "CWE-78",
    "CWE-79",
    "CWE-89",
    "CWE-94",
    "CWE-269",
    "CWE-276",
    "CWE-287",
    "CWE-306",
    "CWE-434",
    "CWE-502",
    "CWE-798",
    "CWE-862",
    "CWE-863",
    "CWE-918",
  ];

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

  const mcv = ["Model", "Control", "View"];

  const fasi = ["6.0", "7.2", "7.4", "7.5"];

  return (
    <div className="flex flex-col justify-center items-center">
      <button
        className="transition-all duration-100 w-36 py-1 item-center bg-green-600 text-black rounded-full transition-background hover:bg-green-700"
        onClick={handleStrategyClick}
      >
        Strategie
      </button>
      {showStrategyList && (
        <ul>
          {strats.map((strat, index) => (
            <>
              <a href="0#">
                <li
                  className="transition-all duration-100 bg-green-400 rounded-full transition-background mt-1 text-center w-32 text-black hover:bg-green-500"
                  key={index}
                >
                  {strat}
                </li>
              </a>
            </>
          ))}
        </ul>
      )}
      <button
        className="mt-1 w-36 py-1 item-center bg-green-600 text-black rounded-full transition-background hover:bg-green-700"
        onClick={handleVulnerabilityClick}
      >
        Vulnerabilità
      </button>
      {showVulnerability && (
        <>
          <button
            className="bg-green-500 rounded-full transition-background mt-1 text-center w-32 text-black hover:bg-green-600"
            onClick={handleOwaspButtonClick}
          >
            OWASP
          </button>
          {showOwaspList && (
            <ul>
              {OWASP.map((item, index) => (
                <>
                  <a href="0#">
                    <li
                      className="bg-green-400 rounded-full transition-background mt-1 text-center w-24 text-black hover:bg-green-500"
                      key={index}
                    >
                      {item}
                    </li>
                  </a>
                </>
              ))}
            </ul>
          )}
          <button
            className="bg-green-500 rounded-full transition-background mt-1 text-center w-32 text-black hover:bg-green-600"
            onClick={handleCweButtonClick}
          >
            CWE
          </button>
          {showCweList && (
            <ul>
              {vulnerabilities.map((vulnerability, index) => (
                <>
                  <a href="0#">
                    <li
                      className="bg-green-400 rounded-full transition-background mt-1 text-center w-24 text-black hover:bg-green-500"
                      key={index}
                    >
                      {vulnerability}
                    </li>
                  </a>
                </>
              ))}
            </ul>
          )}
        </>
      )}
      <button
        className="mt-1 w-36 py-1 item-center bg-green-600 text-black rounded-full transition-background hover:bg-green-700"
        onClick={handleArticleClick}
      >
        Articoli
      </button>
      {showArticleList && (
        <ul>
          {articles.map((article, index) => (
            <>
              <a href="0#">
                <li
                  className="bg-green-400 rounded-full transition-background mt-1 text-center w-32 text-black hover:bg-green-500"
                  key={index}
                >
                  {article}
                </li>
              </a>
            </>
          ))}
        </ul>
      )}
      <button
        className="mt-1 w-36 py-1 item-center bg-green-600 text-black rounded-full transition-background hover:bg-green-700"
        onClick={handleFasiClick}
      >
        Fasi
      </button>
      {showFasiList && (
        <ul>
          {fasi.map((fase, index) => (
            <>
              <a href="0#">
                <li
                  className="bg-green-400 rounded-full transition-background mt-1 text-center w-32 text-black hover:bg-green-500"
                  key={index}
                >
                  {fase}
                </li>
              </a>
            </>
          ))}
        </ul>
      )}
      <button
        className="mt-1 w-36 py-1 item-center bg-green-600 text-black rounded-full transition-background hover:bg-green-700"
        onClick={handleMCVClick}
      >
        MCV
      </button>
      {showMCVList && ( 
        <ul>
          {mcv.map((fase, index) => (
            <>
              <a href="0#">
                <li
                  className="bg-green-400 rounded-full transition-background mt-1 text-center w-32 text-black hover:bg-green-500"
                  key={index}
                >
                  {fase}
                </li>
              </a>
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Strategie;
