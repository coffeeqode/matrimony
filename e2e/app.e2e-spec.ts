import { MatrimonialPage } from './app.po';

describe('matrimonial App', () => {
  let page: MatrimonialPage;

  beforeEach(() => {
    page = new MatrimonialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
