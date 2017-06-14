import { PunchstarterPage } from './app.po';

describe('punchstarter App', () => {
  let page: PunchstarterPage;

  beforeEach(() => {
    page = new PunchstarterPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
