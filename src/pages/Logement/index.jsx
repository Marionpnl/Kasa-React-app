import { useParams, Navigate } from "react-router-dom"
import logements from "../../data/logements.json"
import Slideshow from "../../components/Slideshow"
import Collapse from "../../components/Collapse"
import Tag from "../../components/Tag"
import Host from "../../components/Host"

import "./Logement.scss"


function Logement() {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Navigate to="/404" />
  }

  return (
    <div className="logement-sheet">
      <Slideshow pictures={logement.pictures} />

      <section className="logement__header">

        <div className="logement__infos">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          
          <div className="logement__tags">
            <Tag tags={logement.tags} />
          </div>
        </div>

        <div className="logement__host-rating">
          <Host host={logement.host} />
          {/* Composant Rating */}
        </div>
      </section>

      <section className="logement__details">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments} />
      </section>
    </div>
  )
}

export default Logement