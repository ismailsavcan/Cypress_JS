import {faker} from "@faker-js/faker";
import testData from '../fixtures/testData.json';

export default class RegisterPage {
    get firstNameInput() {
        return '[data-testid="first-name"]';
    }

    get lastNameInput() {
        return '[data-testid="last-name"]';
    }

    get emailInput() {
        return '[data-testid="email"]';
    }

    get passwordInput() {
        return '[data-testid="password"]';
    }

    get confirmPasswordInput() {
        return '[data-testid="confirm-password"]';
    }

    get submitButton() {
        return '[data-testid="submit"]';
    }

    goTo() {
        cy.visit('/signup');
    }

    register() {
        cy.get(this.firstNameInput).type(faker.person.firstName());
        cy.get(this.lastNameInput).type(faker.person.lastName());
        cy.get(this.emailInput).type(faker.internet.email());
        cy.get(this.passwordInput).type(testData.password);
        cy.get(this.confirmPasswordInput).type(testData.password);
        cy.get(this.submitButton).click();
    }

    intercept() {
       return cy.intercept({
            url: '**/register',
            method: 'POST'
        })
    }
    registerUsingAPI(){
       return cy.request({
            method: 'POST',
            url: 'https://todo.qacart.com/api/v1/users/register',
            body: {

                email: faker.internet.email(),
                password: "1234Ali@",
                firstName: "Esmeralda",
                lastName: "Effertz"

            },
        })
    }
}