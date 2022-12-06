import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductPage from './Pages/ProductPage';
import SingleProduct from './Pages/SingleProduct';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={< ProductPage />}></Route>
        <Route exact path='/single-product/:id' element={< SingleProduct />}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
