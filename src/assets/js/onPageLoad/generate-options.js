"use strict"

// api link is usually
//  /ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json
//  API interface Method      version   query parameters

function addHTMLOption(name, selector) {
    const html = `<option value="${name}" id="${name}">${name}</option>`
    document.querySelector(selector).insertAdjacentHTML("beforeend", html)
}

function insertAllInterfacesOptions() {
    apiOptionsData.apiInterface.forEach(steamInterface => {
        addHTMLOption(steamInterface.name, "#interface")
    })
}

function insertMethods() {
    const interfaceName = document.querySelector("#interface").value;

    apiOptionsData.apiInterface.forEach(steamInterface => {
        if (steamInterface.name === interfaceName && steamInterface.methods) {
            steamInterface.methods.forEach(method => {
                addHTMLOption(method.name, "#method")
            })
        }
    })

}

function clearSelector(selector) {
    document.querySelector(selector).innerHTML = '';
}