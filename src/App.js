import NavBar from './containers/NavBar/NavBar'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
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
