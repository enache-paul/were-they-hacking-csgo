"use strict"

function onChangeListeners() {
    onInterfaceChange();
    onMethodChange();
}

function onInterfaceChange() {
    document.querySelector("#interface").addEventListener("change", () => {
        clearSelectors();
        insertMethods();
        insertAttributesHandler();
        tryAutocomplete();
        saveInterfaceAndMethodToLocalStorage();
    })
}

function onMethodChange() {
    document.querySelector("#method").addEventListener("change", () => {
        clearSelector(".attributes");
        insertAttributesHandler();
        tryAutocomplete();
        saveInterfaceAndMethodToLocalStorage();
    })
}

function insertAttributesHandler() {
    if (interfaceHasMethod()) insertAttributes();
}

function clearSelectors() {
    clearSelector("#method");
    clearSelector(".attributes");
}