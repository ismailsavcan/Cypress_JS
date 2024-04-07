import RegisterPage from "../pages/RegisterPage";
import ToDoPage from "../pages/ToDoPage";

describe('Combine UI and API', () => {
    const registerPage = new RegisterPage();
    const todoPage = new ToDoPage();

    it('should combine UI and API', () => {
        registerPage.goTo();
        registerPage.intercept().as('register')

        registerPage.register();
        cy.wait('@register').then((reg) => {
            expect(reg.response.statusCode).to.equal(201)
            let token = reg.response.body.access_token;
            todoPage.createTaskUsingAPI(token);
        });

        todoPage.goTo();
        todoPage.locators.addAnewTodoText().should('have.text', 'Add a new Todo');
        todoPage.deleteTodo();
        todoPage.locators.noTodosMessage().should((el) => {
            expect(el.text()).to.equal('No Available Todos')
        })
    });
    it('should combine API and UI', () => {
        registerPage.registerUsingAPI().then((response)=>{
           todoPage.createTaskUsingAPI(response.body.access_token);
        })
        todoPage.goTo();
        todoPage.locators.welcomeMessage().should('be.visible');
        todoPage.deleteTodo();
        todoPage.locators.noTodosMessage().should((el) => {
            expect(el.text()).to.equal('No Available Todos')
        })
    });

});