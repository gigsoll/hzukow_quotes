import './App.css';
import quotes from './quotes.json';

var property;

function Quote() {
  const randomProp = obj => Object.keys(obj)[(Math.random() * Object.keys(obj).length) | 0];
  property = randomProp(quotes)
  const quote = quotes[property][Math.floor(Math.random() * quotes[property].length)]
  return (
    <div className='App'>
      <Face property={property} />
      <div className="quote">{quote}</div>
    </div>
  );
}

function Face() {
  return <img img src={require(`./img/${property}.jpg`)} alt="Жуков" className="manDotNet"/>;
}

function App() {
  return (
    <div className="App">
      <Quote></Quote>
    </div>
  );
}

export default App;
