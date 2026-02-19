import "./Host.scss"

function Host ({ host }) {
    return (
        <div className="host">
            <h2 className="host__name">{host.name}</h2>
            <img className="host__picture" src={host.picture} alt={host.name} />
        </div>
    )
}

export default Host