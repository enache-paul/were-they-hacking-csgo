import express from 'express'
import fetch from 'node-fetch';

const app = express();
const port = 3000;

app.get('/steamapi/*', (req, res) => {
    const apiUrl = `https://api.steampowered.com/${req.params[0]}`;
    const API_KEY = ""; // Enter here your steamAPI key
    const url = `${apiUrl}?${concatenateQueryParams(req.query)}&key=${API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => res.json(data))
        .catch(error => res.status(500).json({ error: error.message }));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

function concatenateQueryParams(query) {
    let result = '';

    for (let element in query ) {
        result += `${element}=${query[element]}&`
    }

    return result.slice(0, -1);
}
