import Banner from "../../components/Banner";
import imgHome from "../../assets/img_home_banner.png";

import Card from "../../components/Card";
import logements from "../../data/logements.json";

import "./Home.scss";

function Home() {
  return (
    <div className="home">
        <Banner 
          image={imgHome}
          text="Chez vous, partout et ailleurs"
          opacity={0.6}
        />
        <div className="home__gallery">
          {logements.map((logement) => (
            <Card 
              key={logement.id}
              id={logement.id}
              cover={logement.cover}
              title={logement.title}
            />
          ))}
        </div>
    </div>
  )
}

export default Home
