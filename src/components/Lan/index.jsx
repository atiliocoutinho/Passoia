// Importa a estilização
import "./Lancamentos.scss";

import { useState } from "react";

// Importa as imagens utilizadas na coluna
import lip00 from "../../assets/lip00.png";
import lip01 from "../../assets/lip01.png";
import lip02 from "../../assets/lip02.png";

// Importa as imagens com as variações de cores dos batons
import azul from "../../assets/azul.png";
import base from "../../assets/base.png";
import marrom from "../../assets/marrom.png";
import vermelho from "../../assets/vermelho.png";

import stars from "../../assets/stars.png";

function Lancamentos() {
  // Inicia com a cor definida:
  const [cor, setCor] = useState(azul);

  return (
    <section id="Lançamentos" class="lansection">
      <h2>APROVEITE OS LANÇAMENTOS</h2>

      <div class="landiv">
        <div class="colum">
          <img src={lip00} alt="" />
          <img src={lip01} alt="" />
          <img src={lip02} alt="" />
        </div>

        <img id="face" src={cor} alt="" />

        <div class="card">
          <img class="stars" src={stars} alt="" />
          <h3>Matte Premium</h3>
          <aside>Cores disponíveis:</aside>
          <div class="options">
            <button class="azul" onClick={() => setCor(azul)}></button>
            <button class="vermelho" onClick={() => setCor(vermelho)}></button>
            <button class="marrom" onClick={() => setCor(marrom)}></button>
            <button class="base" onClick={() => setCor(base)}></button>
          </div>
          <h4>Descrição</h4>
          <p>
            O Batom Matte possui uma fórmula inovadora desenvolvida para
            entregar o máximo de cor na primeira aplicação com um deslize suave
            e macio. Tem acabamento matte aveludado e manteiga de manga que
            ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda
            na hidratação dos lábios, textura fina e macia que não pesa nos
            lábios.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Lancamentos;
