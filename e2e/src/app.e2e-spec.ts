import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('home page test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should check header presentation on home page', () => {
    page.navigateTo();
    expect(page.isHeaderPresent()).toBeTruthy('.web-header should exist in header.component.css');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
