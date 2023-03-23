"use strict"

// api link is usually
//  /ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json
//  API interface Method      version   query parameters

function insertAllInterfacesOptions() {
    apiOptionsData.apiInterface.forEach(steamInterface => {
        addElement(steamInterface.name, "#interface", "option", steamInterface)
    })
}

function insertMethods() {
    const interfaceName = document.querySelector("#interface").value;

    apiOptionsData.apiInterface.forEach(steamInterface => {
        if (steamInterface.name === interfaceName && steamInterface.methods) {
            steamInterface.methods.forEach(method => {
                addElement(method.name, "#method", "option", method)
            })
        }
    })

}

function clearSelector(selector) {
    document.querySelector(selector).innerHTML = '';
}

function addElement(innerText, selector, elementType, object) {
    const element = document.createElement(elementType);

    for (const property in object) {
        if (typeof object[property] !== "object")
            element.setAttribute(`data-${property}`, object[property]);
    }

    element.innerText = innerText;

    document.querySelector(selector).insertAdjacentElement("beforeend", element)
}
