//import logo from './logo.svg';
import Header from './components/Header'  
import Footer from './components/Footer'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <body>
        <h1>Bienvenido a TuApp</h1>
        <p>
          Editame and save to reload.
        </p>
      </body>
      <Footer />
    </div>
  );
}

export default App;
