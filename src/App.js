import './App.css';
import Home from './pages/home/home';
import Portfolio from './pages/portfolio/portfolio';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import characterDesign from './assets/porfolio/character-design/character-design';

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
            <Routes>
              <Route 
              path='/character-design'
              element={<Portfolio 
                entries={characterDesign}
                title={'Charcter Design'}
              />}
              />
            </Routes>
          </main>
        </Router>
        <Footer /> 
      </div>
    </div>
  );
}

export default App;
