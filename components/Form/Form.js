class OdredForm
{

    handleClear()
    {       
        $('.orderform-container').fadeOut(300, () => { ROOT_ORDERFORM.innerHTML = ''; });
    }

    send()
    {
        alert("Отправлено. В скором времени с вами свяжутся наши менеджеры!");
        orderForm.handleClear();
        shoppingPage.handleClear();
        localStorageUtil.clear();
        productsPage.render();
    }

    render(goods, price)
    {
        if(goods === "")
        {
            alert("Добавите товар");
            return;
        }

        const html = `
        <div class="orderform-container" id="amofroms_main_wrapper">

            <div class="shopping__close" onclick="orderForm.handleClear()"></div>
            <!-- FORM HEADER -->
            <div class="orderform-container__header">
                <div>
                    <h3>Оформление заказа</h3>
                </div>
            </div>

            <!-- FORM BODY -->

            <form id="amoforms_form" action="https://forms.amocrm.ru/queue/add" target="dummyframe" method="POST" enctype="multipart/form-data" onsubmit="orderForm.send()">
                
                <div class="orderform-container__body_input">
                    <div class="orderform-container__body_input_name" title="Название компании">
                        <label>
                            <div>Название компании</div>
                        </label>
                    </div>
            
                    <div class="orderform-container__body_input_field">
                        <input type="text" name="fields[name_3]" placeholder="Название компании">      
                    </div>
                </div>

                <div class="orderform-container__body_input">
                    <div class="orderform-container__body_input_name" title="ФИО">
                            <label>
                                <div>ФИО</div>
                            </label>
                    </div>
            
                    <div class="orderform-container__body_input_field">
                        <input required type="text" name="fields[name_1]" placeholder="ФИО">      
                    </div>
                </div>
                        
                <div class="orderform-container__body_input">
                    <div class="orderform-container__body_input_name" title="Телефон">
                        <label>
                            <div>Телефон</div>
                        </label>
                    </div>
            
                    <div class="orderform-container__body_input_field">
                        <input required type="tel" name="fields[16421_1][26297]" placeholder="Телефон">      
                    </div>
                </div>
                       
                <div class="orderform-container__body_input">
                    <div class="orderform-container__body_input_name" title="Email">
                        <label>
                            <div>Email</div>
                        </label>
                    </div>
            
                    <div class="orderform-container__body_input_field">
                        <input required type="email" name="fields[16423_1][26309]" placeholder="Email">      
                    </div>
                </div>
                  
                <div style="display: none;">
                    <div title="Стоимость заказа">
                        <label>
                            <div>Стоимость заказа</div>
                        </label>
                    </div>
                
                    <div>
                        <input id="orderPrice" type="text" name="fields[price_2]" placeholder="Стоимость заказа">
                    </div>
                </div>

                <div style="display: none;">
                    <div title="Товар">
                        <label>
                            <div>Товар</div>
                        </label>
                        <span>*</span>
                    </div>
                    <div>
                        <textarea required id="orderList" type="text" name="fields[note_2]" placeholder="Товар"></textarea>      
                    </div>
                </div>
                     
                <input type="hidden" name="form_id" id="form_id" value="719656">
                <input type="hidden" name="hash" value="c265cfb815c1a180f4aee0b24e18242c">
                <input type="hidden" name="user_origin" id="user_origin" value="{&quot;datetime&quot;:&quot;${Date()}&quot;,&quot;referer&quot;:&quot;https://5000310.amocrm.ru/settings/pipeline/leads/3898102&quot;}">

                <div class="orderform-container__body_button">
                    <div>
                    <button type="submit" id="button_submit">
                        <span>Заказать</span>
                    </button>
                </div>
            </div>
            <div id="amoforms__fields__error-required"></div>
            <div id="amoforms__fields__error-typo"></div>

            <input type="hidden" id="amoform_iframe_lang" value="ru">
            <input type="hidden" id="amoform_modal_button_color" value="#FFFFFF">
            <input type="hidden" id="amoform_modal_button_bg_color" value="#FF597C">
            <input type="hidden" id="amoform_modal_button_text" value="Заполнить форму">
            <input type="hidden" id="amoform_display" value="Y">

            <input id="visitor_uid" type="hidden" name="visitor_uid" value="a3a1911a-ac83-4843-83e5-6e6bb4c42b49"></form> 
            <!-- /amoform-form -->
        </div>
        `;

        ROOT_ORDERFORM.innerHTML = html;

        document.getElementById("orderList").value = goods;
        document.getElementById("orderPrice").value = price;

        $('.orderform-container').fadeIn(300);
    }
}

let orderForm = new OdredForm();