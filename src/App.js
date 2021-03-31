import { BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './containers/NavBar/NavBar'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './containers/CartContainer/CartContainer'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route path="/category/:categoryId" component={ItemListContainer} />
          <Route path="/item/:itemId" component={ItemDetailContainer}/>
          <Route path="/cart" component={CartContainer} />
          <Route exact path="*">
            Generar un 404 page
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
