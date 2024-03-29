"use strict"

function buildURI() {
    return concatInterfaceAndMethod() + concatAttributes();
}

function concatInterfaceAndMethod() {
    const interfaceAPI = document.querySelector("#interface").value;
    const methodAPI = document.querySelector("#method");
    const selectedMethodIndex = methodAPI.selectedIndex;
    const selectedMethodOption = methodAPI.options[selectedMethodIndex];

    return interfaceAPI + "/" + selectedMethodOption.dataset.name + "/v" + selectedMethodOption.dataset.version + "/";
}

function concatAttributes() {
    let string = "?";
    for (const key in getAllAttributes()) {
        if (getAllAttributes()[key].value !== "")
            string += getAllAttributes()[key].attribute + "=" + getAllAttributes()[key].value + "&" ;
    }

    return string.slice(0, -1);
}

function getAllAttributes() {
    const parent = document.querySelector(".attributes").childNodes;
    const obj = [];

    parent.forEach(el => {
        const attribute = el.lastChild.id;
        const value = el.lastChild.value;
        const newObj = {attribute: `${attribute}`, value : `${value}`}

        obj.push(newObj)
    });

    return obj;
}