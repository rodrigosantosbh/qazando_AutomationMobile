Feature('login');

const { I, login_page } = inject()

BeforeSuite (() => {
    console.log("Teste before suite antes de cada Suite")
})

Before (() => {
    console.log("Teste before antes de cada cenário")
})

AfterSuite (() => {
    console.log("Teste After suite depois de cada Suite")
})

After (() => {
    console.log("Teste after depois de cada cenário")
})

Scenario('Login com sucesso', ({home_page}) => {
    login_page.fazLogin('teste@teste.com','123456')
    home_page.checaLoginSucesso()
    // pause() usado para parar o teste para debug
});

Scenario('Login com erro', () => {
    login_page.fazLogin('xteste@teste.com','123456')
    login_page.checaLoginError()
});
