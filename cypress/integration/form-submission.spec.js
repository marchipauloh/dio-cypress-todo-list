describe('Form submit', () => {
  it('Adds a new todo item', () => {
    const newTodo = {
      id: 123,
      title: 'Buy Pizza',
      completed: false
    };

    cy.server();
    cy.route({
      method: 'POST',
      url: '/ToDoModels',
      response: newTodo
    }).as('save');

    cy.seedAndVisit();

    cy.fixture('todos').then(todos => {
      cy.route('get', '/ToDoModels', [...todos, newTodo]).as('second-load');
    });

    cy.get('#title')
      .type(newTodo.title)
      .type('{enter}');
    cy.wait('@save');
    cy.wait('@second-load');

    cy.get('.task-wrapper')
      .should('have.length', 5);
  });

  it('Shows error message for a failed submission', () =>{
    cy.server();
    cy.route({
      method: 'POST',
      url: '/ToDoModels',
      status: 500,
      response: {}
    }).as('save');

    cy.seedAndVisit();

    cy.get('#title')
      .type('Buy pizza')
      .type('{enter}');

    cy.wait('@save');
    
    cy.get('.task-wrapper')
    .should('have.length', 4);

    cy.on('windows:alert', text => {
      expect(text).toBe.contains('500');
    })

  });
});