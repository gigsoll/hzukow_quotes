import './App.css';
import manDotNet from './img/derech.jpg'
import quotes from './quotes.json';

function Quote() {
  const randomProp = obj => Object.keys(obj)[(Math.random() * Object.keys(obj).length) | 0];
  let property = randomProp(quotes)
  const quote = quotes[property][Math.floor(Math.random() * quotes[property].length)]
  return (<div className="quote">{quote}</div>)
}

function Face() {
  return <img img src={manDotNet} alt="Жуков" className="manDotNet"/>;
}

function App() {
  return (
    <div className="App">
      <Face></Face>
      <Quote></Quote>
    </div>
  );
}

export default App;
