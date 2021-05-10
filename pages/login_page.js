const { I } = inject();

module.exports = {

  fields:{
    email: '~email',
    senha: '~senha'
  },

  botoes:{
    entrar: '~entrar'
  },

  mensagens:{
    loginError: '~lognFail'
  },

  fazLogin(email, senha) {
    I.fillField(this.fields.email, email)
    I.fillField(this.fields.senha, senha)
    I.tap(this.botoes.entrar)
  },

  checaLoginError() {
    I.waitForElement(this.mensagens.loginError, 5)
    I.seeElement(this.mensagens.loginError)
  },
}
