import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

const App = () => {
  return (
    <Router>
      <main className="App">
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </main>
    </Router>
  )
}

export default App;