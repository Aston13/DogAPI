const doggos = document.querySelector(".doggos"); // div where images will be placed

function addNewDog() {
    let s = document.getElementById("breed-select"); // dropdown box
    let breed = (s.options[s.selectedIndex].value).split("-", 1);    // option from dropdown
    const img = document.createElement("img");
    let promise = fetch("https://dog.ceo/api/breed/" + breed + "/images/random");

    promiseFunc(img, promise);
}

function addRandom() {
    const img = document.createElement("img");
    const promise = fetch("https://dog.ceo/api/breeds/image/random");

    promiseFunc(img, promise);
}

function promiseFunc(img, promise){
    promise
        .then(function (response) {
            const processingPromise = response.json(); // wait for a reply
            return processingPromise; // success
        })

        .then(function (processedResponse) {
            img.src = processedResponse.message; // the image URL is taken from the JSON message reply
            img.alt = "Cute doggo";
            doggos.prepend(img); // place the image inside the doggos div
        });
}

function resetImg(){
    //remove images
    let images = [].slice.call(document.getElementsByTagName('img'),0); // get images as array-like object, turn into array using slice

    images.forEach(function(img){ // iterate image array
        img.parentNode.removeChild(img); // remove child node via parent (only way)
    });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDog); // listen for click on button
document.querySelector(".random-breed").addEventListener("click", addRandom);
document.querySelector(".reset").addEventListener("click", resetImg);