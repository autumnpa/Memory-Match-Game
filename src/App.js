import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card';

// Create an array with the images for the front of the cards
const cardImages = [
  // Object with image source property
  // Add more after testing that image displays
  // Start of false, if matched turns to true so the card is no longer playable in the current round
  { "src": "/images/bell-bag.png", matched: false },
  { "src": "/images/blathers.png", matched: false },
  { "src": "/images/wisp.png", matched: false },
  { "src": "/images/tom.png", matched: false },
  { "src": "/images/pear.png", matched: false },
  { "src": "/images/peach.png", matched: false },
  { "src": "/images/star-yellow.png", matched: false },
  { "src": "/images/recipe-card.png", matched: false },
  { "src": "/images/present.png", matched: false },
  { "src": "/images/leaf.png", matched: false },
  { "src": "/images/fossil.png", matched: false },
  { "src": "/images/cherry.png", matched: false },
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
  const [selectionOne, setSelectionOne] = useState(null)
  const [selectionTwo, setSelectionTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

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

  // Compare card selections to check for a match
  // Function and pass in dependency array!
  // I want the function to fire and do something when both selections have a value
  useEffect(() => {
    // Add card disable beofre the check so they are disabled then selections are checked
    // Disabled is set to tru and use effect fires immediately - now all of my cards are disabled. This needs to be moved into my if statement to be checked
    // Once the check is done and a match has been determined or not set disable back to false
    // Comparison in here
    // Use an if statement!!!!
    if (selectionOne && selectionTwo) {
      // Only set to true when two selections have been made
      setDisabled(true)
      // Check card sources because thats what we have in our array objects
      if (selectionOne.src === selectionTwo.src) {
        // Console log works!! So logic is working properly!
        // console.log('Its a match!');
        // Take in previous card state to update the card state
        setCards(prevCards => {
          // Return a new array taking pervious cards using map method and fire a function for each card
          return prevCards.map(card => {
            // If the card source matches the users selection a new object returns and changes the matched property to be true
            // True for 2 cards inthe array because they share the same source property
            if (card.src === selectionOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetSelections()
      } else {
        // console.log("Not a match!")
        // Card flips back over way too quickly - update 
        // Wait 1 second then fire this function that resents the selections if there is not match
        setTimeout(() => resetSelections(), 1000)
      }
    }
  }, [selectionOne, selectionTwo])
  console.log(cards)

  const resetSelections = () => {
    setSelectionOne(null)
    setSelectionTwo(null)
    setDisabled(false)
  }

  // Start game automatically when opened in browser
  // Currently starts only when the play button it clicked
  useEffect(() => {
    shuffleCards()
    // This function starts the game so using this here will start the game once the user navigates to the page
  }, [])

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
            // Flipped will be true if card = selection 1 or card = selection 2 or the cards matched property value = true
            flipped={card === selectionOne || card === selectionTwo || card.matched}
            // Cards can be flipped infinately while waiting for the program to determine a match or not - this is CRAZY.
            // Add a time period where other cards are disabled until the computer determines if a match was made or not when the card selections are being compared
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
