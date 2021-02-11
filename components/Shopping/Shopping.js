class Shopping {
    
    handleClear()
    {
        ROOT_SHOPPING.innerHTML = '';
    }

    correctCount(id)
    {
        let value = Number(document.getElementById(`countInput${id}`).value);
        if(value < 0) value = 0;
        localStorageUtil.productsWithCount.set(id, value);
        this.render();
    }

    render()
    {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        var sumCatalog = 0;
        let ordersList = '';
        
        CATALOG.forEach(({id, name, price}) => {
            if(productsStore.indexOf(id) !== -1)
            {
                let count = localStorageUtil.productsWithCount.get(id);
                price = parseFloat(price);
                sumCatalog = sumCatalog + (price)*count;
                ordersList += `
                    ${name}
                    КОЛ-ВО: ${count}
                `;
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name"> - ${name}</td>
                        <td id="price${id}" class="shopping-element__price">${((price * count).toFixed(2)).toLocaleString()} BYN</td>
                        <td>Кол-во: <input class="shopping-element__input" id="countInput${id}" type="number" min="0" value="${count}" onchange="shoppingPage.correctCount('${id}')"/></td>
                    </tr>
                `;
            }
        });
        
        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handleClear()"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                    <td class="shopping-element__name"><hr></td>
                    </tr>
                    <tr>
                        <td class="shopping-element__name">Сумма</td>
                        <td id="sumCatalog" class="shopping-element__price">${(sumCatalog.toFixed(2)).toLocaleString()} BYN</td>
                    </tr>
                </table>
                <button class="shopping-element__btn" onclick='orderForm.render(\`${ordersList}\`, ${sumCatalog})'>Оформить заказ</button>
            </div>
        `;

        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();