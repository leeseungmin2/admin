import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/page/Main';
import Sub1 from './components/page/Sub1';
import Sub2 from './components/page/Sub2';
import './assets/css/style.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Sub1" element={<Sub1 />} />
        <Route path="/Sub2" element={<Sub2 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;