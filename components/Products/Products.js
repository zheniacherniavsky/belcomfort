class Products {

    constructor()
    {
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
        this.description = '';
        this.name = '';
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

    descriptionClear()
    {
        $('.description-container').fadeOut(300, () => { ROOT_DESCRIPTION.innerHTML = ''; });
    }

    showDescription(idOfProduct)
    {
        CATALOG.forEach(({id, name, description}) => {
            if(idOfProduct === id)
            {
                this.description = description;
                this.name = name;
            }
        });

        const html = `
            <div class="description-container">
                <div class="shopping__close" onclick="productsPage.descriptionClear()"></div>
                <div class="description-message">
                    <h3>${this.name}</h3> 
                    <p>${this.description}</p>
                </div>
            </div>
        `;
        ROOT_DESCRIPTION.innerHTML = html;
        $('.description-container').fadeIn(300);
    }

    showProductsByCategory(_categoryID)
    {
        const productsStore = localStorageUtil.getProducts();

        var products = document.getElementById(`${_categoryID}`);
        if(products.innerHTML !== '') 
        {
            products.innerHTML = '';
            return;
        }
        else
        {
            let html = '';
            CATALOG.forEach(({id, subcategory, haveSubcategories, name, price, img, categoryID}) => {
                if(`${_categoryID}` === categoryID) 
                {
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
    
                    // console.log(`id: ${id}, subcategory: ${subcategory}, haveSubCategories: ${haveSubcategories}, name: ${name}`);
    
                    if(subcategory === null && haveSubcategories === null)
                    {
                        html += `
                            <li class="products-element">
                                <span class="products-element__name">${name}</span>
                                <img class="products-element__img" src="${img}" />
                                <span class="products-element__price">
                                ${price.toLocaleString()} BYN
                                </span>
                                <button class="products-element__btn" onclick="productsPage.showDescription('${id}');">
                                    Подробнее
                                </button>
                                <button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">
                                    ${activeText}
                                </button>
                            </li>
                        `;
                    }
                    else if (haveSubcategories !== null) // subcategory repeat off php
                    {
                        html += `
                            <li class="products-element">
                                <span class="products-element__name">${name}</span>
                                <img class="products-element__img" src="${img}" />
                                <button class="products-element__btn" onclick="productsPage.showDescription('${id}');">
                                    Подробнее
                                </button>
                                <button class="products-element__btn" onclick="chooseConfiguration.render('${haveSubcategories}');">
                                    Выбрать конфигурацию товара
                                </button>
                            </li>
                        `;
                    }
                }                
            })

            products.innerHTML = html;
        }
    }

    render() {

        let htmlCategories = [];
        let htmlCategoriesWithID = [];
        let html = '';
        
        // find all categories
        CATALOG.forEach(({category, categoryID}) => {
            var obj = {"categoryName": category, "categoryID": categoryID};
            
            if(!htmlCategories.includes(category))
            {
                htmlCategories.push(category);
                htmlCategoriesWithID.push(obj);
            }
        });
        
        htmlCategoriesWithID.forEach((obj) => {
            html += `
                <div class="products-category" onclick="productsPage.showProductsByCategory(${obj.categoryID})">${obj.categoryName}</div>
                <ul id="${obj.categoryID}" class="products-container"></ul>
            `;
        });

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();