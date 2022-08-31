describe('App initialization', () => {
  beforeEach(() => {

    //alterando a rota da API chamada, para mockar alguns dados para teste
    //fixture -> pasta onde se encontra os json dos dados mockados
    //server -> abrindo um servidor cypress para alterar a api
    cy.server();
    // cy.fixture('todos').then(todos =>{
    //   cy.route('/ToDoModels', todos);
    // });
    //route -> alterando a rota da API, inserindo os dados mockados
    cy.route('/ToDoModels', 'fixture:todos');

    cy.visit('/');
  });

  it('Displays todos from API on load', () => {
    cy.get('.task-wrapper')
      .should('have.length', 4);
  });
});