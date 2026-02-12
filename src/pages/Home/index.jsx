import Banner from "../../components/Banner";
import imgHome from "../../assets/img_home_banner.png";

function Home() {
  return (
    <Banner 
        image={imgHome}
        text="Chez vous, partout et ailleurs"
        opacity={0.6}
    />
  )
}

export default Home
