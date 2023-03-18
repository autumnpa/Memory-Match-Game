export default function Card({ card }) {
    return (
        <div>
            <div>
                {/* Front and back of card here to display in grid */}
                {/* Use property name on each card from cards image array */}
                <img className="card-front" src={card.src} alt="card front" />
                <img className="card-back" src="/images/card-bg.png" alt="card back" />
            </div>
        </div>
    )
}