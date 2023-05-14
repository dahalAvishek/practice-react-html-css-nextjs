import React, { useState, useEffect } from "react";
import "./App.css";
import QuoteBox from "./QuoteBox";
import { Quote } from "./module";

const App: React.FC = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [change, setChange] = useState<boolean>(false);
  const [color, setColor] = useState<string>("#4b3939");
  
  const getRandomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + color;
  };

  useEffect(() => {
    if (!quote || change) {
      fetch("https://dummyjson.com/quotes/random")
        .then((response) => response.json())
        .then((json) => {
          setQuote(json); 
          setChange(false); 
          setColor(getRandomColor)});
          document.documentElement.style.setProperty('--main-color', color);
    }
  }, [quote, change, color]);
  console.log(quote,color);


  return (
    <div className={change ? "app": "app show"}>
      <header>Random Quote Machine</header>
      <div className="app__body">
        {quote && <QuoteBox quote={quote} change={change} setChange={setChange} />}
      </div>
    </div>
  );
};

export default App;
