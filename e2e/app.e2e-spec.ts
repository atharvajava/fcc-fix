import { FccFixPage } from './app.po';

describe('fcc-fix App', () => {
  let page: FccFixPage;

  beforeEach(() => {
    page = new FccFixPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
