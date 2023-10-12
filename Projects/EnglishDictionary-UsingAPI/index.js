const inputEl = document.getElementById("input");
const URL = "";
const infoText = document.getElementById("info-text");
const meaningContainer = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.querySelector("audio");

async function fetchAPI(word) {
  try {
    // infoText.style.display = "block";
    meaningContainer.style.display = "none";

    infoText.innerText = `Searching the meaning of  "${word}"`;

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    const result = await fetch(url).then((res) => res.json());

    console.log(result);
    infoText.innerText = "Type a word and Press Enter";
    meaningContainer.style.display = "block";
    // Pass to html
    //
    titleEl.innerText = result[0].word;
    meaningEl.innerHTML = result[0].meanings[0].definitions[0].definition;
    audioEl.src = result[0].phonetics[1].audio;
  } catch (error) {
    infoText.innerText = "No Definitions Found , You can try the search again ";
    meaningContainer.style.display = "none";
  }
}
inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});
