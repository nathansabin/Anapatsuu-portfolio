import './App.css';
import Home from './pages/home/home';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Router>
          <main>
            <Routes>
              <Route 
              path='/'
              element={<Home />}/>
            </Routes>
          </main>
        </Router>
        <Footer /> 
      </div>
    </div>
  );
}

export default App;
