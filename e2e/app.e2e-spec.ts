import { IdeatorPocPage } from './app.po';

describe('ideator-poc App', function() {
  let page: IdeatorPocPage;

  beforeEach(() => {
    page = new IdeatorPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
