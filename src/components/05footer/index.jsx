
import "./Footer.scss";

import mastercard from "../../assets/mastercard.png"
import visa from "../../assets/visa.png"
import pix from "../../assets/pix.png"
import boleto from "../../assets/boleto.png"
import insta from "../../assets/insta.png"
import facebook from "../../assets/facebook.png"
import youtube from "../../assets/youtube.png"
import x from "../../assets/x.png"



function Footer() {
    return (
        <footer>
            <div class="atendimento">
                <h3>ATENDIMENTO</h3>
                <ul>
                    <li>Fale Conosco</li>
                    <li>Perguntas Frequentes</li>
                    <li>Meus Pedidos</li>
                    <li>Nossas Lojas</li>
                </ul>
            </div>
            
            <div class="fpagamento">
                <h3>FORMAS DE PAGAMENTO</h3>
                <div class="wrap">
                    <img class="pagamentoimg" src={mastercard} alt="" />
                    <img class="pagamentoimg" src={visa} alt="" />
                    <img class="pagamentoimg" src={pix} alt="" />
                    <img class="pagamentoimg" src={boleto} alt="" />
                </div>
            </div>
             
            <div class="redes">
                <h3>SIGA-NOS NAS REDES SOCIAIS</h3>
                <div class="flex">
                    <img src={insta} alt="" />
                    <img src={facebook} alt="" />
                    <img src={youtube} alt="" />
                    <img src={x} alt="" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;