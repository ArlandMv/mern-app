//import logo from './logo.svg';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer'; 

function App() {
  return (
    <>
      <Header/>
      <main>
        <h1>Bienvenido a TuWebApp</h1>
        <p>Edit <code>src/App.js</code> and save to reload.</p>
      </main>
      <Footer/>
    </>
  );
}

export default App;
