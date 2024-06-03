
const checkout = {
    intercept : {
        getcheckout: ({
            method: 'GET',
            url: '**/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/form/field.html'
        }),
    },
    body: {
        item: '.product-item-details',
        summary: '.cart-summary',
        sucssesCheckout: '#maincontent',
        shippingCheckmo: '#billing-address-same-as-shipping-checkmo',
    },
    buttons: {
        proceedCheckout: '.checkout',
        next: '.continue',
        placeOlder: '.checkout'
    },
    input: {
        email: '#customer-email',
        firstName: '[name="firstname"]',
        lastName: '[name="lastname"]',
        company: '[name="company"]',
        streetAddress: '[name="street[0]"]',
        city: '[name="city"]',
        state: '[name="region_id"]',
        zip: '[name="postcode"]',
        country: '[name="country_id"]',
        phone: '[name="telephone"]',
    },
    payMethod: {
        body: '.payment-method-content'
    }
};

export { checkout }