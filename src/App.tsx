import { useState } from "react";
import quotes from "./assets/quotes.json";
import colors from "./assets/colors.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./App.css";

function App() {
  const getQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const getColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  type quoteTypes = {
    quote: string;
    author: string;
  };

  const [quote, setQuote] = useState<quoteTypes>(getQuote());
  const [color, setColor] = useState(getColor());
  const [active, setActive] = useState<boolean>(false);

  const changeQuote = () => {
    setActive(true);
    setTimeout(() => {
      setQuote(getQuote());
      setColor(getColor());
      setActive(false);
    }, 1000);
  };

  const transition = "all 1s ease-in-out";

  return (
    <>
      <div
        className="background"
        style={{ backgroundColor: color, transition }}
      >
        <div id="quote-box">
          <div id="textfield">
            <div
              id="text"
              style={{ color: color, transition }}
              className={`color-text ${active ? "active" : ""}`}
            >
              <h1>
                <FaQuoteLeft id="quotes" />
                {quote.quote}.
                <FaQuoteRight id="quotes" />
              </h1>
            </div>
            <div
              id="author"
              style={{ color: color, transition }}
              className={`color-text ${active ? "active" : ""}`}
            >
              <h4 style={{ transition }}>- {quote.author}</h4>
            </div>
          </div>
          <div id="links">
            <a
              href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text={quote.quote}"
              id="tweet-quote"
              target="_blank"
              style={{ backgroundColor: color, transition }}
            >
              <FaTwitter />
            </a>
            <button
              id="new-quote"
              onClick={changeQuote}
              style={{ backgroundColor: color, transition }}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
