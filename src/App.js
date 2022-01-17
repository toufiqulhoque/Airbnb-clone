
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Shared/Header/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    //BEM
    <div className="app">
      <Header></Header>

      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
