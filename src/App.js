import './App.css';

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
// Function duplicates each card to make a pair within the game
// Randomize the card order
// Apply id to the cards to be used within my grid
const shuffleCards = () => {
  // Adds my array of images TWICE to create pairs in a new array
  const shuffledCards = [...cardImages, ...cardImages]
}
  return (
    <div className="App">
      <h1>ACNH Memory Match</h1>
      <button>Play</button>
      <div className="card-grid">
        {/* Create card grid */}
        {/* I need the cards first - go populate the array!! */}
        { }
      </div>
    </div>
  );
}

export default App;
