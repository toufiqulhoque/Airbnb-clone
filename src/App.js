
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Shared/Header/Header';

function App() {
  return (
    //BEM
    <div className="app">
      <Header></Header>

      <Home></Home>
    </div>
  );
}

export default App;
