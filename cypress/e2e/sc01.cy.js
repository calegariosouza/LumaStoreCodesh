import { faker } from '@faker-js/faker';
import { checkout } from "./pages/checkout";
import { newAccount } from "./pages/newAccount";
import { search } from "./pages/search";
import { pageProduct } from "./pages/product";

describe(`As a quality manager, I want to ensure that the purchase functionality 
          on the website is working correctly to provide the best user experience.`, () => {
  beforeEach(() => {
    cy.intercept(search.intercept.getSearch).as('getSearch');
    cy.intercept(checkout.intercept.getcheckout).as('getCheckout');
  });
  
  it('Scenario 1',  { retries: 2 }, () => {

    const firstProduct = {
      search: 'shirt',
      shirt: 'Proteus Fitness Jackshirt',
      size: 'XL',
      color: 'Orange',
      shippingMethods: 'tablerate_bestway'
    };
    const SecondProduct = {
      search: 'shirt',
      shirt: 'Gobi HeatTec® Tee',
      size: 'XS',
      color: 'Black',
      shippingMethods: 'tablerate_bestway'
    };
    const dataUser = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      streetAddress: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zip: faker.location.zipCode('#####'),
      country: 'United States',
      phone: faker.phone.number("(###) ###-####"),
    };
    const review = {
      summary: 'camisa de ótima qualidade',
      review: 'A camisa é muito boa! Melhor compra',
    }

    cy.log('Acesso a página e verifico seu carregamento.');
    cy.visit('https://magento.softwaretestingboard.com/');

    cy.contains('Hot Sellers');
    cy.contains('Here is what`s trending on Luma right now');

    cy.log('Realizo o processo completo de cadastro no site.');
    cy.get(newAccount.header).contains('Create an Account').click()
    cy.get(newAccount.personalInformation.firstName).type(dataUser.firstName);
    cy.get(newAccount.personalInformation.lastName).type(dataUser.lastName);
    cy.get(newAccount.personalInformation.email).type(dataUser.email);
    cy.get(newAccount.personalInformation.password).type(dataUser.password);
    cy.get(newAccount.personalInformation.confirmationPassword).type(dataUser.password);
    cy.get(newAccount.buttons.CreateAccount).should('be.visible');
    cy.get(newAccount.buttons.CreateAccount).click();

    cy.log('Verifico se o cadastro foi feito com sucesso')
    cy.get(newAccount.message.messageSuccsess).should('be.visible')

    cy.log('Realizo a busca por um produto, verifico se a pagina foi carregada corretamente e o adiciono ao carrinho.');
    cy.get(search.input.search).should('be.visible');
    cy.get(search.input.search).type(`${firstProduct.search}{enter}`);
    cy.wait('@getSearch');
    cy.get(search.body.pageTitle).should('contain', `Search results for: '${firstProduct.search}`)

    cy.contains(firstProduct.shirt).click();
    cy.get(pageProduct.product.sizeXL).should('be.visible').click();
    cy.get(pageProduct.product.sizeSelect).should('have.text', 'XL');
    cy.get(pageProduct.product.colorOrange).should('be.visible').click();
    cy.get(pageProduct.buttons.addToCart).should('be.visible').click();

    cy.log('Verifico se o produto 1 foi adicionado ao carrinho')
    cy.get(search.body.tooltip).should('be.visible');

    cy.go('back');

    cy.log('Adiciono outro produto ao carrinho.');
    cy.contains(SecondProduct.shirt).click();
    cy.get(pageProduct.product.sizeXS).should('be.visible').click();
    cy.get(pageProduct.product.sizeSelect).should('have.text', 'XS');
    cy.get(pageProduct.product.colorBlack).should('be.visible').click();
    cy.get(pageProduct.buttons.addToCart).should('be.visible').click();
    cy.get(search.body.tooltip).should('be.visible');

    cy.log('Verifico se o produto 2 foi adicionado ao carrinho')
    cy.get(search.body.tooltip).should('be.visible');
    cy.contains('shopping cart').click();

    cy.log('Prossigo para o checkout e concluo a compra.');
    cy.wait('@getCheckout');
    cy.get(checkout.body.item).should('contain', firstProduct.shirt, firstProduct.size, firstProduct.color);
    cy.get(checkout.body.item).should('contain', SecondProduct.shirt, SecondProduct.size, SecondProduct.color);
    cy.contains('Proceed to Checkout').click({ force: true });

    cy.get(checkout.input.streetAddress).should('be.visible').type(dataUser.streetAddress);
    cy.get(checkout.input.city).should('be.visible').type(dataUser.city);
    cy.get(checkout.input.state).should('be.visible').select(dataUser.state);
    cy.get(checkout.input.zip).should('be.visible').type(dataUser.zip);
    cy.get(checkout.input.country).should('be.visible').select(dataUser.country);
    cy.get(checkout.input.phone).should('be.visible').type(dataUser.phone);
    cy.get(`input[type="radio"][value="${firstProduct.shippingMethods}"]`).check();
    cy.get(checkout.buttons.next).should('be.visible').click();

    cy.get(checkout.body.shippingCheckmo).check();
    cy.get(checkout.payMethod.body).should('contain', dataUser.firstName);
    cy.get(checkout.payMethod.body).should('contain', dataUser.lastName);
    cy.get(checkout.payMethod.body).should('contain', dataUser.streetAddress);
    cy.get(checkout.payMethod.body).should('contain', dataUser.city);
    cy.get(checkout.payMethod.body).should('contain', dataUser.state);
    cy.get(checkout.payMethod.body).should('contain', dataUser.country);
    cy.get(checkout.payMethod.body).should('contain', dataUser.zip);
    cy.get(checkout.buttons.placeOlder).should('be.visible');
    cy.get(checkout.buttons.placeOlder).click();

    cy.get(checkout.body.sucssesCheckout).contains('Thank you for your purchase!');

    cy.get(search.input.search).should('be.visible');
    cy.get(search.input.search).type(`${firstProduct.search}{enter}`);
    cy.wait('@getSearch');

    cy.contains(firstProduct.shirt).click();

    cy.get(pageProduct.buttons.review).click();

    cy.get(pageProduct.review.fiveStars).click({ force: true });
    cy.get(pageProduct.review.nickname).type(dataUser.firstName);
    cy.get(pageProduct.review.summary).type(review.summary)
    cy.get(pageProduct.review.review).type(review.review)
    cy.get(pageProduct.buttons.submit).click()
    cy.get(pageProduct.tolltip.successMessage).should('be.visible')
  })
})