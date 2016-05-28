export class DevPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dev-app h1')).getText();
  }
}
