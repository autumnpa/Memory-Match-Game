import './App.css';
import { useState } from 'react';
import Card from './components/Card';

// Create an array with the images for the front of the cards
const cardImages = [
  // Object with image source property
  // Add more after testing that image displays
  { "src": "/images/bell-bag.png" },
  { "src": "/images/blathers.png" },
  { "src": "/images/wisp.png" },
  { "src": "/images/tom.png" },
  { "src": "/images/pear.png" },
  { "src": "/images/peach.png" },
  { "src": "/images/star-yellow.png" },
  { "src": "/images/recipe-card.png" },
  { "src": "/images/present.png" },
  { "src": "/images/leaf.png" },
  { "src": "/images/fossil.png" },
  { "src": "/images/cherry.png" },
]

function App() {
  // Hold card state
  // Once cards are shuffled the state of the cards will be updated with useState
  const [cards, setCards] = useState([])
  // Create a state for the users card selections
  // When they click the first card they choose it will update to the state same with the second choice
  // Need to add a click event to the card component
  // If both of these hold a value then we need to compare them to see if its a match
  // If they are a match I need a function that resents the handleChoice
  const [selectionOne, setSelectionOne] = useState()
  const [selectionTwo, setSelectionTwo] = useState()

  // Function duplicates each card to make a pair within the game
  // Randomize the card order
  // Apply id to the cards to be used within my grid
  const shuffleCards = () => {
    // Adds my array of images TWICE to create pairs in a new array
    const shuffledCards = [...cardImages, ...cardImages]
      // Sorts the cards to have a pair and using math random makes them have different orders in the array so finding a pair is more challenging
      .sort(() => Math.random() - 0.5)
      // Random id is created on each object - card
      .map((card) => ({ ...card, id: Math.random() }))
    // When function is called the cards will be shuffled and then updated within the setCards state
    setCards(shuffledCards)
  }
  // Test
  // Test is working!
  // console.log(cards);
  // Function that takes in a card that the user selects
  // Pass this in to the card component
const handleSelection = (card) => {
  // Console log is working!! Don't need for the time being
  // console.log(card)
  // Add some logic now to check if the user has made selections to update state
  // If selectionOne comes back false theres no selection for card one and setSelectionOne(card) runs and updates selection one state
  // If selectionOne comes back true then setSelectionTwo runs an dupdates because selection one already has a value
  selectionOne ? setSelectionTwo(card) : setSelectionOne(card)
}

  return (
    <div className="App">
      <h1>ACNH Memory Match</h1>
      {/* When the button is clicked the function runs that shuffles the cards for the game */}
      <button onClick={shuffleCards}>Play</button>
      <div className="card-grid">
        {/* Create card grid */}
        {/* I need the cards first - go populate the array!! - DONE*/}
        {/* Map through cards state */}
        {cards.map(card => (
          // Parent needs key prop - use id from shuffled cards
          // Send card prop into component so new component has access
          <Card 
          key={card.id} 
          card={card}
          handleSelection={handleSelection}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
