import { useState } from "react";
import arrow from "../../assets/arrow.png";

import "./Collapse.scss";

function Collapse({title, content, extraClass}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className= {`collapse ${extraClass}`}>
        <div className="collapse__header" >
            <h2 className="collapse__title">{title}</h2>
            <button className="collapse__button" onClick={toggleCollapse}>
                <img src={arrow} alt="Chevron de la collapse" className= {`collapse__arrow ${isOpen ? 'rotate' : ''}`} />
            </button>
        </div>
        <div className={`collapse__content ${isOpen ? 'show' : ''}`}>
            <div className="collapse__content--inner">
                {Array.isArray(content) ? (
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </div>
    </div>
  );
}

export default Collapse