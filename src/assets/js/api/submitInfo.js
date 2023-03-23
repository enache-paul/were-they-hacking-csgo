"use strict";

function submitEvent() {
    document.querySelector("#submit").addEventListener("submit", sendRequest)
}

function sendRequest(e) {
    e.preventDefault();
    fetchFromServer(buildURI(), "GET")
        .then(r => {
            const x = r.response.players[0];
            document.querySelector(".response").innerHTML = "";
            for (const key in x) {
                buildHTML(key, x);
            }
        });
}

function buildHTML(key, obj) {
    let html = `<li>${key}: ${obj[key]}</li>`;
    document.querySelector(".response").insertAdjacentHTML("beforeend", html);
}
