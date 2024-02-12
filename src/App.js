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
              <Route 
              path='/character-design'
              element={<Portfolio 
                entries={characterDesign}
                title={'Charcter Design'}
                />}
              />
              <Route
              path='/sketches'
              element={<Portfolio
                entries={characterDesign}
                title={'Sketches'}
              />}
              />
              <Route
              path='/animation'
              element={<Portfolio
                entries={characterDesign}
                title={'Animation'}
              />}
              />
              <Route
              path='/chibi'
              element={<Portfolio
                entries={characterDesign}
                title={'Chibi'}
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
