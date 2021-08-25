// our meme container
let memeContainer = document.getElementById("memeContainer");
let meme = document.getElementById("meme");


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
        console.log(json)
        randomObj = json["data"]["memes"][random(0,100)]
        randomImg = randomObj.url;
        meme.src = randomImg;
        console.log(randomObj.box_count)
    })
