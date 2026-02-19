import { useState } from 'react'
import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'

import './Slideshow.scss'

function Slideshow({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1);
    }
    const prevSlide = () => {
      setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1);
    }

    if (pictures.length <= 1) {
      return (
        <div className="slideshow">
          <img src={pictures[0]} alt="Logement picture" className='slideshow__image' />
        </div>
      )
    }

    return (
      <div className="slideshow">
        <div className="slideshow__container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          
          {pictures.map((picture, index) => (
            <img key={index} src={picture} alt={`Photo ${index + 1}`} className='slideshow__image' />
          ))}
        </div>
        
        <img src={arrowLeft} alt="Previous Image" className="slideshow__arrow slideshow__arrow--left" onClick={prevSlide} />
        <img src={arrowRight} alt="Next Image" className="slideshow__arrow slideshow__arrow--right" onClick={nextSlide} />

        <div className="slideshow__counter">{currentIndex + 1} / {pictures.length}</div>
      </div>
    )
  }

export default Slideshow