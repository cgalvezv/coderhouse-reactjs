import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemListContainer/ItemList/Item/ItemDetailContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
          <NavBar />
          <ItemDetailContainer />
          <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;
