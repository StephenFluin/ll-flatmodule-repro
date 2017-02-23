import { LlFlatmodulePage } from './app.po';

describe('ll-flatmodule App', () => {
  let page: LlFlatmodulePage;

  beforeEach(() => {
    page = new LlFlatmodulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
