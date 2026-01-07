import { Page } from '@playwright/test';

/**
 * DropdownPage handles interactions with custom and standard dropdowns.
 */
export class DropdownPage {
  constructor(private page: Page) {}

  /** Open the page */
  async open() {
    await this.page.goto('https://testautomationpractice.blogspot.com/');
  }

  /**
   * Select an item from a custom dropdown
   * Preserves working code from your original script
   */
  async selectDropdownItem(item: string) {
    // Click on the dropdown textbox
    await this.page.getByRole('textbox', { name: 'Select an item' }).click();

    // Select the exact item
    await this.page.getByText(item, { exact: true }).click();
  }
}
