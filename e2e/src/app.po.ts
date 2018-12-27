import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getBtnSalvar() {
    return element(by.id('salvar'));
  }

  getAlertSuccess() {
    return element(by.css('.alert-success'));
  }

  getAlertDanger() {
    return element(by.css('.alert-danger'));
  }

  getInputPesquisa() {
    return element(by.css('input[name="pesquisa"]'));
  }

  getBtnHover() {
    return element(by.id('hover'));
  }

  getMsgHover() {
    return element(by.id('hover-msg'));
  }
}
