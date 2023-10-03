const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
];

// Get a random quote from the array
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  return quote;
}

// Update the quote text on the page
function updateQuoteText(quote) {
  const quoteElement = document.querySelector("#quote");
  quoteElement.textContent = quote.text;
}

// Generate a new quote when the button is clicked
document.querySelector("#generate-quote").addEventListener("click", function() {
  const quote = getRandomQuote();
  updateQuoteText(quote);
});

// Update the quote text with the first quote in the array when the page loads
const quote = getRandomQuote();
updateQuoteText(quote);
