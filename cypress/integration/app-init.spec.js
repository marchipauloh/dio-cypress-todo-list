describe('App initialization', () => {
  beforeEach(() => {

    //alterando a rota da API chamada, para mockar alguns dados para teste
    //fixture -> pasta onde se encontra os json dos dados mockados
    //server -> abrindo um servidor cypress para alterar a api
    //cy.server();
    // cy.fixture('todos').then(todos =>{
    //   cy.route('/ToDoModels', todos);
    // });
    //route -> alterando a rota da API, inserindo os dados mockados
    //as -> comando para dar nome a uma rota
    //cy.route('/ToDoModels', 'fixture:todos').as('load');

    //cy.visit('/');
    //wait -> aguardar a rota carregar para continuar
    //cy.wait('@load')

    //acessar o arquivo /support/commands na função deseja e executar a função
    cy.seedAndVisit();
  });

  it('Displays todos from API on load', () => {
    cy.get('.task-wrapper')
      .should('have.length', 4);
  });
});