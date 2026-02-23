import { useParams, Navigate } from "react-router-dom"
import logements from "../../data/logements.json"
import Slideshow from "../../components/Slideshow"
import Collapse from "../../components/Collapse"
import Tag from "../../components/Tag"
import Host from "../../components/Host"
import Rating from "../../components/Rating"

import "./Logement.scss"


function Logement() {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Navigate to="/404" />
  }

  return (
    <div className="logement">
      <Slideshow pictures={logement.pictures} />

      <section className="logement__header">

        <div className="logement__infos">
          <h2 className="logement--title">{logement.title}</h2>
          <p className="logement--location">{logement.location}</p>
          
          <div className="logement__tags">
            <Tag tags={logement.tags} />
          </div>
        </div>

        <div className="logement__host-rating">
          <Host host={logement.host} />
          <Rating rating={logement.rating} />
        </div>
      </section>

      <section className="logement__details">
        <Collapse extraClass="collapse-logement" title="Description" content={logement.description} />
        <Collapse extraClass="collapse-logement" title="Équipements" content={logement.equipments} />
      </section>
    </div>
  )
}

export default Logement