Feature('students');

const { I, login_page, home_page } = inject()

Scenario('Adicionar alunos com sucesso', ({}) => {
    login_page.fazLogin('teste@teste.com','123456')
    home_page.registrarStudents('1010', 'Rodrigo Santos')
    home_page.pesquisaStudents('1010', 'Rodrigo Santos')
});
