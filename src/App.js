import './App.css';

function Quote() {
  const quotes = [
    "Зробіть звіт детальнішим, я не хочу читати код",
    "Ой у вас такі великі звіти, мені лінь їх читати",
    "Паралелс оновився як завжди не вчасно",
    "Зробіть вже нормальні висновки, ато нічого не понятно",
    "Ви уявіть якби я занурювався та аналізував код кожного студента",
    "Що вас засмучує? — С#",
    "Переробіть блок схему, взагалі не правильно",
    "Де відступи?",
    "Чому інтервал не півтора?",
    "Чому забагато відступів?",
    "Чому ви все розділяєте ентерами?",
    "Ви що не знаєте що таке розрив сторінки?",
    "Ну то зразок був не найкращої якості",
    "Я вирішив — ви змушені",
    "А чому у вас все в блокноті? Треба архіви робити"
];
  const quote = quotes[Math.floor(Math.random() * quotes.length)]
  return (<p className="quote">{quote}</p>)
}

function App() {
  return (
    <div className="App">
      <Quote></Quote>
    </div>
  );
}

export default App;