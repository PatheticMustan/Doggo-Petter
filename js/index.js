var dogClicker = 0;

function getDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson);  

            $(".dog-img").attr("src", responseJson.message);
            
            $("#dogclicks").html(`Doggos Pet: ${dogClicker++}`);
        })
        .catch(error => console.warn(error));
}

getDogImage()

$("body").click(() => getDogImage())