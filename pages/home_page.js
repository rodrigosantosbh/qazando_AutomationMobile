const { I } = inject();

module.exports = {

  botoes:{
    salvar: '~salvar'
  },
  
  campos:{
    codigo: '~codigo',
    aluno: '~aluno',
    search: '~search'
  },

    checaLoginSucesso() {
      I.waitForElement(this.botoes.salvar, 5)
      I.seeElement(this.botoes.salvar)
    },

    preecheCodigo(codigo){
      I.fillField(this.campos.codigo, codigo)
    },

    preencheNome(nome){
      I.fillField(this.campos.aluno, nome)
    },

    preencheSearch(search){
      I.fillField(this.search.search, search)
    },
    
    registraStudents(){
      I.fillField(this.campos.codigo, codigo)
      I.fillField(this.campos.aluno, nome)
      I.tap(this.botoes.salvar)
    },

    pesquisaStudents(search, check){
      I.fillField(this.search.search, search)
      I.seeElement('~' + 12323 +'')
    }
}
