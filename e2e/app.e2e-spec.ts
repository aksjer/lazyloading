import { LazyPage } from './app.po';

describe('lazy App', () => {
  let page: LazyPage;

  beforeEach(() => {
    page = new LazyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
