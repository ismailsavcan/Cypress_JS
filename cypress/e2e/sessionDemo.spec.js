import ToDoPage from "../pages/ToDoPage";
import LoginPage from "../pages/LoginPage";
import testData from "../fixtures/testData.json";

describe('Create new ToDO ', () => {
    let todoPage;
    let loginPage;
    beforeEach(() => {
        todoPage = new ToDoPage();
        loginPage = new LoginPage();
        /*
        loginPage.goTo();
        loginPage.login();
         */
        cy.login(testData.email,testData.password);
    })

    it('Create  new task with already registered user ', () => {
        todoPage.goTo();
        todoPage.validateTexts();
        todoPage.createANewToDo("make demo")
    });

    it('should delete created task', () => {
        todoPage.goTo();
        todoPage.deleteTodo()
        todoPage.validateTexts();
    });
    it('Create another task in order tp use cy.session', () => {
        todoPage.goTo();
        todoPage.validateTexts();
        todoPage.createANewToDo("make demo")
    });

    it('should delete created task', () => {
        todoPage.goTo();
        todoPage.deleteTodo()
        todoPage.validateTexts();
    });

})