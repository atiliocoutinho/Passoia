import "./Banner.scss"
import bannerimg from "../../assets/Banner.png"

function Banner() {
    return (
      <div class="hero">
      <img class = "banner" src={bannerimg} alt=""/>
      </div>
    );
}

export default Banner;
