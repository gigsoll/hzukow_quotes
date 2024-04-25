import './App.css';
import manDotNet from './zhukov.png'
import quotes from './quotes.json';

function Quote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)]
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
