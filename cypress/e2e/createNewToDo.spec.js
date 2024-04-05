import ToDoPage from "../pages/ToDoPage";
import LoginPage from "../pages/LoginPage";

describe('Create new ToDO ', () => {
    let todoPage;
    let loginPage;
    beforeEach(() => {
        todoPage = new ToDoPage();
        loginPage = new LoginPage();
        loginPage.goTo();
        loginPage.login();
    })

    it('Create  new task with already registered user ', () => {
        loginPage.validateTexts();
        todoPage.validateTexts();
        todoPage.createANewToDo("make demo")
    });

    it('should delete created task', () => {
        todoPage.deleteTodo()
        todoPage.validateTexts();
    });

})