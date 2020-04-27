if (isNaN(localStorage.getItem("dogClicker"))) localStorage.setItem("dogClicker", 0);

function getDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson);  

            $(".dog-img").attr("src", responseJson.message);
            
            $("#dogclicks").html(`Doggos Pet: ${localStorage.getItem("dogClicker")}`);
        })
        .catch(error => console.warn(error));
}

$("#dogclicks").html(`Doggos Pet: ${localStorage.getItem("dogClicker")}`);
getDogImage()

$("body").click(() => {
    localStorage.setItem("dogClicker", +localStorage.getItem("dogClicker") + 1)
    getDogImage();
})