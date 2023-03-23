"use strict"

function onChangeListeners() {
    onInterfaceChange();
}

function onInterfaceChange() {
    document.querySelector("#interface").addEventListener("change", () => {
        clearSelector("#method");
        insertMethods();
    })
}