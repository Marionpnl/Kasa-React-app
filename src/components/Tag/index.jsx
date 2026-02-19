import "./Tag.scss"

function Tag ({ tags }) {
    return (
        <div className="tag">
            {tags.map((tag, index) => (
                <p key={index} className="tag__item">{tag}</p>
            ))}
        </div>
    )
}

export default Tag