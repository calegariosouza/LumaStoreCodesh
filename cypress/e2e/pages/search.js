const search = {
    intercept: {
        getSearch: ({
            method: 'GET',
            url: '**/catalogsearch/searchTermsLog/save/?q=shirt&_=*'
        }),
    },
    input: {
        search: '#search',
    },
    body: {
        pageTitle: '[data-ui-id="page-title-wrapper"]',
        resultSearch: '.product-item-info',
        tooltip: '.messages',
    },
};

export {search}