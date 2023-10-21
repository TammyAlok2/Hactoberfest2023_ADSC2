const accessKey = "j9MtgEiEvxKnWcwWIJLsfIf7zHpGiSOWazgkWVakMqs";

const formElement = document.querySelector("form");
const searchInputElement = document.getElementById("search-input");
const searchResultsElement = document.querySelector(".image-container");
const showMoreBtn = document.getElementById("show-more-btn");

var inputData = "";
var page = 1;

const searchImagesFunc = async () => {
    inputData = searchInputElement.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1) {
        searchResultsElement.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("image");
    
        const images = document.createElement("img");
        images.src = result.urls.regular;
        images.alt = result.alt_description;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(images);
        imageWrapper.appendChild(imageLink);

        searchResultsElement.appendChild(imageWrapper);
    
    })

    page++;

    if(page > 1 && page < 100) {
        showMoreBtn.style.display = "block";
    }

    document.querySelectorAll("img").forEach(image => {
        image.onclick = () => {
            document.querySelector(".popup-image").style.display = "block";
            document.querySelector(".popup-image img").src = image.getAttribute("src");
        }
    })
    
    document.querySelector(".popup-image span").onclick = () => {
        document.querySelector(".popup-image").style.display = "none";
    }
}

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImagesFunc();
});



showMoreBtn.addEventListener("click", () => {
    searchImagesFunc();
});