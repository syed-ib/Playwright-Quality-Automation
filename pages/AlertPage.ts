import { Page, expect } from '@playwright/test';

/**
 * AlertPage encapsulates all alert interactions on the site
 * This follows Page Object Model (POM) principles:
 * - Keeps UI selectors in one place
 * - Keeps test logic clean
 * - Makes future maintenance easier
 */
export class AlertPage {
  // The Playwright Page object
  constructor(private page: Page) {}

  /**
   * Navigate to the main page
   */
  async open() {
    await this.page.goto('https://testautomationpractice.blogspot.com/');
  }

  /**
   * Trigger a simple alert and return its message
   * Uses waitForEvent('dialog') for stable, deterministic handling
   */
  async triggerSimpleAlert(): Promise<string> {
    const dialogPromise = this.page.waitForEvent('dialog');
    await this.page.getByRole('button', { name: 'Simple Alert' }).click();
    const dialog = await dialogPromise;
    return dialog.message();
  }

  /**
   * Trigger a confirmation alert and return its message
   */
  async triggerConfirmationAlert(): Promise<string> {
    const dialogPromise = this.page.waitForEvent('dialog');
    await this.page.getByRole('button', { name: 'Confirmation Alert' }).click();
    const dialog = await dialogPromise;
    return dialog.message();
  }

  /**
   * Trigger a prompt alert and return its message
   */
  async triggerPromptAlert(): Promise<string> {
    const dialogPromise = this.page.waitForEvent('dialog');
    await this.page.getByRole('button', { name: 'Prompt Alert' }).click();
    const dialog = await dialogPromise;
    return dialog.message();
  }
}
