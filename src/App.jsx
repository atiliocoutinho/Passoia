// Importa os componentes necessários

import Header from "./components/00header/index.jsx";
import Banner from "./components/01banner/index.jsx";
import LookSection from "./components/02look-section/index.jsx";
import Lancamentos from "./components/03lancamentos/index.jsx";
import Newpng from "./components/04new/index.jsx";
import Footer from "./components/05footer/index.jsx";

// Exibe a estrutura principal da aplicação

function App() {
  return (
    <>
      <Header/>
       <Banner/>
      <main>
        <LookSection/>
        <Lancamentos/>
        <Newpng/>
        <Footer/>
      </main>
    </>
  );
}

export default App;