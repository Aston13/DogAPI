const DOG_URL = "https://dog.ceo/api/breeds/image/random"; //not used
const doggos = document.querySelector(".doggos"); //div section where images will be placed

function addNewDoggo() {
    let s = document.getElementById("breed-select"); //dropdown box
    let breed = s.options[s.selectedIndex].value;    //option from dropdown
    const img = document.createElement("img");
    const promise = fetch("https://dog.ceo/api/breed/" + breed + "/images/random");

    img.src = 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Ajax_loader_metal_512.gif'; // loading gif

    promise
        .then(function(response) {
            const processingPromise = response.json(); //wait for a reply
            return processingPromise; //success
        })

        .then(function(processedResponse) {
            img.src = processedResponse.message; //The image URL is taken from the JSON message reply
            img.alt = "Cute doggo";
            doggos.prepend(img); //Place the image inside the doggos div
        });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo); //listen for click on button



// add clear/reset button, quantity button using loop, place last dog added to the top of the page(prepend instead of appendChild), fix loading gif