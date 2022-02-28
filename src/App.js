import { useState, useEffect } from 'react';
import './App.css';
import quotes from './quotes.json';
import QuoteBox from './QuoteBox';


function App() {
  //Variables y state
  const allQuotes = quotes;
  const colors = ["red","blue","yellow","purple","green","orange"];
  const [quoteAndColor, setQuoteAndColor] = useState({quote:[allQuotes[0].quote,allQuotes[0].author],color:"white"});
//Funcion que da un numero al azar, varia con la longitud
  function random(length) {
    return Math.floor(Math.random() * length)
  };
  //Funcion que cambia la cita y color
  function randomQuote(){
    
     const quote = allQuotes[ random(allQuotes.length)];
     const color = colors[ random(colors.length)];
     setQuoteAndColor({quote:[`${quote.quote}`,`${quote.author}`],color:`${color}`})
     document.getElementById(1).style.backgroundColor = color;
     document.getElementById("Next").style.backgroundColor = color;
  };
  //para el primer render
  useEffect(() => {
    randomQuote()
  },[]);
  return (
    <div className='main' id='1'>
      <QuoteBox quoteAndColor={quoteAndColor} randomQuote={randomQuote}/>
    </div>
  );
}

export default App;
