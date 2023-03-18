import './Card.css'

export default function Card({ card, handleSelection, flipped }) {

    const handleClick = () => {
        // Function to update the state
        handleSelection(card)
    }
    return (
        <div className="card">
            {/* If the flip property is true apply the class to the card */}
            {/* If flipped is true flipped class will be applied to the card if false nothing is applied with the empty class "" */}
            <div className={flipped ? "flipped" : ""}>
                {/* Front and back of card here to display in grid */}
                {/* Use property name on each card from cards image array */}
                <img className="front" src={card.src} alt="card front" />
                {/* Click event for choices goes on the back of the card because the user won't see the front until it's been selected and can flip */}
                <img className="back" 
                src="images/card-bg.png" 
                onClick={handleClick} 
                alt="card back" />
            </div>
        </div>
    )
}