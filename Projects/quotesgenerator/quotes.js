const quotes = [
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King, Jr.",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
];

document.addEventListener("DOMContentLoaded", () => {
    const quoteElement = document.getElementById("quote");
    const generateButton = document.getElementById("generate");

    generateButton.addEventListener("click", () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.textContent = randomQuote;
    });
});
