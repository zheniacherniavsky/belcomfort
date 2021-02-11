class Header {

    handleOpenShoppingPage()
    {
        shoppingPage.render();
    }

    render(count)
    {
        const html = `
            <div class="header-container">
                <div class="header-logo"">
                Белкомфорт
                </div>
            </div>
            <div class="header-cart" onclick="headerPage.handleOpenShoppingPage()">
                <img class="header-cart__img" src="../../img/shopping-cart.svg" alt="🛒"/>
            <span class="header-cart__count">${count}</span>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();