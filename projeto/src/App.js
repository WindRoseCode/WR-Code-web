import logo from './logo.svg';
import './App.css';
import Header from './components/geral/Header';
import Footer from './components/geral/Footer';
import Equipe from './components/home/conheca_nossa_equipe/Equipe';
import NossosServicos from './components/home/nossosServicos/NossosServicos';
import QuemSomos from './components/home/quemSomos/QuemSomos';




function App() {
  return (
    <div className="App">
      <Header/>
      <QuemSomos/>
      <NossosServicos/>
      <Equipe/>
      <Footer/>
    </div>
  );
}

export default App;
