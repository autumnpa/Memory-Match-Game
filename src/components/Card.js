import './Card.css';

export default function Card({ card, handleSelection }) {

    const handleClick = () => {
        // Function to update the state
        handleSelection(card)
    }
    return (
        <div className="card">
            <div>
                {/* Front and back of card here to display in grid */}
                {/* Use property name on each card from cards image array */}
                <img className="card-front" src={card.src} alt="card front" />
                {/* Click event for choices goes on the back of the card because the user won't see the front until it's been selected and can flip */}
                <img className="card-back" 
                src="/images/card-bg.png" 
                onClick={handleClick} 
                alt="card back" />
            </div>
        </div>
    )
}