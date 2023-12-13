const fetch = require('node-fetch');
const mozApiEndpoint = 'https://api.moz.com/v2/url_metrics';
const mozApiKey = '90238b0ae1e3b5a6ca57ce4ca589ebfb'; 

async function fetchMozData(url) {
    try {
        const response = await fetch(mozApiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + mozApiKey
            },
            body: JSON.stringify({ target: url })
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching Moz Data:', error);
    }
}

fetchMozData('newheights.ie').then(data => {
    if(data) {
        console.log(data);
    }
});
