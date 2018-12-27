import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('Index home', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Tela virgem', () => {
    page.navigateTo();
    expect(page.getBtnSalvar().isPresent()).toEqual(true);
    expect(page.getInputPesquisa().isPresent()).toEqual(true);
    expect(page.getAlertSuccess().isPresent()).toEqual(false);
    expect(page.getAlertDanger().isPresent()).toEqual(false);
  });

  it('Salvar com formulário invalido', () => {
    page.navigateTo();
    page.getBtnSalvar().click();
    expect(page.getAlertSuccess().isPresent()).toEqual(false);
    expect(page.getAlertDanger().isPresent()).toEqual(true);
    expect(page.getAlertDanger().getText()).toEqual('Campo pesquisa está inválido!');
  });

  it('Salvar com formulário válido', () => {
    page.navigateTo();
    page.getInputPesquisa().sendKeys('Pedro');
    page.getBtnSalvar().click();
    expect(page.getAlertDanger().isPresent()).toEqual(false);
    expect(page.getAlertSuccess().isPresent()).toEqual(true);
    expect(page.getAlertSuccess().getText()).toEqual('Pesquisa realizada com sucesso');
  });


  it('Botão hover - mouse out', () => {
    page.navigateTo();
    expect(page.getMsgHover().isPresent()).toEqual(true);
    expect(page.getMsgHover().isDisplayed()).toEqual(false);
  });

  it('Botão hover - mouse over', () => {
    page.navigateTo();
    browser.waitForAngular();
    browser.actions().mouseMove(page.getBtnHover()).perform();
    expect(page.getMsgHover().isPresent()).toEqual(true);
    expect(page.getMsgHover().isDisplayed()).toEqual(true);
  });
});
