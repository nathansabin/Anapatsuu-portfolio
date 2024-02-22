import './App.css';
import Home from './pages/home/home';
import Portfolio from './pages/portfolio/portfolio';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterDesign from './assets/porfolio/character-design/character-design';
import Sketches from './assets/porfolio/Sketches/sketches.js';
import Animation from './assets/porfolio/animations/animations.js';
import Chibi from './assets/porfolio/chibi/chibi.js';
import About from './pages/about/about.js';
import Contact from './pages/contact/contact.js';

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
                entries={CharacterDesign}
                title={'Charcter Design'}
                />}
              />
              <Route
              path='/sketches'
              element={<Portfolio
                entries={Sketches}
                title={'Sketches'}
              />}
              />
              <Route
              path='/animation'
              element={<Portfolio
                entries={Animation}
                title={'Animation'}
              />}
              />
              <Route
              path='/chibi'
              element={<Portfolio
                entries={Chibi}
                title={'Chibi'}
              />}
              />
              <Route
              path='/about'
              element={<About />}
              />
              <Route
              path='/contact'
              element={<Contact />}
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
