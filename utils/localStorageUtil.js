class LocalStorageUtil {

    constructor()
    {
        this.keyname = 'products';
        this.productsWithCount = new Map(); // special for cart
    }

    clear()
    {
        localStorage.clear();
        headerPage.render(0);
    }

    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyname);

        let data = JSON.parse(productsLocalStorage);

        if(data != null)
        {
            data.forEach(id => {
                if(this.productsWithCount.get(id) === undefined) 
                {
                    this.productsWithCount.set(id, 1);
                }
            });
        }
        
        if(productsLocalStorage !== null)
        {
            return data;
        }
        return [];
    }

    putProducts(id) {
        let products = this.getProducts();
        let pushProduct = false;
        let index = products.indexOf(id)

        if(index === -1) {
            products.push(id);
            this.productsWithCount.set(id, 1);
            pushProduct = true;
        }
        else
        {
            products.splice(index, 1);
            this.productsWithCount.delete(id);
        }

        //console.log(Array.from(this.productsWithCount.keys()));

        localStorage.setItem(this.keyname, JSON.stringify(products));

        return { pushProduct, products }
    }
}

const localStorageUtil = new LocalStorageUtil();
