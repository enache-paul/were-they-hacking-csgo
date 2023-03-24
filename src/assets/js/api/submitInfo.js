"use strict";

function submitEvent() {
    document.querySelector("#submit").addEventListener("submit", sendRequest)
}

function sendRequest(e) {
    e.preventDefault();
    fetchFromServer(buildURI(), "GET")
        .then(r => {
            savePreviousInputToLocalStorage();
            console.log(r);
            /*
            r.players.forEach(player => {
                document.querySelector(".response").innerHTML = "";
                for (const key in player) {
                    buildHTML(key, player);
                }
            })

             */
        });
}

function buildHTML(key, obj) {
    let html = `<li>${key}: ${obj[key]}</li>`;
    document.querySelector(".response").insertAdjacentHTML("beforeend", html);
}
