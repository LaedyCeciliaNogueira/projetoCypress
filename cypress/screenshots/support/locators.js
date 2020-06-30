const locators ={
  LOGIN: {
      USER: '#login',
      PASSWORD: '#password',
      BT_LOGIN: ':nth-child(3) > .btn',
      MSG_SUCESSO:'.tester > .action > .col > .btn',
      MSG_ERRO: '.login-error'
  },

  TESTAR: '.tester > .action > .col > .btn',

  MENU: {
    GERENCIAR_PROJETOS: '[mattooltip="Gerenciar Projetos"] > .crowd-icon',
    HOME: '[mattooltip="Home"] > .crowd-icon',
    MEUS_PROJETOS: '[mattooltip="Meus Projetos"] > .crowd-icon'
  },

  BOTOES:{
    BT_SALVAR: '.btn-crowdtest',
    BTN_FECHAR: '.alert-box-actions > .btn',
    BTN_PROXIMO: '.btn-crowdtest'
  },

  MENSAGENS:{
    MSG_SUCESSO: '[style="white-space: pre-wrap;"]',
  },
  INCLUIR_PROJETO: {
    PROJETOS: '#selectProject-div > .title > .bottom-line > .ng-fa-icon > .svg-inline--fa',
    BT_NOVOPROJETO: '.btn',
    CP_ID: '#identifier',
    CP_NOME: '#name',
    CP_DESCRICAO: '#description',
    ADD_FEATURE: '#add_features',
    CP_ADD_FEATURE: '.col-11 > .form-control',
    SELECT_TIPO: '.ng-arrow-wrapper',
    LISTA: 'ng-dropdown-panel> div div div',
    ID_OBRIGATORIO: '#elementErrorMsg_identifier',
  },

  INCLUIR_CASODETESTE:{
    MENU_CASODETESTE: '#mat-tab-label-0-2 > .mat-tab-label-content',
    BTN_INCLUIR: '.col-1 > .btn',
    CP_TITULO: '#name',
    CP_DESCRICAO: '#description',
    CP_RESULTADOESPERASO: '#expectedResult',
    SELECT_FEATURE: '#featureId > .ng-select-container > .ng-value-container > .ng-input > [role="combobox"]',
    LISTA_FEATURE: 'div>div form>div ng-select>ng-dropdown-panel div div div',
  },

  EQUIPE_DO_PROJETO:{
    MENU_EQUIPEDOPROJETO: '#mat-tab-label-0-1 > .mat-tab-label-content',
    CT_TESTADOR: '#addTesters',
    BTN_INCLUIR: '.filter > .col-3 > :nth-child(1)',
    VALIDACAO: 'app-project-testers div mat-table>mat-row mat-cell',
    MSG_ERR0: '[style="white-space: pre-wrap;"]'
  },

  DELETA_PROJETOS:{
    ITENS_PAG: '.ng-input',
    BTN_DELETAR: 'div:nth-child(2) > div > mat-table>mat-row:nth-child(2)>mat-cell div:nth-child(2) fa-icon>svg',
    CONFIRMA_DELETE: '.btn-crowdtest > .ng-star-inserted',
    LISTA_PROJETOS: 'div:nth-child(2) > div > mat-table>mat-row',
    LISTA_VAZIA: 'div:nth-child(2) > div > mat-table'
  },

  BUG_TRACKER:{
    MENU_BUGTRACKER: '#mat-tab-label-1-3 > .mat-tab-label-content',
    MENU_BUGTRACKER_PROJETO: '#mat-tab-label-2-3 > .mat-tab-label-content',
    BTN_NOVAOCORRENCIA: '.col-3 > .btn',

    LISTA_RELEASE:'#releaseId > .ng-select-container > .ng-arrow-wrapper',
    SELECIONA_RELEASE: 'form>div>div>div>ng-select>ng-dropdown-panel>div>div div',
    CT_TITULO_BUG: '#title',

    VALIDACAO_BUG: '[style="white-space: pre-wrap;"]'
  },
  
  RELEASE:{
    MENU_RELEASE: '#mat-tab-label-0-4',
    MENU_RELEASE_PROJETO: '#mat-tab-label-1-4',
    BTN_INCLUIR_RELEASE: '.col-2 > .btn',

    CP_NOME_RELEASE: '#name',
    CP_INSTRUCOES: '.ck-blurred',
    CHECKBOX_AGENDAMENTO: '.mat-checkbox-inner-container',
    LISTA_FEATURES: '.ng-arrow-wrapper',
    SELECIONA_FEATURE: 'ng-select>ng-dropdown-panel>div div div',  
    RELEASE_TIPO_PPB: '#mat-radio-3 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle',
    RADIO_ABRANGENCIA_INTERNA: '#mat-radio-8 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle',
    BTN_PROXIMO_PG2: 'app-release-second-step.ng-star-inserted > [style=""] > .div-actions > :nth-child(2)',
    TIPO_OCORRENCIA: '#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container',
    BTN_PROXIMO_PG3: 'app-release-third-step.ng-star-inserted > [style=""] > .div-actions > .ng-star-inserted',
    RADIO_NAO: '#mat-radio-11 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle',
    BTN_PROXIMO_PG4: 'app-release-fourth-step.ng-star-inserted > div.ng-star-inserted > .div-actions > :nth-child(2)',
    DECLARO_QUE_LI: '#mat-checkbox-8 > .mat-checkbox-layout > .mat-checkbox-inner-container',
    BTN_CONCLUIR_CADASTRO: ':nth-child(10) > .col > :nth-child(2)',
    VALIDACAO_RELEASE: '.mat-row > .cdk-column-title'
  },

  VALIDA_TELA:{
    VALIDA_ICON_PROJETOS: '.ng-value-label',
    VALIDA_ICON_TESTERS: ':nth-child(2) > .card > .title > .text-line',
    VALIDA_ICON_CASOTESTE: ':nth-child(4) > .card > .title > .text-line',
    VALIDA_ICON_ESTATISTICA: ':nth-child(5) > .card > .title > .text-line',
    VALIDA_ICON_RELEASE: ':nth-child(3) > .card > .title > .text-line',
    VALIDA_ICON_OCORRENCIA: ':nth-child(6) > .card > .title > .text-line'
  } 
}
export default locators; 