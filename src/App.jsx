// Importa os componentes necessários

import Header from "./components/Header/index.jsx";
import LookSection from "./components/Look-section/index.jsx";
import Lancamentos from "./components/Lancamentos/index.jsx";
import Newpng from "./components/New/index.jsx";
import Footer from "./components/Footer/index.jsx";

// Exibe a estrutura principal da aplicação

function App() {
  return (
    <>
        <Header/>
        <LookSection/>
        <Lancamentos/>
        <Newpng/>
        <Footer/>
    </>
  );
}

export default App;