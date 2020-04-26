function getDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson);  
            let imageLink = responseJson.message;
            $(".dog-img").attr("src", imageLink);
            console.log($("body").attr("style"));
        })
        .catch(error => alert('Something went wrong. Try again later.'));
}

getDogImage()

$(".dog-img").click(() => getDogImage())