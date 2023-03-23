"use strict"

function onChangeListeners() {
    onInterfaceChange();
    onMethodChange()
}

function onInterfaceChange() {
    document.querySelector("#interface").addEventListener("change", () => {
        clearSelectors();
        insertMethods();
        insertAttributesHandler();
    })
}

function onMethodChange() {
    document.querySelector("#method").addEventListener("change", () => {
        clearSelector(".attributes");
        insertAttributesHandler();
    })
}

function insertAttributesHandler() {
    if (interfaceHasMethod()) insertAttributes();
}

function clearSelectors() {
    clearSelector("#method");
    clearSelector(".attributes");
}