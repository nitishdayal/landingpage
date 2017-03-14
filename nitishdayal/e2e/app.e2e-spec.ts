import { NitishdayalPage } from './app.po';

describe('nitishdayal App', () => {
  let page: NitishdayalPage;

  beforeEach(() => {
    page = new NitishdayalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
