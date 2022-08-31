describe('Form input', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Focuses the input on load', () => {
    //focused -> procura o campo com foca quando a tela abre
    cy.focused()
      .should('have.id', 'title');
  });

  //.only -> faz com que apenas esse cenario "it" rode, ignorando os demais deste arquivo (it.only)
  it('Accepts input', () => {
    const value = 'New todo';
    //type -> insere dados no campo resgatado pelo get
    cy.get('#title')
      .type(value)
      .should('have.value', value);
  });
});