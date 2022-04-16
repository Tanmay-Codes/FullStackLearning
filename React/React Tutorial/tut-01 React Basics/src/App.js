import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Counter from './components/Counter';
import List from './components/List';
function App() {
  return (
    <div className="App">
      <p>Hello World</p>
      <Header />
      <Content />
      <Counter />
      <List />
    </div>
  );
}

export default App;
