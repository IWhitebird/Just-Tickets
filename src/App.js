import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import Footer from './components/Footer/Footer';
import Login from './pages/login/login'
import Signup from './pages/signup/signup';

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <div className="content-wrapper">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/pages/login" element={<Login />}></Route>
                <Route path="/pages/signup" element={<Signup />}></Route>
            </Routes> 
            <Footer />
        </Router>
        </div>
        </div>
    </div>
  );
}

export default App;
