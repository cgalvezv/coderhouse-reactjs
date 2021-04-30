import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { CartContext } from './contexts/cartContext'
import routes from './routes';
import NavBar from './containers/NavBar/NavBar'
import './App.css';

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            {
              routes.map((route, index) => <Route key={index} exact={route.exact} path={route.path} component={route.component} />)
            }
          </Switch>
        </div>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
