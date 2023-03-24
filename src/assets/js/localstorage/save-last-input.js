"use strict";

function savePreviousInputToLocalStorage() {
    inputValuesAsArrObj().forEach(obj => {
        localStorage.setItem(obj.attribute, obj.value);
    });
}

function inputValuesAsArrObj() {
    const obj = [];
    const inputs = document.querySelectorAll(".attributes input");

    inputs.forEach(node => {
        obj.push({attribute : `${node.id}`, value : `${node.value}`});
    });

    return obj;
}

function tryAutocomplete() {
    for (let localStorageKey in localStorage) {
        const _input = document.querySelector("#" + localStorageKey);
        if (localStorage.getItem(localStorageKey) && _input) {
            _input.value = localStorage.getItem(localStorageKey);
            hintAutocomplete(_input);
        }
    }
}

function hintAutocomplete(element) {
    const hint = document.createElement("q");
    hint.classList.add("hint");
    hint.innerText = "autocompleted!";

    element.insertAdjacentElement("beforebegin", hint);

    setTimeout(removeHints, 1500);
}

function removeHints() {
    const hints = document.querySelectorAll(".hint");

    hints.forEach(hint => hint.remove());
}


