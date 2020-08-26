import { browser, by, element } from 'protractor';

export class AppPage {
// navigate to home page
navigateTo() {
  return browser.get('/');
}

// get header
getHeader(): ElementFinder {
  return element(by.css('.web-header'));
}
// check header is present or not
isHeaderPresent(): promise.Promise<boolean> {
  return this.getHeader().isPresent();
}
}
