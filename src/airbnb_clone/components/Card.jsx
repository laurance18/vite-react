import './Card.css'

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return(
        <div className="card">
            <img src={`/assets/airbnb/${props.coverImg}`} className="card--image" />
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <div className="card--stats">
                <img src='assets/airbnb/star.png' className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) •</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}