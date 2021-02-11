class ChooseConfiguration
{

    constructor()
    {
        this.classNameActive = 'configuration-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handleClear()
    {
        ROOT_CONFIGURATION.innerHTML = '';
    }

    handleSetLocationStorage(element, id)
    {
        const { pushProduct, products} = localStorageUtil.putProducts(id);
        if(pushProduct)
        {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else
        {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }

        headerPage.render(products.length); // обновляем кол-во товара
    }

    render(subCategoryID)
    {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({id, subcategory, name, price}) => {
            if(subcategory === subCategoryID)
            {
                price = parseFloat(price);

                let activeClass = '';
                let activeText = '';

                if(productsStore.indexOf(id) === -1)
                {
                    activeText = this.labelAdd;
                }
                else 
                {
                    activeText = this.labelRemove;
                    activeClass = ' ' + this.classNameActive;
                }

                htmlCatalog += `
                    <li class="configuration-element">
                        <span class="configuration-element__name">${name}</span>
                        <span class="configuration-element__price">${price.toLocaleString()} BYN</span>
                        <span class="configuration-element__buttons">
                            <button class="configuration-element__btn" onclick="productsPage.showDescription('${id}');">
                                Подробнее
                            </button>
                            <button class="configuration-element__btn${activeClass}" onclick="chooseConfiguration.handleSetLocationStorage(this, '${id}', '${activeClass}');">
                                ${activeText}
                            </button>
                        </span>
                    </li>
                    <hr style="width=100%;">
                `;
            }
        });

        const html = `
        <div class="configuration-container">
            <div class="shopping__close" onclick="chooseConfiguration.handleClear()"></div>
            <h3>Выбор конфигурации</h3>
            <ul class="configuration-list">
                ${htmlCatalog}
            </ul>
        </div>
        `;

        ROOT_CONFIGURATION.innerHTML = html;
    }
}

const chooseConfiguration = new ChooseConfiguration(); 