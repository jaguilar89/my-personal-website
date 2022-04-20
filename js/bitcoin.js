const bitcoinPrice = document.getElementById('bitcoin-price');
const time = document.getElementById('time')
const disclaimer = document.getElementById('disclaimer');

//Calls function once immediately, then runs every 60 seconds to update the data. 
displayData();
setInterval(displayData, 60000)


function displayData() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(handleError)
        .then(res => res.json())
        .then(data => {
            let currentPrice = data.bpi.USD.rate_float;
            let timeUpdated = new Date(data.time.updated); //Stores the last updated time in a Date object.
            let localTime = timeUpdated.toLocaleTimeString('en-US', {timeZone: 'America/New_York'}) //Converts time from UTC to EST

            bitcoinPrice.textContent = `$${currentPrice.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}` //Format currency string to display 2 decimal places, and include '$' symbol and commas as thousands separators. 
            time.textContent = `Last Updated: ${localTime} EST`;
            disclaimer.textContent = `${data.disclaimer}`
        })
        .catch(displayError)
}

//Generic function to handle any HTTPS request or network errors.
function handleError(response) {
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return response;
}

//Redirects to error page, in the event of an error.
function displayError(error) {
    if (window.location.pathname !== "/Users/jaguilar/Development/code/my-personal-website/html/error.html") { 
        window.location.href = "file:///Users/jaguilar/Development/code/my-personal-website/html/error.html"    //Replaces original URL path with URL path for error page.
    }
    errorStatus.textContent = `${error}` //Displays error status (ie. 'Page not found')
}