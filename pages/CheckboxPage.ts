import { Page } from '@playwright/test';

/**
 * CheckboxPage handles all interactions with checkboxes
 * in tables, including pagination.
 */
export class CheckboxPage {
  constructor(private page: Page) {}

  /** Open the main page (where checkboxes exist) */
  async open() {
    await this.page.goto('https://testautomationpractice.blogspot.com/');
  }

  /**
   * Select checkboxes in the table across multiple pages
   * This uses the working locators from your previous script
   */
  async selectCheckboxes() {
    // Select first checkbox
    await this.page.locator('td:nth-child(4) > input').first().check();

    // Select second row
    await this.page.locator('tr:nth-child(2) > td:nth-child(4) > input').check();

    // Pagination: click page 2
    await this.page.getByRole('link', { name: '2', exact: true }).click();

    // Select checkbox on page 2
    await this.page.locator('tr:nth-child(5) > td:nth-child(4) > input').check();

    // Pagination: page 3
    await this.page.getByRole('link', { name: '3', exact: true }).click();

    // Select checkbox on page 3
    await this.page.locator('td:nth-child(4) > input').first().check();

    // Pagination: page 4
    await this.page.getByRole('link', { name: '4', exact: true }).click();

    // Select multiple checkboxes
    await this.page.locator('tr:nth-child(5) > td:nth-child(4) > input').check();
    await this.page.locator('tr:nth-child(4) > td:nth-child(4) > input').check();
    await this.page.locator('tr:nth-child(3) > td:nth-child(4) > input').check();
    await this.page.locator('tr:nth-child(2) > td:nth-child(4) > input').check();

    // Select first checkbox again to ensure stability
    await this.page.locator('td:nth-child(4) > input').first().check();
  }
}
