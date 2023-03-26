"use strict"

const json = test;

function insertAllInterfacesOptions() {
    json.apiInterface.forEach(steamInterface => {
        addElement(steamInterface.name, "#interface", "option", steamInterface)
    })
}

function insertMethods() {
    const interfaceName = document.querySelector("#interface").value;

    json.apiInterface.forEach(steamInterface => {
        if (steamInterface.name === interfaceName && steamInterface.methods) {
            steamInterface.methods.forEach(method => {
                addElement(method.name, "#method", "option", method)
            })
        }
    })
}

function insertAttributes() {
    clearSelector(".attributes")

    const attributesElement = document.querySelector(".attributes");
    const selectedMethod = document.querySelector("#method").value;
    const interfaceName = document.querySelector("#interface").value;

    json.apiInterface.forEach(steamInterface => {
        if (steamInterface.name === interfaceName && steamInterface.methods) {
            let counter = 0;
            steamInterface.methods.forEach(method => {
                if (method.name === selectedMethod && counter === 0) {
                    method.arguments.forEach(arg =>
                        addInputLabel("text", arg.name, arg.name+ " (" + arg.description + ")", arg.required))
                    counter++;
                }
            })
        }
    })

    attributesElement.classList.remove("hidden");
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

function interfaceHasMethod() {
    return document.querySelector("#method").hasChildNodes();
}

function addInputLabel(type, id, name, required) {
    const input = document.createElement("input");
    const label = document.createElement("label");
    const div = document.createElement("div");
    div.classList.add("attribute", `${id}`);

    input.type = type;
    input.id = id;
    input.name = name;
    if (required === 'true') {
        input.setAttribute("required", "");
    }

    label.for = id;
    label.innerText = name;

    div.appendChild(label);
    div.appendChild(input);

    document.querySelector(".attributes").insertAdjacentElement("beforeend", div);
}