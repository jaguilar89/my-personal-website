const h1 = document.getElementsByTagName('h1')[0];
const img = document.getElementById('apod');
const imgTitle = document.getElementById('image-title');
const caption = document.getElementById('apod-caption');
const copyright = document.getElementById('copyright');



//Fetch the API data and return it in JSON format
async function fetchPic() {
    let response = await fetch('https://api.nasa.gov/planetary/apod?api_key=9iFaJCujoyGFvvspz8rxFNjCWyw4HSxcVT5NuDcN');
    let json = await response.json();
    return json;
}

//Insert the image name, url, date, and caption from the JSON data into the given HTML tags
fetchPic().then(picture => {
    h1.textContent += `(${picture.date})`
    img.src = `${picture.url}`
    imgTitle.textContent = `${picture.title}`
    caption.textContent = `${picture.explanation}`
    copyright.textContent += `${picture.copyright}`
});



