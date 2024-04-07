const seletores = {
    REGISTRO_DOMINIO_WEB: { 
        MSG_DOMINIO_LIVRE: 'h2[class="domain-title avaliable"]',
        ROLAGEM_TELA: 'div[class="click-suggestion-label"]',
        CAMPO_NOME_DOMINIO: 'input[class="input-domain"]',
        BOTAO_CONSULTE: 'button[class="button-primary btn-search"]',
        BOTAO_REGISTRE: 'button[class="btn-item-register btn-buy btn-register-submit button-primary"]'
    },
    CONTRATAR_REGISTRO_TRANSFERENCIA_DOMINIO: {
        TITULO_CONTRATAR_REGISTRO_TRANSFERENCIA_DOMINIO: 'h1[class="ficha-title"]',
        ICONE_OK: 'i[class="ico icon-ok"]',
        MSG_DOMINIO_NAO_DISPONIVEL: 'div[class="msg-warning-default"]',
        CAMPO_CPF_CNPJ: ':nth-child(2) > .search-doc > .input-document',
        CAMPO_NOME_DOMINIO: 'input[placeholder="Seu domínio"]',
        BOTAO_VALIDAR: ':nth-child(2) > .search-doc > .btn-search-validate-doc > .search',
        BOTAO_CONTINUAR: '.mod-ficha > .submit-button > .inner > .btn-buy',
        OPCAO_PESQUISAR: 'button[aria-label="Pesquisar"]',
        OPCAO_CONTRATAR_APENAS_MEUS_DOMINIOS: '.product-box.product-box-cross-null > div > h3'
    },
    CONTRATAR_REGISTRO_DOMINIO: {
        TITULO_CONTRATAR_REGISTRO_DOMINIO: 'h1[class="ck-title-1 ck-main-title"]',
        SECAO_ACESSE_SUA_CONTA: 'div:nth-child(2) > div > h3',
        SECAO_INFORMACOES_PAGAMENTO: 'div[class="payment-header"]',
        CAMPO_USUARIO: '#Login',
        CAMPO_SENHA: 'input[name="Password"]',
        BOTAO_ENTRAR: '#enter'
    }
}

export default seletores