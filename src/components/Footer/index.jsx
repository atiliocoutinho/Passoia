import "./Footer.scss";

import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import pix from "../../assets/pix.png";
import boleto from "../../assets/boleto.png";
import insta from "../../assets/insta.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import x from "../../assets/x.png";

function Footer() {
  return (
    <footer>
      <div class="atendimento">
        <h4>ATENDIMENTO</h4>
        <ul class="ul-atendimento">
          <li>Fale Conosco</li>
          <li>Perguntas Frequentes</li>
          <li>Meus Pedidos</li>
          <li>Nossas Lojas</li>
        </ul>
      </div>

      <div class="fpagamento">
        <h4>FORMAS DE PAGAMENTO</h4>
        <div class="wrap">
          <img class="pagamentoimg" src={mastercard} alt="Mastercard" />
          <img class="pagamentoimg" src={visa} alt="Visa" />
          <img class="pagamentoimg" src={pix} alt="Pix" />
          <img class="pagamentoimg" src={boleto} alt="Boleto" />
        </div>
      </div>

      <div class="redes">
        <h4>SIGA-NOS NAS REDES SOCIAIS</h4>
        <div class="flex">
          <img src={insta} alt="Instagram" title="Instagram" />
          <img src={facebook} alt="Facebook" title="Facebook" />
          <img src={youtube} alt="YouTube" title="YouTube" />
          <img src={x} alt="Twitter" title="Twitter" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
