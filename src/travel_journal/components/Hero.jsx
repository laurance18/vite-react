import Card from "./Card.jsx"
import data from '../data.js'

export default function Hero() {
    const cards = data.map(item => {
        return (<Card 
            key={item.id}
            {...item}
        />)
    }) 
    
    return (
        <div className="bg-gradient-to-r from-gray-900 to-gray-700">
            {cards}
        </div>
    )
}