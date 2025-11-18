// Importa a estilização
import "./Look-section.scss"


// Importa as imagens
import lipOil from "../../assets/lip-oil.png"
import eye from "../../assets/eye.png"
import face from "../../assets/face.png"
import trend from "../../assets/trend.png" 


function LookSection() {
     return (
        <section class="look">
            <h2>LOOKS E DICAS DE MAQUIAGEM</h2>
            <div class="lookContainer">

            <div class="lookitem">
                <h4 class="lookt">LÁBIOS</h4>
                <img src= {lipOil} alt="" />
            </div>

            <div class="lookitem">
                <h4 class="lookt">OLHOS</h4>
                <img src= {eye} alt="" />
            </div>

            <div class="lookitem">
                <h4 class="lookt">ROSTO</h4>
                <img src= {face} alt="" />
            </div>

            <div class="lookitem">
                <h4 class="lookt">TENDÊNCIA</h4>
                <img src= {trend} alt="" />
            </div>

            </div>
        </section>
    )
}

export default LookSection;
