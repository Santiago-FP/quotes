import './App.css';

function Button(props){
    return(
        <button id={props.id} onClick={props.randomQuote} >Next</button>
     )
}

export default Button;