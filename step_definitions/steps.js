const { I } = inject();

Given('Eu preencho o e-mail', () => {
  I.fillField('~email', 'teste@teste.com')
});

Given('Eu preencho a senha', () => {
  I.fillField('~senha', '123456')
});

When('Eu clicar em Entrar', () => {
  I.tap('~entrar')
});

Then('Eu vejo o botão Salvar', () => {
  I.waitForElement('~salvar', 5)
  I.seeElement('~salvar')
});
