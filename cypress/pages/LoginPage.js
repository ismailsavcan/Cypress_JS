import testData from '../fixtures/testData.json';

export default class LoginPage {

    locators = {
        emailInput: () => cy.get('[data-testid="email"]'),
        passwordInput: () => cy.get('[data-testid="password"]'),
        loginButton: () => cy.get('[data-testid="submit"]'),
        readyToMarkText:()=>cy.get('.sc-hKMtZM'),
        loginToAppText:()=>cy.get('.sc-dkzDqf'),
        createANewAccountText:()=>cy.get('[data-testid="signup"]')
    }

    goTo() {
        cy.visit('/login');
    }
    validateTexts(){
        this.locators.loginToAppText().should('be.visible');
        this.locators.loginToAppText().should(($text)=>{
            expect($text.text()).to.be.eq('Login to Application');
        })
        this.locators.readyToMarkText().should('be.visible');
        this.locators.readyToMarkText().should('have.text','Ready to mark some Todos as completed?');
        this.locators.createANewAccountText().should('be.visible')
    }

    login() {
        this.locators.emailInput().type(testData.email, {log: false});
        this.locators.passwordInput().type(testData.password, {log: false});
        this.locators.loginButton().click();
    }
}