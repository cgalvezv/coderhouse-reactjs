import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
          <NavBar />
          <ItemListContainer greetings="Prontamente, acá irán los productos a vender" />
      </header>
    </div>
  );
}

export default App;
