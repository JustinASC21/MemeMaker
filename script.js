// our meme container
let memeContainer = document.getElementById("memeContainer");
let meme = document.getElementById("meme");
let newMemeButton = document.getElementById("newMeme"); // our meme button
let boxContainer = document.getElementById("boxInputs");


// previous functions defined here
function random(min,max) {
    let randInt = Math.floor(Math.random() * (max - min)) + min;
    return randInt;
}


// grab api 
url = "https://api.imgflip.com/get_memes"
// this api returns about 100 meme templates
fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {

        randomObj = json["data"]["memes"][random(0,100)]
        randomImg = randomObj.url;
        randomBoxCounts = randomObj.box_count // important to display to the user how many boxes to fill in

        for (let box = 0; box < randomBoxCounts; box ++) {
            // create box inputs for each of the text boxes to caption
            let inputBox = document.createElement("input");
            inputBox.setAttribute("type","text");

            // add inputs to box container
            boxContainer.appendChild(inputBox);

        }
    
        meme.src = randomImg;
        console.log(randomBoxCounts)

        newMemeButton.onclick = function(event) { // when newMeme button is clicked
            event.preventDefault();

            url = "https://api.imgflip.com/get_memes"
        // this api returns about 100 meme templates
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {

                randomObj = json["data"]["memes"][random(0,100)]
                randomImg = randomObj.url;
                randomBoxCounts = randomObj.box_count // important to display to the user how many boxes to fill in
            
            
                meme.src = randomImg;
                console.log(randomBoxCounts)
                })
        }
    })