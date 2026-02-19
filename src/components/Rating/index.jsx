import ActiveStar from "../../assets/active-star.png"
import InactiveStar from "../../assets/inactive-star.png"

import "./Rating.scss"

function Rating ( { rating } ) {
    const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
        {stars.map((star) => (
            <img 
                key={star.toString()}
                className="rating__star"
                src={star <= rating ? ActiveStar : InactiveStar}
                alt={star <= rating ? "étoile pleine" : "étoile vide"}
            />
        ))}
    </div>
  )
}

export default Rating