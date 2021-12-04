import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Aboutme from './components/Aboutme';
import Work from './components/Work';
import Resume from './components/Resume';
import SwingBy from './components/SwingBy';
import Contact from './components/Contact';

function App() {
  return (
    <div className="w3-content" style={{maxWidth:"1300px"}}>
      <div className="w3-row">
        <Navbar />
        <Aboutme />
        <Work />
        <Resume />
        <SwingBy />
        <Contact />
      </div>
      <Footer />
    </div>

  );
}

export default App;
