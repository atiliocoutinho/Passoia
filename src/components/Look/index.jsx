// Importa a estilização
import "./LookSection.scss"


// Importa as imagens
import lipOil from "../../assets/lip-oil.png"
import eye from "../../assets/eye.png"
import face from "../../assets/face.png"
import trend from "../../assets/trend.png" 


function LookSection() {
     return (
        <section id="Looks" class="look">
            <h2>LOOKS E DICAS DE MAQUIAGEM</h2>
            <div class="lookContainer">

            <div class="lookitem">
                <h3 class="lookt">LÁBIOS</h3>
                <img src= {lipOil} alt="" />
            </div>

            <div class="lookitem">
                <h3 class="lookt">OLHOS</h3>
                <img src= {eye} alt="" />
            </div>

            <div class="lookitem">
                <h3 class="lookt">ROSTO</h3>
                <img src= {face} alt="" />
            </div>

            <div class="lookitem">
                <h3 class="lookt">TENDÊNCIA</h3>
                <img src= {trend} alt="" />
            </div>

            </div>
        </section>
    )
}

export default LookSection;
