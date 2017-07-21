import { DemorxPage } from './app.po';

describe('demorx App', () => {
  let page: DemorxPage;

  beforeEach(() => {
    page = new DemorxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
