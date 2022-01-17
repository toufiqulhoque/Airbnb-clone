
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import SearchPage from './Pages/SearchPage/SearchPage';
import Footer from './Shared/Header/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    //BEM
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/search'>
            <SearchPage></SearchPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>




    </div>
  );
}

export default App;
