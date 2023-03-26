"use strict";

function savePreviousInputToLocalStorage() {
    inputValuesAsArrObj().forEach(obj => {
        localStorage.setItem(obj.attribute, obj.value);
    });
}

function saveInterfaceAndMethodToLocalStorage() {
    selectValuesArrObj().forEach(obj => {
        localStorage.setItem(obj.operationId, obj.value)
    });
}

function tryAutocomplete() {
    for (let localStorageKey in localStorage) {
        if (localStorageKey.at(0) === '#') {
            const _input = document.querySelector(localStorageKey);
            if (localStorage.getItem(localStorageKey) && _input) {
                _input.value = localStorage.getItem(localStorageKey);
                hintAutocomplete(_input);
            }
        }
    }
}

function tryAutocompleteMethodAndInterface() {
    const _interface = document.querySelector('#interface');
    const _method = document.querySelector('#method');

    for (let option of _interface.options) {
        if (option.text === localStorage.getItem('interface')) {
            option.selected = true;
            break;
        }
    }

    insertMethods();

    for (let option of _method.options) {
        if (option.text === localStorage.getItem('method')) {
            option.selected = true;
            break;
        }
    }

    insertAttributesHandler();

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

function selectValuesArrObj() {
    const interfaceAPI = document.querySelector('#interface').value;
    const interfaceSelector = 'interface'
    const method = document.querySelector('#method').value;
    const methodSelector = 'method'

    const obj = [];
    obj.push({operationId: `${interfaceSelector}`, value: `${interfaceAPI}`});
    obj.push({operationId: `${methodSelector}`, value: `${method}`});
    return obj;
}

function inputValuesAsArrObj() {
    const obj = [];
    const inputs = document.querySelectorAll(".attributes input");

    inputs.forEach(node => {
        obj.push({attribute : `#${node.id}`, value : `${node.value}`});
    });

    return obj;
}
