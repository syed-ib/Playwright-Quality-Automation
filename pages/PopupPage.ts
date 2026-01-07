import { Page, expect } from '@playwright/test';

/**
 * PopupPage handles multiple popup windows and verifies URLs.
 */
export class PopupPage {
  constructor(private page: Page) {}

  /** Open the page */
  async open() {
    await this.page.goto('https://testautomationpractice.blogspot.com/');
  }

  /**
   * Click the popup button and verify that exactly two popups open
   * Then check their URLs contain expected strings
   */
  async verifyPopups() {
    const popups: Page[] = [];

    // Listen for popup events
    this.page.on('popup', popup => popups.push(popup));

    // Click the PopUp button
    await this.page.click('#PopUp');

    // Wait until exactly 2 popups are opened
    await expect.poll(() => popups.length).toBe(2);

    // Verify the URLs
    const urls = popups.map(p => p.url());
    expect(urls).toEqual(
      expect.arrayContaining([
        expect.stringContaining('selenium.dev'),
        expect.stringContaining('playwright.dev')
      ])
    );
  }
}
