import React from "react";
import { FaQuoteLeft, FaTwitterSquare } from "react-icons/fa";
import "./App.css";
import { Quote } from "./module";

interface Props {
  quote: Quote;
  change?: boolean;
  setChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuoteBox = ({ quote, setChange }: Props) => {
  const handlePostTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.quote)}`;
    window.open(twitterUrl, '_blank');
  }
  return (
    <div className="quote__box">
      <div className="quote__area">
        <p>
          <span>
            <FaQuoteLeft /> <s/> 
          </span>
          <s/>{quote.quote}
        </p>
      </div>
      <div className="author">
        <p>-{quote.author}</p>
      </div>
      <div className="buttons">
        <div className="icons">
          <button onClick={handlePostTwitter}>
            <FaTwitterSquare />
          </button>
        </div>
        <button className="button" onClick={() => setChange(true)}>
          Next Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
