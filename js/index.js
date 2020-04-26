var dogClicker = 0;

function getDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson);  
            let imageLink = responseJson.message;
            $(".dog-img").attr("src", imageLink);
            dogClicker++;
            $("#dogclicks").html(`Eyebleach Counter: ${dogClicker}`);
        })
        .catch(error => alert('Something went wrong. Try again later.'));
}

getDogImage()

$("body").click(() => getDogImage())