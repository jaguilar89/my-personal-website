const h1 = document.getElementsByTagName('h1')[0];
const img = document.getElementById('apod');
const imgTitle = document.getElementById('image-title');
const caption = document.getElementById('apod-caption');
const copyright = document.getElementById('copyright');
const errorMsg = document.getElementById('error-msg')
const errorStatus = document.getElementById('error-status')


//Fetch API data
fetch('https://httpstat.us/503')
    .then(handleError) //handleError function passed in, to handle any HTTPS request or network errors. See line 31.
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
    imgTitle.textContent += `${testFunc}`
    caption.textContent = `${data.explanation}`
})
    .catch(displayError) //If an error is found, page is redirected to an error page.

 
//Generic function to handle any HTTPS request or network errors.
function handleError(response) {
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return response;
}

//Redirects to error page, in the event of an error.
function displayError(error) {
    if (window.location.pathname !== "/Users/jaguilar/Development/code/my-personal-website/html/error.html") { //Replaces original URL path with URL path for error page.
        window.location.href = "file:///Users/jaguilar/Development/code/my-personal-website/html/error.html" 
    }
errorStatus.textContent = `${error}` //Displays error status (ie. 'Page not found')
}
