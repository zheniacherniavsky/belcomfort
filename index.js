function render()
{
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

fetch(JSONPath)
    .then(res => res.json())
    .then(body => {

        CATALOG = body;
        spinnerPage.handleClear();
        render();
    })
    .catch(error => {
        console.log(error);
        spinnerPage.handleClear();
        errorPage.render();
    });