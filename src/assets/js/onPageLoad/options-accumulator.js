"use strict"

function loadAllOptionsOnPage() {
    initialLoad();

    onChangeListeners();
}

function initialLoad() {
    insertAllInterfacesOptions();
    insertMethods();
    insertAttributesHandler();
    tryAutocompleteMethodAndInterface();
    tryAutocomplete();
}