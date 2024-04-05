import RegisterPage from '../pages/RegisterPage'
import ToDoPage from "../pages/ToDoPage";

describe('Register a new user',()=>{
    const registerPage=new RegisterPage();
    const todoPage = new ToDoPage();

    it('should be able to register', () => {
        registerPage.goTo();
        registerPage.register();
        todoPage.getWelcomeMessage().should('be.visible');
        todoPage.getNoTodosMessage().should('have.text','No Available Todos');
        todoPage.getNoTodosMessage().should(($text)=>{
            expect($text.text()).to.be.equal('No Available Todos');
        })
        todoPage.getAddNewToDoText().should('have.text','Add a new Todo');

    });

})