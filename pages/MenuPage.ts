import { Page } from '@playwright/test';

/**
 * MenuPage handles hover actions and menu navigation.
 */
export class MenuPage {
  constructor(private page: Page) {}

  /** Open the page */
  async open() {
    await this.page.goto('https://testautomationpractice.blogspot.com/');
  }

  /**
   * Hover over menu and click subsequent buttons/links
   * Preserves your working script
   */
  async hoverAndNavigate() {
    // Hover over the menu
    //await this.page.locator('#menu1').hover();

    // Wait shortly for hover effects (stable)
    await this.page.waitForTimeout(500);

    // Click "Point Me" button
    await this.page.getByRole('button', { name: 'Point Me' }).click();

    // Click "Mobiles" link
    await this.page.getByRole('link', { name: 'Mobiles' }).click();

    // Click "Copy Text" button
    await this.page.getByRole('button', { name: 'Copy Text' }).click();
  }
}
