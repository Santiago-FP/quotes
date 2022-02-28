import './App.css';
import Button from './Button';

function QuoteBox(props){
    const quote = props.quoteAndColor.quote;
    const color = props.quoteAndColor.color;
    
        return(
        <>
        <div className= {color}>
        <h2>{quote[0]}</h2>
        <h4>{quote[1]}</h4>
        <Button id="Next" randomQuote= {props.randomQuote}/>
       </div>
        
        </>
        
    )
}

export default QuoteBox;