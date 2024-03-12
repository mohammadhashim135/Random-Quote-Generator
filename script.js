const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('newQuoteBtn');

// Fetch a random quote from the Quotable API
const fetchQuote = async () => {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        displayQuote(data);
    } catch (error) {
        console.error('Error fetching quote:', error);
        quoteElement.textContent = 'Failed to fetch quote. Please try again later.';
    }
}

// Display the quote on the webpage
const displayQuote = (quote) => {
    quoteElement.textContent = `"${quote.content}"`;
    authorElement.textContent = `- ${quote.author}`;
}

// Event listener for the New Quote button
newQuoteBtn.addEventListener('click', fetchQuote);

// Fetch a new quote when the page loads
fetchQuote();
