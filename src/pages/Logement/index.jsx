import { useParams, Navigate } from "react-router-dom"
import logements from "../../data/logements.json"
import Slideshow from "../../components/Slideshow"


function Logement() {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Navigate to="/404" />
  }

  return (
    <div className="logement-sheet">
      <Slideshow pictures={logement.pictures} />
      <h1 >Page Logement</h1>
    </div>
  )
}

export default Logement