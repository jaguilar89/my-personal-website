const h1 = document.getElementsByTagName('h1')[0];
const img = document.getElementById('apod');
const imgTitle = document.getElementById('image-title');
const caption = document.getElementById('apod-caption');
const copyright = document.getElementById('copyright');
const errorMsg = document.getElementById('error-msg')
const errorStatus = document.getElementById('error-status')

//Fetch API data and return in JSON format
fetch('https://api.nasa.gov/planetary/apod?api_key=9iFaJCujoyGFvvspz8rxFNjCWyw4HSxcVT5NuDcN')
    .then(handleError) //handleError function passed in, to handle any HTTPS request or network errors. See line 35.
    .then(response => response.json()) //Return fetch response in JSON format
    .then(data => {
        //Check for copyright info in the JSON data, if none is found, 'Image & Credit' field is filled with 'N/A'
        if (!data.copyright) {
        copyright.textContent += 'N/A'                          
        } else {                                            
        copyright.textContent += `${data.copyright}`        
    };                                                      
    //Insert the image name, url, date, and caption from the JSON data into the given HTML tags
    h1.textContent += `(${data.date})`
    img.src = `${data.url}`
    imgTitle.textContent = `${data.title}`
    caption.textContent = `${data.explanation}`
})
//If an error is found, page is redirected to an error page.
    .catch(error => {
        if (window.location.pathname !== "/Users/jaguilar/Development/code/my-personal-website/html/error.html") { //Replaces original URL path with URL path for error page.
            window.location.href = "file:///Users/jaguilar/Development/code/my-personal-website/html/error.html"   //Otherwise you're redirected to error page but page will be stuck on a refresh loop.
        }
    errorStatus.textContent = `${error}` //Displays error status (ie. 'Page not found')
    })

//Function to handle any HTTPS request or network errors.
function handleError(response) {
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return response
}


// Same code, but without error handling.

/*
//Fetch the API data and return it in JSON format
async function fetchPic() {
    let response = await fetch('https://api.nasa.gov/planetary/apod?api_key=9iFaJCujoyGFvvspz8rxFNjCWyw4HSxcVT5NuDcN');
    let json = await response.json();
    return json;
}

//Insert the image name, url, date, and caption from the JSON data into the given HTML tags
fetchPic()
.then(picture => {
    if (!picture.copyright) {
        copyright.textContent += 'N/A'
    } else {
        copyright.textContent += `${picture.copyright}`
    }
    h1.textContent += `(${picture.date})`
    img.src = `${picture.url}`
    imgTitle.textContent = `${picture.title}`
    caption.textContent = `${picture.explanation}`
});

*/