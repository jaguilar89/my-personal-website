const bitcoinPrice = document.getElementById('bitcoin-price');
const time = document.getElementById('time')
const disclaimer = document.getElementById('disclaimer');

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(res => res.json())
    .then(data => {
        let currentPrice = data.bpi.USD.rate_float;
        let timeUpdated = new Date(data.time.updated);
        let localTime = timeUpdated.toLocaleTimeString('en-US', {timeZone: 'America/New_York'})

        bitcoinPrice.textContent = `$${currentPrice.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`
        time.textContent = `Last Updated: ${localTime} EST`;
        disclaimer.textContent = `${data.disclaimer}`
    })



