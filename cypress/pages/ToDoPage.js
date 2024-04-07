import testData from "../fixtures/testData.json";

export default class ToDoPage {

    locators={
        welcomeMessage:()=>cy.get('[data-testid="welcome"]'),
        deleteButton:()=>cy.get('[data-testid="delete"]'),
        addAnewTodoText:()=>cy.get('.sc-hHLeRK'),
        plusAddNewToDoButton:()=>cy.get('[data-testid="add"]'),
        noTodosMessage:()=>cy.get('[data-testid="no-todos"]'),
        todoItem:()=>cy.get('[data-testid="new-todo"]'),
        createAnewToDoHeader:()=>cy.get('[data-testid="header"]'),
        createAnewToDoButton:()=>cy.get('[data-testid="submit-newTask"]'),
        toDoText:()=>cy.get('[data-testid="todo-text"]')



    }

    goTo() {
        cy.visit('/todo');
    }
    getWelcomeMessage() {
        return this.locators.welcomeMessage();
    }

    deleteTodo() {
       return this.locators.deleteButton().click();
    }

    getNoTodosMessage() {
      return this.locators.noTodosMessage();
    }

    getAddNewToDoText(){
        return this.locators.addAnewTodoText();
    }

    getTodoItem() {
      return this.locators.todoItem();
    }

    clickAddToDoItem(){
       return this.locators.plusAddNewToDoButton().click();
    }

    validateTexts(){
        this.locators.welcomeMessage().should('be.visible');
        this.locators.addAnewTodoText().should((el)=>{
            expect(el.text()).to.be.eq('Add a new Todo');
        })
        this.locators.noTodosMessage().should('have.text','No Available Todos');
    }

    createANewToDo(todo){
        this.goTo();
        this.clickAddToDoItem();
        this.locators.todoItem().type(todo);
        this.locators.createAnewToDoButton().click();
    }
    createTaskUsingAPI(token){
        return cy.request({
            method: 'POST',
            url:`${testData.api_baseUrl+'/tasks'}`,
            body: {
                item: "Make Demo",
                isCompleted: false
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}