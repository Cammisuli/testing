import { DevPage } from './app.po';

describe('dev App', function() {
  let page: DevPage;

  beforeEach(() => {
    page = new DevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dev works!');
  });
});