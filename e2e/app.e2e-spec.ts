import { ConferenceOrganizerAngular2Page } from './app.po';

describe('conference-organizer-angular2 App', () => {
  let page: ConferenceOrganizerAngular2Page;

  beforeEach(() => {
    page = new ConferenceOrganizerAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
