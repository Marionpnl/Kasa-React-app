import { Link } from "react-router-dom";

function Card ({ id, cover, title }) {
    return (
        <Link to={`/logement/${id}`} className="card">
            <img src={cover} alt={title} className="card__cover" />
            <div className="card__overlay"></div>
            <h2 className="card__title">{title}</h2>
        </Link>
    )
}

export default Card;