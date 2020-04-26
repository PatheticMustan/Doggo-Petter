function getDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))

        .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    let arrayOfImg = responseJson.message;
    let display = getImages(arrayOfImg); //replace the existing image with the new one
    $('.dog-img').html(display);
}

/** * Prepares a string of <img> elements * and returns the same */
function getImages(img){
    return `<img src="${img}" class="dog-img">`;
}

getDogImage()

$(".dog-container").click(() => getDogImage())